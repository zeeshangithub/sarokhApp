import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { OrderService } from '../../../services/order.service';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
// import { DealerService } from '../../../services/dealer.service';
// import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
@Component({
  selector: 'app-addshipperwearhouse',
  templateUrl: './addshipperwearhouse.component.html',
  styleUrls: ['./addshipperwearhouse.component.css']
})
export class AddshipperwearhouseComponent implements OnInit {


  warehouseadress: FormGroup;
  warehousemanager: FormGroup;
  amenities: FormGroup;
  shipperId;
  template = {} as any;
  multiple = false;
editwarehouse = false;
  @Output()
  showlisting = new EventEmitter<boolean>();
  // shipmentDetails: Shipment[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private shipperwarehouse: ShipperWearhouseService,
    private dataService: DataService,
    // private dealerService: DealerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.shipmentDetails = [];
    // this.addShipmentDetail();
    this.initializeWarehouseAdress();
    this.initializeWarehouseManager();
    this.initializeamenities();
    // this.generateOrderID();
    const sharedId = this.dataService.getID();
    if (sharedId) {
      this.editwarehouse= true;
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

  // generateOrderID(){
  //   var shipperId = localStorage.getItem('_id');
  //   var orderId = '';
  //   this.orderService.getOrderId(shipperId).subscribe(res=>{
  //     orderId = res.data;
  //     this.orderBasicInfoForm.controls['orderId'].setValue(orderId);
  //     this.orderBasicInfoForm.controls['shipperId'].setValue(shipperId);
  //   })
  // }

  initializeWarehouseAdress() {
    this.warehouseadress = this.formbuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
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
    // let operationalTime
    // const lblIdCode = this.warehousemanager.get('txtReference').value + this.warehousemanager.get('txtPublicacion').value


    this.shipperId = localStorage.getItem('_id')
    this.warehousemanager = this.formbuilder.group({
      managerName: ['', [Validators.required]],
      mangerContact: [''],
      mangerEmail: [''],
      operationalTimeto: ['', [Validators.required]],
      operationalTimefrom: ['', Validators.required],
      shipperId: this.shipperId,
      // operationalTime : 'operationalTimefrom' + 'operationalTimefrom'      
    })
    //  console.log("this.warehousemanager.get(['operationalTimeto','operationalTimefrom']).value" , this.warehousemanager.get(['operationalTimeto','operationalTimefrom']).value);
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
      this.showlisting.emit(true);
      this.router.navigate(['shipper/shipperwearhouselist']);
    })

  }

  closeAdd() {
    this.showlisting.emit(true);
    this.warehouseadress.reset();
    this.warehousemanager.reset();
    this.amenities.reset();
    this.dataService.setID('')
  }
  updateWarehouse(){
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

    console.log("fullRequest" , fullRequest);


    fullRequest.id = sharedId;
    fullRequest.shipperId = localStorage.getItem('_id');

    console.log("fullRequest" , fullRequest);
    this.shipperwarehouse.updateShipperWearhouse(fullRequest).subscribe(res =>{
      console.log("res" , res)
      if(res){
        this.showlisting.emit(true);
        
    this.warehouseadress.reset();
    this.warehousemanager.reset();
    this.amenities.reset();
    this.dataService.setID('')
    
      }
    })
  }
}
