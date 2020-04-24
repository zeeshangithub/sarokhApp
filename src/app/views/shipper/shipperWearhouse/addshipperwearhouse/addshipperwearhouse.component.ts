import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { OrderService } from '../../../services/order.service';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
// import { DealerService } from '../../../services/dealer.service';
// import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addshipperwearhouse',
  templateUrl: './addshipperwearhouse.component.html',
  styleUrls: ['./addshipperwearhouse.component.css']
})
export class AddshipperwearhouseComponent implements OnInit {
  @ViewChild('mapRef', { static: true }) mapElement: ElementRef;

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
  @Output()
  showlisting = new EventEmitter<boolean>();
  @Output() editDone = new EventEmitter<string>();

  constructor(
    private formbuilder: FormBuilder,
    private shipperwarehouse: ShipperWearhouseService,
    private dataService: DataService,
    // private dealerService: DealerService,
    private router: Router,
    private toaster: ToastrService
  ) { }


  ngAfterViewInit() {
    // this.renderMap();
  }

  ngOnInit(): void {
    // this.shipmentDetails = [];
    // this.addShipmentDetail();
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
          postcode: [res.postcode],
          longitude: [res.longitude],
          latitude: [res.latitude],
        })

        this.warehousemanager = this.formbuilder.group({
          managerName: [res.managerName],
          mangerContact: [res.mangerContact],
          mangerEmail: [res.mangerEmail],
          operationalTimeto: [res.operationalTimeto],
          operationalTimefrom: [res.operationalTimefrom],
          shipperId: this.shipperId,
        })

      })
    }

  }
  initializeWarehouseAdress() {
    this.warehouseadress = this.formbuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      longitude: ['',],
      latitude: ['',]
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
  finishFunction() {
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

      // this.router.navigate(['shipper/shipperwearhouse']);
      // window.reload

      localStorage.setItem("latitude", '');
      localStorage.setItem("logitude", '');
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
//   loadMap = () => {
//     this.map = new window['google'].maps.Map(this.mapElement.nativeElement, {
//       center: { lat: 23.8859, lng: 45.0792 },
//       zoom: 7
//     });
//     this.map = new window['google'].maps.event.addListener(this.map, 'click', function (event) {
//       this.selectedLatitude = event.latLng.lat();
//       this.selectedLongitude = event.latLng.lng();



//       localStorage.setItem("latitude",this.selectedLatitude);
//       localStorage.setItem("logitude",this.selectedLongitude);

//       console.log(this.selectedLatitude, this.selectedLongitude)

//       var marker = new window['google'].maps.Marker({
//         position: new window['google'].maps.LatLng(localStorage.getItem("latitude") , localStorage.getItem("logitude") ),
//         //  {lat: new window['google'].maps.LatLng( this.selectedLatitude, lng: this.selectedLongitude},
//         map: this.map,
//         title: 'Warehouse1',
//         draggable: true,
//         animation: window['google'].maps.Animation.DROP,
//       });
//       var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h3 id="thirdHeading" class="thirdHeading">Sarokh</h3>'+
//       '<div id="bodyContent">'+
//       '<p></p>'+
//       '</div>'+
//       '</div>';

//       var infowindow = new window['google'].maps.InfoWindow({
//         content: contentString
//       });

//         marker.addListener('click', function() {
//           infowindow.open(this.map, marker);
//         });

//     });



//   }
//   renderMap() {
//     window['initMap'] = () => {
//       this.loadMap();
//     }
//     if (!window.document.getElementById('google-map-script')) {
//       var s = window.document.createElement("script");
//       s.id = "google-map-script";
//       s.type = "text/javascript";
//       s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjt_DROGYyzEY0BTDt0vrPcZIMLuBUGiw&callback=initMap";

//       window.document.body.appendChild(s);
//     } else {
//       this.loadMap();
//     }
//   }
//   callmethos() {
//     alert('Clicked.');
//   }
// }

