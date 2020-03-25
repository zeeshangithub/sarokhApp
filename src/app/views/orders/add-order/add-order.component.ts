import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { WarehouseService } from '../../../services/warehouse.service';
import { DealerService } from '../../../services/dealer.service';
import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  orderBasicInfoForm: FormGroup;
  dropoffDetailsForm: FormGroup;
  template = {} as any;
  multiple = false;
  shipmentDetails: Shipment = {};
  editOrder = false;
  @Output()
  showlisting = new EventEmitter<boolean>();
  shipmentDetailsData = []
  constructor(
    private formbuilder: FormBuilder,
    private orderService: OrderService,
    private warehouseService: WarehouseService,
    private dealerService: DealerService,
    private router: Router,
    private shareData : DataService
    ) { }

  ngOnInit(): void {
    // this.shipmentDetails = [];
    this.addShipmentDetail();
    this.initializeBasicInformationForm();
    this.initializeDropoffDetailsForm();
    this.generateOrderID();
    const sharedId = this.shareData.getID();  
    console.log(sharedId)
    if (sharedId) {
      this.editOrder= true;
   
      this.orderService.getOrderDetails(sharedId).subscribe(res => {
        console.log("res", res.data)
        const oderDetail= res.data;
        // debugger
        console.log("oderDetail", oderDetail)
        this.orderBasicInfoForm = this.formbuilder.group({
          // orderId: [oderDetail.oderId],
          pickupType: [oderDetail.pickupType],
          shipmentType: [oderDetail.shipmentType],
          // shipperId: [oderDetail.shipperId]
        })
        this.dropoffDetailsForm = this.formbuilder.group({
          dateTime: [oderDetail.dateTime],
          warehouseId: [oderDetail.warehouseId],
          contact: [oderDetail.contact],
          concernPersonId: [oderDetail.concernPersonId],
          zone: [oderDetail.zone],
          city: [oderDetail.city]
    
        })
      
this.shipmentDetails = oderDetail.shipmentOrderItems;
console.log("this.shipmentDetails" , this.shipmentDetails)
      })
    }
  }

  generateOrderID(){
    var shipperId = localStorage.getItem('id');
    console.log(shipperId)
    var orderId = '';
    this.orderService.getOrderId(shipperId).subscribe(res=>{
      orderId = res.data;

      console.log("res" , res.data)
      this.orderBasicInfoForm.controls['orderId'].setValue(orderId);
      this.orderBasicInfoForm.controls['shipperId'].setValue(shipperId);
    })
  }

  initializeBasicInformationForm(){
    this.orderBasicInfoForm = this.formbuilder.group({
      orderId: ['', [Validators.required]],
      pickupType: ['', [Validators.required]],
      shipmentType: ['', [Validators.required]],
      shipperId: ['', [Validators.required]]
    })
  }

  initializeDropoffDetailsForm(){
    this.dropoffDetailsForm = this.formbuilder.group({
      dateTime: ['', [Validators.required]],
      warehouseId: [''],
      contact: [''],
      concernPersonId: ['', [Validators.required]],
      zone: ['', [Validators.required]],
      city: ['', [Validators.required]]

    })
  }

  fetchTemplateData(): void {
    this.template = {} as any;
    this.initializeDropoffDetailsForm();
    this.shipmentTypeSelected();
    var pickType = this.orderBasicInfoForm.controls['pickupType'].value;
    if(pickType === 'SarokhWarehouse'){
      this.dropoffDetailsForm.controls['warehouseId'].setValidators([Validators.required]);
      this.dropoffDetailsForm.controls['contact'].setValidators([Validators.required]);
      this.warehouseService.fetchSarokhWarehouses().subscribe(res => {
        if(res && res.data){
          console.log(res)
          this.template.sarokhWarehouses = res.data;
        }
      })
    }else if(pickType === 'ShipperWarehouse'){
      this.dropoffDetailsForm.controls['warehouseId'].setValidators([Validators.required]);
      this.warehouseService.fetchShipperWarehouses(localStorage.getItem('_id')).subscribe(res => {
        if(res && res.data){
          console.log(res);
          this.template.shipperWarehouses = res.data;
        }
      })
    }else if(pickType === 'DealerPoint'){
      this.dealerService.fetchDealers().subscribe(res => {
        if(res && res.data){
          this.template.dealers = res.data;
        }
      })
    }
  }

  dropoffExit(): void {

  }

  shipperWarehouseSelected(warehouse): void {
    this.template.users = [];
    this.template.shipperWarehouses.forEach(element => {
      if(element.id == warehouse){
        this.template.users = element.users;
        console.log("this.template.users" , this.template.users)
      }
    });
  }

  sarokhWarehouseSelected(warehouse): void {
    this.template.users = [];
    this.template.sarokhWarehouses.forEach(element => {
      if(element.id == warehouse){
        this.template.users = element.users;
      }
    });
  }

  shipmentTypeSelected(): void {
    var shipmentType = this.orderBasicInfoForm.controls['shipmentType'].value;
    if(shipmentType == 'singleReceiver'){
      this.multiple = false;
    }else{
      this.multiple = true;
    }
  }

  addShipmentDetail(){
   
    this.shipmentDetailsData.push(this.shipmentDetails);
    this.shipmentDetails = {}
    console.log(this.shipmentDetailsData)
  }

  finishFunction(){
    var pickType = this.orderBasicInfoForm.controls['pickupType'].value;
    var fullFormData = {
      orderBasicInfo: this.orderBasicInfoForm.value,
      shipmentItems: this.addShipmentDetail,
      shipperWarehouse: pickType === 'ShipperWarehouse'? this.dropoffDetailsForm.value : null,
      sarokhWarehouse: pickType === 'SarokhWarehouse'? this.dropoffDetailsForm.value : null,
      dealerDropOff: pickType === 'DealerPoint'? this.dropoffDetailsForm.value : null,
    }
    console.log("full form data" , fullFormData)
    this.orderService.addOrder(fullFormData).subscribe(res => {
      // alert('Order created successfully')
      console.log("res" , res)
      this.router.navigate(['orders/orders']);
    })

  }
  closeAdd() {
    this.showlisting.emit(true);
    this.orderBasicInfoForm.reset();
    this.orderBasicInfoForm.reset();
    this.dropoffDetailsForm.reset();
    this.shareData.setID('')
  }
}
