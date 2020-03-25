import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
// import { OrderService } from '../../../services/order.service';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
// import { DealerService } from '../../../services/dealer.service';
// import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { SarokhwearhouseService } from '../../../../services/sarokhwearhouse.service';
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
  editwarehouse = false;
  @Output()
  showlisting = new EventEmitter<boolean>();
  // shipmentDetails: Shipment[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private sarokhwarehouse: SarokhwearhouseService,
    // private warehouseService: WarehouseService,
    private shareData : DataService,
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

    const sharedId = this.shareData.getID();
    if (sharedId) {
      this.editwarehouse= true;
      this.sarokhwarehouse.fetchSingleWarehouse(sharedId).subscribe(res =>{
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
  forkLifter : [res.forkLifter],
  thermalPrinter : [res.thermalPrinter],
  qrscanner : [res.qrscanner],

})
this.warehousemanager = this.formbuilder.group({
  managerName: [res.managerName],
  mangerContact: [res.mangerContact],
  mangerEmail: [res.mangerEmail],
  operationalTime: [res.operationalTime],
  // shipperId: shipperId  
})
this.storagecapacity = this.formbuilder.group({
  racksPerRow:[res.racksPerRow],
  rows : [res.rows],
  dimensions: [res.dimensions],
  columnsPerRow : [res.columnsPerRow]
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
  sarokhwarehouseSelected(warehouse): void {
    this.template.users = [];
    this.template.sarokhwarehouses.forEach(element => {
      if(element.id == warehouse){
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
    this.sarokhwarehouse.AddSarokhWarehouse(fullRequest).subscribe(res => {
      console.log("res" , res)
      alert('Order created successfully')
      // window.onload
      this.router.navigate(['/shipperwearhouse']);
    })

  }


}
