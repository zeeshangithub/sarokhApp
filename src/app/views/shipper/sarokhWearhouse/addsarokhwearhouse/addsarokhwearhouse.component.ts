import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
// import { OrderService } from '../../../services/order.service';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
// import { DealerService } from '../../../services/dealer.service';
// import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsarokhwearhouse',
  templateUrl: './addsarokhwearhouse.component.html',
  styleUrls: ['./addsarokhwearhouse.component.css']
})
export class AddsarokhwearhouseComponent implements OnInit {

  warehouseadress: FormGroup;
  warehousemanager: FormGroup;
  amenities:FormGroup;
  storagecapacity : FormGroup
  template = {} as any;
  multiple = false;
  // shipmentDetails: Shipment[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private shipperwarehouse: ShipperWearhouseService,
    // private warehouseService: WarehouseService,
    // private dealerService: DealerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.shipmentDetails = [];
    // this.addShipmentDetail();
    this.initializeWarehouseAdress();
    this.initializeWarehouseManager();
    this.initializeamenities();
    this.initializestorageCapacity();
    // this.generateOrderID();
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

  initializeWarehouseAdress(){
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

  initializeamenities (){
    this.amenities = this.formbuilder.group({
      forkLifter : ['', [Validators.required]],
      thermalPrinter : ['' , [Validators.required]],
      qrscanner : ['' , [Validators.required]],
  
    })
  }
  initializeWarehouseManager(){
    let shipperId =  localStorage.getItem('_id')
    this.warehousemanager = this.formbuilder.group({
      managerName: ['', [Validators.required]],
      mangerContact: [''],
      mangerEmail: [''],
      operationalTime: ['', [Validators.required]],
      shipperId: shipperId  
    })
  }
  initializestorageCapacity(){
    this.storagecapacity = this.formbuilder.group({
      racksPerRow:['' , [Validators.required]],
      rows : ['' , [Validators.required]],
      dimensions: ['' , [Validators.required]],
      columnsPerRow : ['', [Validators.required]]
    })
  }
  shipperWarehouseSelected(warehouse): void {
    this.template.users = [];
    this.template.shipperWarehouses.forEach(element => {
      if(element.id == warehouse){
        this.template.users = element.users;
      }
    });
  }

  finishFunction(){
    
    var fullFormData = {
      basicInfo: this.warehouseadress.value,
      shipmentItems: this.warehousemanager.value,
      amminitie : this.amenities.value,
      storagecapacity: this.storagecapacity.value
        

    
    }
    console.log("fullFormData" , fullFormData)
    const fullRequest = {
      ...fullFormData.basicInfo,
      ...fullFormData.shipmentItems,
      ...fullFormData.amminitie,
      ...fullFormData.storagecapacity
    };
    
    console.log("fullFormData" , fullRequest)
    this.shipperwarehouse.AddShipperWearhouse(fullRequest).subscribe(res => {
      console.log("res" , res)
      alert('Order created successfully')
      this.router.navigate(['shipper/shipperwearhouselist']);
    })

  }


}
