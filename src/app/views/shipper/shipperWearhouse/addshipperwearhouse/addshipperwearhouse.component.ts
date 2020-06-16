import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, NgZone } from '@angular/core';

// import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { OrderService } from '../../../services/order.service';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
// import { DealerService } from '../../../services/dealer.service';
// import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { ToastrService } from 'ngx-toastr';
import { ShipperService } from '../../../../services/shipper.service';
import { CityCountryService } from '../../../../services/cityCountry.service'
@Component({
  selector: 'app-addshipperwearhouse',
  templateUrl: './addshipperwearhouse.component.html',
  styleUrls: ['./addshipperwearhouse.component.css']
})
export class AddshipperwearhouseComponent implements OnInit {
  @ViewChild('mapRef', { static: true }) mapElement: ElementRef;
  allCountryList;
  allcities;
  warehouseadress: FormGroup;
  warehousemanager: FormGroup;
  amenities: FormGroup;
  shipperId;
  template = {} as any;
  multiple = false;
  validationErrorMessage = "Please Enter Required Fields";
  editwarehouse = false;
  public selectedLatitude: any;
  public selectedLongitude: any;
  map;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  shipperdata;
  private geoCoder;
  @Output()
  showlisting = new EventEmitter<boolean>();
  @Output() editDone = new EventEmitter<string>();

  
  constructor(
    private formbuilder: FormBuilder,
    private shipperwarehouse: ShipperWearhouseService,
    private dataService: DataService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private toaster: ToastrService,
    private shipperdetails: ShipperService,
    private countryCityList: CityCountryService
  ) { }


  ngAfterViewInit() {
    // this.renderMap();
  }

  ngOnInit(): void {
    this.shipperId = localStorage.getItem('_id')
    this.getCountryList();
    this.shipperdetails.fetchshipperDetails(this.shipperId).subscribe(res => {
      console.log("res", res)
      this.shipperdata = res.user;
      this.warehousemanager.patchValue({
        mangerContact: this.shipperdata.contact,
        mangerEmail: this.shipperdata.email
      })
    })
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
    // this.shipmentDetails = [];
    // this.addShipmentDetail();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
    this.initializeWarehouseAdress();
    this.initializeWarehouseManager();
    this.initializeamenities();
    // this.generateOrderID();
    const sharedId = this.dataService.getID();
    if (sharedId) {
      this.editwarehouse = true;
      console.log("sharedId", sharedId);
      this.shipperwarehouse.fetchSingleWarehouse(sharedId).subscribe(res => {
        console.log("res", res)
        this.warehouseadress = this.formbuilder.group({
          name: [res.name],
          address: [res.address],
          city: [res.city],
          country: [res.country],
          postalCode: [res.postalCode],
          longitude: [res.longitude],
          latitude: [res.latitude],
        })
        console.log(res.operationalTimefrom)
        console.log(res.operationalTimeto)
        this.warehousemanager = this.formbuilder.group({
          managerName: [res.managerName],
          mangerContact: [res.mangerContact],
          mangerEmail: [res.mangerEmail],
          operationalTimeto: [res.operationalTimeto],
          operationalTimefrom: [res.operationalTimefrom],
          shipperId: this.shipperId,
        })
        this.amenities = this.formbuilder.group({
          forkLifter: [res.forkLifter],
          thermalPrinter: [res.thermalPrinter],
          qrscanner: [res.qrscanner],
        })
        
        // this.amenities.patchValue({
        //   forkLifter: [res.forkLifter[0]],
        //   thermalPrinter: [res.thermalPrinter[0]],
        //   qrscanner: [res.qrscanner[0]],
        // })
        console.log(this.amenities.value)
      })
    }
  }
  initializeWarehouseAdress() {
    this.warehouseadress = this.formbuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      locationLatitude: ['',],
      locationLongitude: ['',]
    })
  }
  initializeamenities() {
    this.amenities = this.formbuilder.group({
      forkLifter: ['', [Validators.required]],
      thermalPrinter: ['', [Validators.required]],
      qrscanner: ['', [Validators.required]],

    })
  }
  initializeWarehouseManager() {
    this.shipperId = localStorage.getItem('_id')
    this.warehousemanager = this.formbuilder.group({
      managerName: ['', [Validators.required]],
      mangerContact: [''],
      mangerEmail: [''],
      operationalTimeto: ['', [Validators.required]],
      operationalTimefrom: ['', Validators.required],
      shipperId: this.shipperId,
    })



  }
  shipperWarehouseSelected(warehouse): void {
    this.template.users = [];
    this.template.shipperWarehouses.forEach(element => {
      if (element.id == warehouse) {
        this.template.users = element.users;
      }
    });
  }
  getCountryList() {
    this.countryCityList.fetchCountryList().subscribe(res => {
      this.allCountryList = res.data;
    })
  }
  getCityData(id) {

    this.countryCityList.fetchCityByCountry(id).subscribe(res => {
      console.log("res", res)
      this.allcities = res.data

    })
  }
  finishFunction() {
    this.warehouseadress.controls["locationLongitude"].setValue(this.longitude);
    this.warehouseadress.controls["locationLatitude"].setValue(this.latitude);

    var fullFormData = {
      basicInfo: this.warehouseadress.value,
      shipmentItems: this.warehousemanager.value,
      amminitie: this.amenities.value,
    }
    console.log("fullFormData", fullFormData)
    const fullRequest = {
      ...fullFormData.basicInfo,
      ...fullFormData.shipmentItems,
      ...fullFormData.amminitie
    };
    console.log("fullFormData", fullRequest)
    this.shipperwarehouse.AddShipperWearhouse(fullRequest).subscribe(res => {
      console.log("res", res)
      this.toaster.success("Shipper Warehouse Added")
      this.showlisting.emit(true);
      this.editDone.emit('some value');




    })
  }
  closeAdd() {
    this.showlisting.emit(true);
    this.warehouseadress.reset();
    this.warehousemanager.reset();
    this.amenities.reset();
    this.dataService.setID('')
  }
  updateWarehouse() {
    const sharedId = this.dataService.getID();
    var fullFormData = {
      basicInfo: this.warehouseadress.value,
      shipmentItems: this.warehousemanager.value,
      amminitie: this.amenities.value,


    }
    console.log("fullFormData", fullFormData)
    const fullRequest = {
      ...fullFormData.basicInfo,
      ...fullFormData.shipmentItems,
      ...fullFormData.amminitie
    };

    console.log("fullRequest", fullRequest);


    fullRequest.id = sharedId;
    fullRequest.shipperId = localStorage.getItem('_id');

    console.log("fullRequest", fullRequest);
    this.shipperwarehouse.updateShipperWearhouse(fullRequest).subscribe(res => {
      console.log("res", res)
      if (res) {
        this.showlisting.emit(true);

        this.warehouseadress.reset();
        this.warehousemanager.reset();
        this.amenities.reset();
        this.dataService.setID('')

      }
    })
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      this.latitude = 21.543333;
      this.longitude = 39.172779;
      this.zoom = 7;
      // navigator.geolocation.getCurrentPosition((position) => {
      //   this.latitude = position.coords.latitude;
      //   this.longitude = position.coords.longitude;
      //   this.zoom = 15;
      // });
    }
  }
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          // window.alert('No results found');
        }
      } else {
        // window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
  ShowError() {
    console.log(this.warehouseadress.valid);
    if (this.warehouseadress.valid === false) {
      this.toaster.error("Please Enter Required Fields");
    }
  }

  ShowErrorWarehouseAdress() {
    console.log(this.warehouseadress.valid);
    if (this.warehouseadress.valid === false) {
      this.toaster.error("this.validationErrorMessage");
    }
  }
  ShowErrorWarehouseManager() {
    console.log(this.warehousemanager.valid);
    if (this.warehousemanager.valid === false) {
      this.toaster.error("this.validationErrorMessage");
    }
  }
}