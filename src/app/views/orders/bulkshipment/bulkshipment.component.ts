import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { WarehouseService } from '../../../services/warehouse.service';
import { DealerService } from '../../../services/dealer.service';
import { Shipment } from '../../../classes/shipment';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { ToastrService } from 'ngx-toastr';
import { AdminMisService } from '../../../services/adminMis.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { id } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-bulkshipment',
  templateUrl: './bulkshipment.component.html',
  styleUrls: ['./bulkshipment.component.css']
})
export class BulkshipmentComponent implements OnInit {
  shipperId;
  preview: string;
  orderBasicInfoForm: FormGroup;
  pickupAndDelivery: FormGroup;
  bulkOrderForm: FormGroup;
  template = {} as any;
  citylist;
  modelvalue
  sarokhWarehouses;
  shipperWarehouses;
  shipperWarehousesList = false;
  sarokhWarehousesList = false;
  dealerPointList = false;
  obj: {};
  showsarokhpointdropdown = false;
  alldealers;
  @Output()
  showlisting = new EventEmitter<boolean>();
  constructor(
    private formbuilder: FormBuilder,
    private orderService: OrderService,
    private warehouseService: WarehouseService,
    private dealerService: DealerService,
    private router: Router,
    private shareData: DataService,
    private toaster: ToastrService,
    private fileUpload: AdminMisService,
  ) { }
  ngOnInit(): void {
    // this.shipmentDetails = [];
    this.getshippersnadsarokhwarehouses();
    // this.addShipmentDetail();
    this.getCity();
    this.dealers();
    this.initializeBulkOrderForm();
    this.shipperId = localStorage.getItem("id");
  }
  initializeBulkOrderForm() {
    this.bulkOrderForm = this.formbuilder.group({
      shipFromCity: [''],
      shipToCity: [''],
      pickupType: [''],
      sarokhWarehouseId: [''],
      shipperWarehouseId: [''],
      deliveryLocation: [''],
      sarokhPointRadio: [''],
      dealerPointId: [''],
      orderFile: [''],
      shipperId: [''],
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
    } else if (warehouse === "DealerPoint") {
      this.shipperWarehousesList = false;
      this.sarokhWarehousesList = false;
      this.dealerPointList = false;
    }
  }
  onUploadChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.fileUpload.upoadFileService(file).subscribe(res => {
      this.toaster.success(res.message);
      this.modelvalue = res.data;
      this.bulkOrderForm.get("orderFile").setValue(this.modelvalue);
    })
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  getCity() {
    this.orderService.getCityList().subscribe(res => {
      // console.log(res)
      var shan = "zeeshan";
      this.citylist = res.data;
    })
  }

  getshippersnadsarokhwarehouses() {
    this.warehouseService.fetchSarokhWarehouses().subscribe(res => {
      if (res && res.data) {
        this.sarokhWarehouses = res.data.warehouseList;
        // console.log(this.sarokhWarehouses);
      }
    })
    this.warehouseService.fetchShipperWarehouses(localStorage.getItem('id')).subscribe(res => {
      if (res && res.data) {
        this.shipperWarehouses = res.data.warehouseList;
      }
    })
  }
  dealers() {
    this.dealerService.fetchAllDealersPoints().subscribe(res => {
      this.alldealers = res.data;
    })
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
    } else {
      this.dealerPointList = false;
    }
  }

  ShowErrorWarehouseManager() {
    console.log(this.orderBasicInfoForm.valid);
    if (this.orderBasicInfoForm.valid === false) {
      this.toaster.error("this.validationErrorMessage");
    }
  }
  ShowErrorPickupAndDelivery() {
    console.log(this.pickupAndDelivery.valid);
    if (this.pickupAndDelivery.valid === false) {
      this.toaster.error("this.validationErrorMessage");
    }
  }
  submitOrder() {
    console.log(this.bulkOrderForm.value)
    var shipperId = localStorage.getItem('id');
    this.bulkOrderForm.controls['shipperId'].setValue(shipperId);
    this.orderService.addBulkOrder(this.bulkOrderForm.value).subscribe(res => {
      console.log("res", res)
      if (res.status === 200) {
        this.toaster.success(res.message);
        this.router.navigate(['shipment/allshipment']);
        this.bulkOrderForm.reset();
      } else {
        this.toaster.error(res.message);
      }
    })
  }
}
