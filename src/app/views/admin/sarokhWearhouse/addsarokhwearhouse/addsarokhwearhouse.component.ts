import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
// import { OrderService } from '../../../services/order.service';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
// import { DealerService } from '../../../services/dealer.service';
// import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { SarokhwearhouseService } from '../../../../services/sarokhwearhouse.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addsarokhwearhouse',
  templateUrl: './addsarokhwearhouse.component.html',
  styleUrls: ['./addsarokhwearhouse.component.css']
})
export class AddsarokhwearhouseComponent implements OnInit {

  @ViewChild('mapRef', { static: true }) mapElement: ElementRef;

  ngAfterViewInit() {
    // this.renderMap();
  }
  warehouseadress: FormGroup;
  warehousemanager: FormGroup;
  amenities: FormGroup;
  storagecapacity: FormGroup
  template = {} as any;
  multiple = false;
  editwarehouse = false;
  public selectedLatitude : any;
  public selectedLongitude : any;
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
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    // this.shipmentDetails = [];

    // this.addShipmentDetail();
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
        this.warehouseadress = this.formbuilder.group({
          name: [res.name],
          address: [res.address],
          city: [res.city],
          country: [res.country],
          postcode: [res.postcode],
          longitude: [res.longitude],
          latitude: [res.latitude],
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
      postcode: ['', [Validators.required]],
      longitude: ['' ],
      latitude: [''],
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
      mangerContact: [''],
      mangerEmail: [''],
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
  closeAdd() {
    this.showlisting.emit(true);
    this.storagecapacity.reset();
    this.warehousemanager.reset();
    this.warehouseadress.reset();
    this.amenities.reset();
    this.shareData.setID('')
  }
  valuestest(){
 
    console.log(this.warehouseadress.value);
  }
  finishFunction() {
    
   
    this.warehouseadress.patchValue({ 'longitude': localStorage.getItem("logitude") });
    this.warehouseadress.patchValue({ 'latitude': localStorage.getItem("latitude") });
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
    this.sarokhwarehouse.AddSarokhWarehouse(fullRequest).subscribe(res => {
      console.log("res", res)
      if (res.managerName) {
        this.toast.success("Sarokh Warehouse Added Successfully");
        this.router.navigate(['/admin/sarokhwearhouselist']);
      }
      localStorage.setItem("latitude",'');
      localStorage.setItem("logitude",'');
    })
  }
}
  // loadMap = () => {
  //   this.map = new window['google'].maps.Map(this.mapElement.nativeElement, {
  //     center: { lat: 23.8859, lng: 45.0792 },
  //     zoom: 7
  //   });
  //   this.map = new window['google'].maps.event.addListener(this.map, 'click', function (event) {
  //     this.selectedLatitude = event.latLng.lat();
  //     this.selectedLongitude = event.latLng.lng();

  //     localStorage.setItem("latitude",this.selectedLatitude);
  //     localStorage.setItem("logitude",this.selectedLongitude);
      
  //     console.log(this.selectedLatitude, this.selectedLongitude)
      
  //     var marker = new window['google'].maps.Marker({
  //       position: new window['google'].maps.LatLng(localStorage.getItem("latitude") , localStorage.getItem("logitude") ),
  //       //  {lat: new window['google'].maps.LatLng( this.selectedLatitude, lng: this.selectedLongitude},
  //       map: this.map,
  //       title: 'Warehouse1',
  //       draggable: true,
  //       animation: window['google'].maps.Animation.DROP,
  //     });
  //     var contentString = '<div id="content">'+
  //     '<div id="siteNotice">'+
  //     '</div>'+
  //     '<h3 id="thirdHeading" class="thirdHeading">Sarokh</h3>'+
  //     '<div id="bodyContent">'+
  //     '<p></p>'+
  //     '</div>'+
  //     '</div>';
  
  //     var infowindow = new window['google'].maps.InfoWindow({
  //       content: contentString
  //     });
  
  //       marker.addListener('click', function() {
  //         infowindow.open(this.map, marker);
  //       });
    
  //   });
  
  
   
  // }
  // renderMap() {
  //   window['initMap'] = () => {
  //     this.loadMap();
  //   }
  //   if (!window.document.getElementById('google-map-script')) {
  //     var s = window.document.createElement("script");
  //     s.id = "google-map-script";
  //     s.type = "text/javascript";
  //     s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjt_DROGYyzEY0BTDt0vrPcZIMLuBUGiw&callback=initMap";

  //     window.document.body.appendChild(s);
  //   } else {
  //     this.loadMap();
  //   }
  // }
