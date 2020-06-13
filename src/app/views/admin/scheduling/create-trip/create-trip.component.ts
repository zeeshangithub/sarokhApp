import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WarehouseService } from '../../../../services/warehouse.service';
import { VeshicalService } from '../../../../services/vehical.service';
import { DriverService } from '../../../../services/driver.service';
import { TripService } from '../../../../services/trip.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  createTripForm: FormGroup;
  warehouselist;
  vehicallist;
  driverlsit;
  showTrip = false;
  tripList;
  selectedCargoCapacity;
  selectedtrip;
  selectedTripIds = [];
  newobj;
  newcodcollection = 0;
  numberofShipments = 0;
  selectedTripsFor = [];
  selectedFormData;
  constructor(private formbuilder: FormBuilder, private warehouse: WarehouseService,
    private vehical: VeshicalService, private driverlist: DriverService,
    private tripService: TripService, private toastr: ToastrService , private router : Router) { }

  ngOnInit(): void {
    this.initializeCreateForm();
    this.getReleventData();
  }
  initializeCreateForm() {
    this.createTripForm = this.formbuilder.group({
      warehouse: ['', [Validators.required]],
      vehical: ['', [Validators.required]],
      driver: ['', [Validators.required, Validators.email]],
    })

  }
  getReleventData() {

    this.warehouse.fetchSarokhWarehouses().subscribe(res => {
      this.warehouselist = res.data.warehouseList;
      console.log('this.warehouselist', this.warehouselist)
    })
    this.vehical.getVehical().subscribe(res => {
      this.vehicallist = res.data;
      console.log('this.vehicallist', this.vehicallist)
    })
    this.driverlist.GetDriverList().subscribe(res => {
      this.driverlsit = res;
      console.log('this.driverlsit', this.driverlsit)
    })

  }
  addValue(selected, event) {
    console.log(selected)
    this.selectedtrip = selected;

    console.log("id", this.selectedtrip, event);
    if (event === true) {
      this.newobj = this.tripList.filter(
        book => book.shipmentId === this.selectedtrip.shipmentId);
      console.log(this.newobj[0].weight)
      this.selectedCargoCapacity = this.selectedCargoCapacity - this.newobj[0].weight;
      this.newcodcollection = this.newcodcollection + this.newobj[0].codcollection;
      this.selectedTripsFor.push(this.selectedtrip);
      this.selectedTripIds.push(this.newobj[0].shipmentId);
      this.numberofShipments = this.numberofShipments + 1;
      console.log("this.selectedCargoCapacity", this.selectedCargoCapacity)
      console.log("this.selectedShipmentsIds", this.selectedTripIds)
      console.log(this.selectedCargoCapacity)
      console.log(this.numberofShipments)
    } else if (event === false) {
      const index = this.selectedTripIds.indexOf(this.selectedtrip.id)
      this.selectedCargoCapacity = +this.selectedCargoCapacity + +this.newobj[0].weight;
      this.newcodcollection = this.newcodcollection - this.newobj[0].codcollection;
      this.numberofShipments = this.numberofShipments - 1;
      this.selectedTripIds.splice(index, 1)
      this.selectedTripsFor.splice(index, 1);
    }
    console.log("this.selectedShipmentsIds", this.selectedTripIds)
  }

  fetchDetailsTrip() {
    console.log("this.createTripForm.value", this.createTripForm.value);
    this.selectedCargoCapacity = this.createTripForm.controls['vehical'].value;
    console.log("this.selectedCargoCapacity", this.selectedCargoCapacity)
    this.tripService.getTripDetails(this.createTripForm.controls['warehouse'].value).subscribe(res => {
      console.log("res", res)
      if (res.message === "Success") {
        this.tripList = res.data;
        this.showTrip = true;
      }
    })
  }
  createTrip() {
    console.log(this.selectedTripsFor)
    this.selectedFormData = {
      shipmentsList: this.selectedTripsFor,
      totalCargoCapacity: this.selectedCargoCapacity,
      codcollection: this.newcodcollection,
      shipmentDisplaced: this.numberofShipments
    }
    console.log("this.selectedFormData", this.selectedFormData)
    this.selectedFormData.warehouseId = this.createTripForm.controls['warehouse'].value;
    this.selectedFormData.driverId = this.createTripForm.controls['driver'].value;

    console.log("this.selectedFormData", this.selectedFormData)
    this.tripService.createTrip(this.selectedFormData).subscribe(res => {
      this.toastr.success(res.message);
    })
    this.router.navigate(['/admin/allTrips']);
  
  }
}
