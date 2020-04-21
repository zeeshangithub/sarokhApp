import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { WarehouseService } from '../../../services/warehouse.service';
import { DealerService } from '../../../services/dealer.service';
import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  orderBasicInfoForm: FormGroup;
  pickupAndDelivery: FormGroup;
  shipmentInformation: FormGroup;
  template = {} as any;
  multiple = false;
  shipmentDetails: Shipment = {};
  editOrder = false;
  citylist;
  sarokhWarehouses;
  shipperWarehouses;
  shipperWarehousesList = false;
  sarokhWarehousesList = false;
  dealerPointList = false;
  shipmentInformationArray: any = [];
  finalresponse: any = [];
  obj: {};
  showsarokhpointdropdown = false;
  alldealers;
  @Output()
  showlisting = new EventEmitter<boolean>();
  shipmentDetailsData = []
  additionalServices: Array<any> = [
    { name: 'Normal Packaging', value: 'Normal Packaging' },
    { name: 'Gift Wrapping ', value: 'Gift Wrapping' },
    { name: 'Insurance', value: 'Insurance' },
  ];
  constructor(
    private formbuilder: FormBuilder,
    private orderService: OrderService,
    private warehouseService: WarehouseService,
    private dealerService: DealerService,
    private router: Router,
    private shareData: DataService,
    private toaster : ToastrService
  ) { }
  ngOnInit(): void {
    // this.shipmentDetails = [];
    this.getshippersnadsarokhwarehouses();
    // this.addShipmentDetail();
    this.getCity();
    this.initializeBasicInformationForm();
    this.initializeDropoffDetailsForm();
    this.initializeShipmentInformationForm();
    this.generateOrderID();
    this.dealers();
    const sharedId = this.shareData.getID();
    console.log(sharedId)
    if (sharedId) {
      this.editOrder = true;
      this.orderService.getOrderDetails(sharedId).subscribe(res => {
        // console.log("res", res.data)
        const oderDetail = res.data;
        // debugger
        // console.log("oderDetail", oderDetail)
        this.orderBasicInfoForm = this.formbuilder.group({
          // orderId: [oderDetail.oderId],
          pickupType: [oderDetail.pickupType],
          shipmentType: [oderDetail.shipmentType],
          // shipperId: [oderDetail.shipperId]
        })
        this.pickupAndDelivery = this.formbuilder.group({
          // dateTime: [oderDetail.dateTime],
          // warehouseId: [oderDetail.warehouseId],
          // contact: [oderDetail.contact],
          // concernPersonId: [oderDetail.concernPersonId],
          // zone: [oderDetail.zone],
          // city: [oderDetail.city]
        })
        this.shipmentDetails = oderDetail.shipmentOrderItems;
        // console.log("this.shipmentDetails" , this.shipmentDetails)
      })
    }
  }
  initializeBasicInformationForm() {
    this.orderBasicInfoForm = this.formbuilder.group({
      orderId: ['', [Validators.required]],
      shipperId: ['', [Validators.required]],
      shipFromCity: ['' , [Validators.required]],
      shipToCity: ['' , [Validators.required]]
    })
  }
  initializeDropoffDetailsForm() {
    this.pickupAndDelivery = this.formbuilder.group({
      pickupType: ['', [Validators.required]],
      deliveryLocation: ['', [Validators.required]],
      shipperWarehouseId: [''],
      sarokhWarehouseId: [''],
      dealerPointId: [''],
      sarokhPointRadio: ['']
      // city: ['', [Validators.required]]
    })
  }
  initializeShipmentInformationForm() {
    this.shipmentInformation = this.formbuilder.group({
      receiverName: ['', [Validators.required]],
      receiverMobileNumber: ['', [Validators.required]],
      receiverAddress: [''],
      shipmentType: [''],
      weight: [''],
      shipmentTitle: [''],
      shipmentContent: [''],
      shipmentValue: [''],
      paymentType: [''],
      codAmount: [''],
      billedAmount: [''],
      additionalServices: this.formbuilder.array([]),
      deliveryCharges: [30]
    })
  }
  selectedpickuplocation(warehouse): void {
    console.log(warehouse)
    if (warehouse === "ShipperWarehouse") {
      this.shipperWarehousesList = true;
      this.sarokhWarehousesList = false;
      this.dealerPointList = false;
      this.showsarokhpointdropdown = false;
      this.pickupAndDelivery.patchValue({ 'sarokhwarehosue': '' })
      // this.orderBasicInfoForm.sarokhwarehosue.value('');
      this.pickupAndDelivery.patchValue({ 'sarokhPoint': '' })
      // this.orderBasicInfoForm.controls['sarokhPoint'].setValue('');
    } else if (warehouse === "SarokhWarehouse") {
      this.shipperWarehousesList = false;
      this.sarokhWarehousesList = true;
      this.dealerPointList = false;
      this.showsarokhpointdropdown = false;
      this.pickupAndDelivery.patchValue({ 'shipperwarehosue': '' })
      this.pickupAndDelivery.patchValue({ 'sarokhPoint': '' })
    }
  }

  finishFunction() {
    debugger;
    if (this.finalresponse.length <= 1) {
      var fullFormData = {
        orderBasicInfo: this.orderBasicInfoForm.value,
        pickupAndDelivery: this.pickupAndDelivery.value,
        shipmentItems: this.shipmentInformationArray,
      }
      console.log("full form data", fullFormData)
      const fullRequest = {
        ...fullFormData.orderBasicInfo,
        ...fullFormData.pickupAndDelivery,
      };
      console.log("fullRequest", fullRequest)
      fullRequest.shipmentItems = this.shipmentInformationArray;
      console.log("fullRequest", fullRequest)
      this.finalresponse.push(fullRequest);
    }
    console.table("fullRequest", this.finalresponse)
    this.orderService.addOrder(this.finalresponse).subscribe(res => {
      console.log("res", res)
      if (res.status == 200) {
        this.toaster.success(res.message)
        this.router.navigate(['orders/orders']);
      }
    })
  }
  editShipment(shipment) {
    this.shipmentInformation.patchValue({ 'receiverName': shipment.receiverName });
    this.shipmentInformation.patchValue({ 'receiverMobileNumber': shipment.receiverMobileNumber });
    this.shipmentInformation.patchValue({ 'receiverAddress': shipment.receiverAddress });
    this.shipmentInformation.patchValue({ 'shipmentType': shipment.shipmentType });
    this.shipmentInformation.patchValue({ 'weight': shipment.weight });
    this.shipmentInformation.patchValue({ 'shipmentTitle': shipment.shipmentTitle });
    this.shipmentInformation.patchValue({ 'shipmentContent': shipment.shipmentContent });
    this.shipmentInformation.patchValue({ 'shipmentValue': shipment.shipmentValue });
    this.shipmentInformation.patchValue({ 'paymentType': shipment.paymentType });
    this.shipmentInformation.patchValue({ 'codAmount': shipment.codAmount });
    this.shipmentInformation.patchValue({ 'billedAmount': shipment.billedAmount });
    this.shipmentInformation.patchValue({ 'additionalServices': shipment.additionalServices });
    this.shipmentInformation.patchValue({ 'deliveryCharges': shipment.deliveryCharges });
  }
  deleteShipment() {
    this.shipmentInformationArray = [];
  }
  AddandCreateNew(shi) {
    this.shipmentInformationArray = [];
    this.obj = this.shipmentInformation.value;
    this.shipmentInformationArray.push(shi.value);
    this.shipmentInformation.reset();
    this.shipmentInformation.reset();
    var fullFormData = {
      orderBasicInfo: this.orderBasicInfoForm.value,
      pickupAndDelivery: this.pickupAndDelivery.value,
      shipmentItems: this.shipmentInformationArray,
    }
    console.log("full form data", fullFormData)
    const fullRequest = {
      ...fullFormData.orderBasicInfo,
      ...fullFormData.pickupAndDelivery,
    };
    console.log("fullRequest", fullRequest)
    fullRequest.shipmentItems = this.shipmentInformationArray;
    console.log("fullRequest", fullRequest)
    this.finalresponse.push(fullRequest);
    console.log(this.finalresponse);
    this.finishFunction();
  }
  closeAdd() {
    this.showlisting.emit(true);
    this.orderBasicInfoForm.reset();
    this.orderBasicInfoForm.reset();
    this.pickupAndDelivery.reset();
    this.shareData.setID('')
  }
  getCity() {
    this.orderService.getCityList().subscribe(res => {
      this.citylist = res.data;
      // console.log(this.citylist)
    })
  }
  generateOrderID() {
    var shipperId = localStorage.getItem('id');
    // console.log(shipperId)
    var orderId = '';
    this.orderService.getOrderId(shipperId).subscribe(res => {
      orderId = res.data;
      // console.log("res", res.data)
      this.orderBasicInfoForm.controls['orderId'].setValue(orderId);
      this.orderBasicInfoForm.controls['shipperId'].setValue(shipperId);
    })
  }
  getshippersnadsarokhwarehouses() {
    this.warehouseService.fetchSarokhWarehouses().subscribe(res => {
      if (res && res.data) {
        // console.log(res)
        this.sarokhWarehouses = res.data;
      }
    })
    this.warehouseService.fetchShipperWarehouses(localStorage.getItem('id')).subscribe(res => {
      if (res && res.data) {
        // console.log(res);
        this.shipperWarehouses = res.data;
      }
    })
  }
  dealers() {
    this.dealerService.fetchDealers().subscribe(res => {
      this.alldealers = res.data;
      // console.log("this.alldealers", this.alldealers)
    })
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.shipmentInformation.get('additionalServices') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  codAmountCalculation(value) {
    const val = parseInt(value) + 30;
    this.shipmentInformation.patchValue({ 'billedAmount': val })
  }
  checkSarokhPoint(value) {
    // console.log("value", value)
    if (value.target.defaultValue === "selectNow") {
      this.showsarokhpointdropdown = true;
    } else {
      this.showsarokhpointdropdown = false;
    }
  }

  todealerpoint(value) {
    // console.log("value", value)
    if (value === "To Sarokh Point") {
      this.dealerPointList = true;
    }else{
      this.dealerPointList = false;
    }

  }
}
