import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
// import { OrderService } from '../../../services/order.service';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
// import { DealerService } from '../../../services/dealer.service';
// import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { SarokhwearhouseService } from '../../../../services/sarokhwearhouse.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY } from '@angular/material';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { CityCountryService } from '../../../../services/cityCountry.service'
@Component({
  selector: 'app-addsarokhwearhouse',
  templateUrl: './addsarokhwearhouse.component.html',
  styleUrls: ['./addsarokhwearhouse.component.css']
})
export class AddsarokhwearhouseComponent implements OnInit {
  allcities;
  allCountryList;
  pageHeading = "Add Sarokh Warehouse";
  ngAfterViewInit() {
    // this.renderMap();
  }
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  warehouseadress: FormGroup;
  warehousemanager: FormGroup;
  amenities: FormGroup;
  storagecapacity: FormGroup
  template = {} as any;
  multiple = false;
  editwarehouse = false;
  validationErrorMessage = "Please Enter Required Fields";
  public selectedLatitude: any;
  public selectedLongitude: any;
  map;
  @Output()
  showlisting = new EventEmitter<boolean>();
  // shipmentDetails: Shipment[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private sarokhwarehouse: SarokhwearhouseService,
    // private warehouseService: WarehouseService,
    private shareData: DataService,
    private router: Router,
    private toaster: ToastrService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private countryCityList: CityCountryService,
  ) { }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
    // this.shipmentDetails = [];

    // this.addShipmentDetail();
    this.getCountryList();
    this.initializeWarehouseAdress();
    this.initializeWarehouseManager();
    this.initializeamenities();
    this.initializestorageCapacity();
    // this.generateOrderID();

    const sharedId = this.shareData.getID();
    if (sharedId) {
      this.editwarehouse = true;
      this.sarokhwarehouse.fetchSingleWarehouse(sharedId).subscribe(res => {
        console.log("single", res)
        this.getCityData(res.country);
        this.pageHeading = "Edit Sarokh Warehouse";
        this.warehouseadress = this.formbuilder.group({
          id: [res.id],
          name: [res.name],
          address: [res.address],
          city: [res.city],
          country: [res.country],
          postalCode: [res.postalCode],
          locationLongitude: [res.longitude],
          locationLatitude: [res.latitude],
        })
        this.amenities = this.formbuilder.group({
          forkLifter: [res.forkLifter],
          thermalPrinter: [res.thermalPrinter],
          qrscanner: [res.qrscanner],

        })
        this.warehousemanager = this.formbuilder.group({
          managerName: [res.managerName],
          mangerContact: [res.mangerContact],
          mangerEmail: [res.mangerEmail],
          operationalTime: [res.operationalTime],
          // shipperId: shipperId  
        })
        this.storagecapacity = this.formbuilder.group({
          racksPerRow: [res.racksPerRow],
          rows: [res.rows],
          dimensions: [res.dimensions],
          columnsPerRow: [res.columnsPerRow]
        })
      })
    }

  }

  get f() { return this.warehouseadress.controls; }
  initializeWarehouseAdress() {
    this.warehouseadress = this.formbuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      locationLongitude: [''],
      locationLatitude: [''],
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
    let shipperId = localStorage.getItem('_id')
    this.warehousemanager = this.formbuilder.group({
      managerName: ['', [Validators.required]],
      mangerContact: ['', [Validators.required]],
      mangerEmail: ['', [Validators.required]],
      operationalTime: [''],
      shipperId: shipperId
    })
  }
  initializestorageCapacity() {
    this.storagecapacity = this.formbuilder.group({
      racksPerRow: ['', [Validators.required]],
      rows: ['', [Validators.required]],
      // dimensions: ['' , [Validators.required]],
      columnsPerRow: ['', [Validators.required]]
    })
  }
  sarokhwarehouseSelected(warehouse): void {
    this.template.users = [];
    this.template.sarokhwarehouses.forEach(element => {
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
  closeAdd() {
    this.showlisting.emit(true);
    this.storagecapacity.reset();
    this.warehousemanager.reset();
    this.warehouseadress.reset();
    this.amenities.reset();
    this.shareData.setID('')
  }
  valuestest() {

    console.log(this.warehouseadress.value);
  }
  finishFunction() {


    this.warehouseadress.patchValue({ 'locationLongitude': this.longitude });
    this.warehouseadress.patchValue({ 'locationLatitude': this.latitude });
    console.log(this.warehouseadress.value);

    var fullFormData = {
      basicInfo: this.warehouseadress.value,
      shipmentItems: this.warehousemanager.value,
      amminitie: this.amenities.value,
      storagecapacity: this.storagecapacity.value



    }
    console.log("fullFormData", fullFormData)
    const fullRequest = {
      ...fullFormData.basicInfo,
      ...fullFormData.shipmentItems,
      ...fullFormData.amminitie,
      ...fullFormData.storagecapacity
    };

    console.log("fullFormData", fullRequest)
    if (this.editwarehouse == false) {
      this.sarokhwarehouse.AddSarokhWarehouse(fullRequest).subscribe(res => {
        console.log("res", res)
        if (res.managerName) {
          this.toaster.success("Sarokh Warehouse Added Successfully");
          this.router.navigate(['/admin/sarokhwearhouselist']);
        }
        localStorage.setItem("latitude", '');
        localStorage.setItem("logitude", '');
      })
    } else {
      this.sarokhwarehouse.updateSarokhWearhouse(fullRequest).subscribe(res => {
        console.log("res", res)
        if (res.managerName) {
          this.toaster.success("Sarokh Warehouse Added Successfully");
          this.router.navigate(['/admin/sarokhwearhouselist']);
        }
        localStorage.setItem("latitude", '');
        localStorage.setItem("logitude", '');
      })
    }

  }
  showErrorWareHouseAddress() {
    console.log(this.warehouseadress.valid);
    if (this.warehouseadress.valid === false) {
      this.toaster.error(this.validationErrorMessage);
    }
  }
  showErrorWareHouseManager() {
    console.log(this.warehousemanager.valid);
    if (this.warehousemanager.valid === false) {
      this.toaster.error(this.validationErrorMessage);
    }
  }
  showErrorAmenities() {
    console.log(this.amenities.valid);
    if (this.amenities.valid === false) {
      this.toaster.error(this.validationErrorMessage);
    }
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      this.latitude = 21.543333;
      this.longitude = 39.172779;
      this.zoom = 7;
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

}
