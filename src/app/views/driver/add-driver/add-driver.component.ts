import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from '../../../services/driver.service';


@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  basicInfoForm: FormGroup;
  driverDetailsForm: FormGroup;
  employeeFreelancerDetailsForm: FormGroup;
  vehicleDetailsForm: FormGroup;
  securityForm: FormGroup;

  fullFormsInfo = {
    basicInfo: {},
    credentials: {},
    driverDetails: {},
    employeeDriverDetails: {},
    freelanceDriverVehicle: {},
    driverType: ''
  }

  constructor(private formbuilder: FormBuilder, private driverService: DriverService, private router: Router, ) { }

  ngOnInit(): void {
    this.initializeBasicInformationForm();
    this.initializeDriverDetailsForm();
    this.initializeVehicleDetailsForm();
    this.initializeEmployeeFreelancerDetailsForm();
    this.initializeSecurityForm();
  }

  initializeBasicInformationForm() {
    this.basicInfoForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      profilePicture: ['']
    })
  }

  initializeDriverDetailsForm() {
    this.driverDetailsForm = this.formbuilder.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      licenceFile: [''],
      licenceNumber: ['', [Validators.required]],
      locationLatitude: [''],
      locationLongitude: [''],
      nicFile: [''],
      nicNumber: ['', [Validators.required]]
    })
  }

  initializeVehicleDetailsForm() {
    this.vehicleDetailsForm = this.formbuilder.group({
      cargoCapacity: ['', [Validators.required]],
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
      name: ['', [Validators.required]],
      productionYear: ['', [Validators.required]],
      registrationFile: [''],
      registrationNumber: ['', [Validators.required]],
      registrationYear: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  initializeEmployeeFreelancerDetailsForm() {
    this.employeeFreelancerDetailsForm = this.formbuilder.group({
      bank: ['', [Validators.required]],
      compensation: [0, [Validators.required]],
      compensationCycle: ['', [Validators.required]],
      contactValidTill: ['', [Validators.required]],
      contractStartDate: ['', [Validators.required]],
      contactFile: [''],
      iban: ['', [Validators.required]]
    })
  }

  initializeSecurityForm() {
    this.securityForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  finishFunction() {
    this.fullFormsInfo.basicInfo = this.basicInfoForm.value;
    this.fullFormsInfo.credentials = this.securityForm.value;
    this.fullFormsInfo.driverDetails = this.driverDetailsForm.value;
    this.fullFormsInfo.employeeDriverDetails = this.employeeFreelancerDetailsForm.value;
    this.fullFormsInfo.freelanceDriverVehicle = this.vehicleDetailsForm.value;
    this.submit();
  }
  submit() {
    this.driverService.addDriver(this.fullFormsInfo).subscribe(res => {
      this.router.navigate(['driver']);
    }, err => {
    })
  }

}
