import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShipperService } from '../../../../services/shipper.service'
import { Router } from '@angular/router';
import { CityCountryService } from '../../../../services/cityCountry.service'

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {

  showFields = true;
  basicInfoForm: FormGroup;
  businessDetailsForm: FormGroup;
  warehouseDetailsForm: FormGroup;
  billingDetailsForm: FormGroup;
  securityForm: FormGroup;
  otpForm: FormGroup;
  allCountryList;
  allcities;

  fullFormsInfo = {
    billingAddress: {},
    security: {},
    shipperBasicInfo: {},
    shipperBusinessDetail: {},
    shipperWarehouse: {},
    verification: {}
  }

  constructor(private formbuilder: FormBuilder, private shipperService: ShipperService,
     private router: Router , 
     private countryCityList:CityCountryService
     ) { }

  ngOnInit(): void {
    this.initializeBasicInformationForm();
    this.initializeBusinessDetailsForm();
    // this.initializeWareDetailsForm();
    this.initializeBillingDetailsForm();
    this.initializeSecurityForm();
    this.initializeOTPForm();
    this.getCountryList();
  }

  initializeBasicInformationForm() {
    this.basicInfoForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      profilePicture: [''],
      

    })
  }

  initializeSecurityForm() {
    this.securityForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }

  initializeOTPForm() {
    this.otpForm = this.formbuilder.group({
      emailOTP: ['', [Validators.required]],
      mobileOTP: ['', [Validators.required]],
    })
  }

  initializeBusinessDetailsForm() {
    this.businessDetailsForm = this.formbuilder.group({
      bankName: ['', [Validators.required]],
      businessLogo: ['', [Validators.required]],
      businessName: ['', [Validators.required]],
      crFile: ['', [Validators.required]],
      crNumber: ['', [Validators.required]],
      iban: ['', [Validators.required]],
      iqamaNumber: ['', [Validators.required]],
      vatFile: ['', [Validators.required]],
      vatNumber: ['', [Validators.required]],
    })
  }

  // initializeWareDetailsForm() {
  //   this.warehouseDetailsForm = this.formbuilder.group({
  //     address: ['', [Validators.required]],
  //     city: ['', [Validators.required]],
  //     concernedPerson: ['', [Validators.required]],
  //     concernedPersonDesignation: ['', [Validators.required]],
  //     country: ['', [Validators.required]],
  //     locationLatitude: ['', [Validators.required]],
  //     locationLongitude: ['', [Validators.required]],
  //     postalCode: ['', [Validators.required]],
  //     contact: ['', [Validators.required]],
  //     email: ['', [Validators.required]],
  //     name: ['', [Validators.required]],
  //     timing: ['', [Validators.required]],
  //     workingHours: ['', [Validators.required]],
  //   })
  // }

  initializeBillingDetailsForm() {
    this.billingDetailsForm = this.formbuilder.group({
      address: ['', [Validators.required]],
      city: [''],
      concernedPerson: ['', [Validators.required]],
      concernedPersonDesignation: ['', [Validators.required]],
   
      locationLatitude: ['', [Validators.required]],
      locationLongitude: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
    })
  }
  getCountryList(){
    this.countryCityList.fetchCountryList().subscribe(res=>{
      this.allCountryList = res.data;
    })
  }
  getCityData(id) {

    this.countryCityList.fetchCityByCountry(id).subscribe(res => {
      console.log("res", res)
      this.allcities  = res.data
   
    })
  }
  finishFunction() {
    this.fullFormsInfo.shipperBasicInfo = this.basicInfoForm.value;
    this.fullFormsInfo.billingAddress = this.billingDetailsForm.value;
    this.fullFormsInfo.security = this.securityForm.value;
    this.fullFormsInfo.shipperBusinessDetail = this.businessDetailsForm.value;
    // this.fullFormsInfo.shipperWarehouse = this.warehouseDetailsForm.value;
    this.fullFormsInfo.verification = this.otpForm.value;
    this.submit();
  }

  submit() {

    this.shipperService.addShipper(this.fullFormsInfo).subscribe(res => {
      console.log("res", res)
      this.router.navigate([''])
    }, err => {

    })
  }
  change(value) {
    console.log(value)

    if (value.target.checked === true) {
      this.showFields = false;
    } else if (value.target.checked === false) {
      this.showFields = true;
    }
  }
}
