import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from '../../../../services/driver.service';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-adddrivers',
  templateUrl: './adddrivers.component.html',
  styleUrls: ['./adddrivers.component.css']
})
export class AdddriversComponent implements OnInit {


  basicInfoForm: FormGroup;
  driverDetailsForm: FormGroup;
  employeeFreelancerDetailsForm: FormGroup;
  vehicleDetailsForm: FormGroup;
  securityForm: FormGroup;
  diverType;
  forFreelancer = false;
  editMode = false;

  fullFormsInfo = {
    basicInfo: {},
    credentials: {},
    driverDetails: {},
    employeeDriverDetails: {},
    freelanceDriverVehicle: {},
    driverType: ''
  }

  constructor(private formbuilder: FormBuilder,
     private driverService: DriverService,
      private router: Router,
      private shareData : DataService ) { }

  ngOnInit(): void {
    this.initializeBasicInformationForm();
    this.initializeDriverDetailsForm();
    this.initializeVehicleDetailsForm();
    this.initializeEmployeeFreelancerDetailsForm();
    this.initializeSecurityForm();


    const sharedId = this.shareData.getID();

    if(sharedId){

      this.editMode = true;
      this.driverService.GetSingleDriver(sharedId).subscribe(res =>{

        console.log(res)
        this.basicInfoForm = this.formbuilder.group({
          firstName: [res.firstName],
          lastName: [res.lastName],
          email: [res.user.email],
          dateOfBirth: [res.user.dob],
          contact: [res.user.contact],
          profilePicture: [''],
          id: [res.id]
        })

        this.driverDetailsForm = this.formbuilder.group({
          address: [res.address],
          city: [res.city],
          country: [res.country],
          postCode: [res.postCode],
          licenceFile: [''],
          licenceNumber: [res.licenceNumber],
          locationLatitude: [''],
          locationLongitude: [''],
          nicFile: [''],
          nicNumber: [res.nicNumber]
        })

        this.vehicleDetailsForm = this.formbuilder.group({
          cargoCapacity: [res.vehicle.cargoCapacity],
          make: [res.vehicle.make],
          model: [res.vehicle.model],
          name: [res.vehicle.name],
          productionYear: [res.vehicle.productionYear],
          registrationFile: [''],
          registrationNumber: [res.vehicle.registrationNumber],
          registrationYear: [res.vehicle.registrationYear],
          type: [res.vehicle.type],
          vehicleId : [res.vehicleId]
        })
        this.employeeFreelancerDetailsForm = this.formbuilder.group({
          bank: [res.bankAccount.bank],
          compensation: [res.compensation],
          compensationCycle: [res.compensationCycle],
          contactValidTill: [res.contactValidTill],
          contractStartDate: [res.contractStartDate],
          contactFile: [''],
          iban: [res.bankAccount.iban],
          bankAccountId:[res.bankAccount.id],
        })


        this.securityForm = this.formbuilder.group({
          username: [res.user.userName],
          password: [res.user.userPassword],
          userId: [res.user.userId]
        })


      })

    }




  }

  initializeBasicInformationForm() {
    this.basicInfoForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      profilePicture: [''],
      id: ['']
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
      nicNumber: ['', [Validators.required]],
      bankAccountId:['']
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
      type: ['', [Validators.required]],
      vehicleId:['']
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
      password: ['', [Validators.required]],
      userId: ['']
    })
  }

  finishFunction() {
    this.fullFormsInfo.basicInfo = this.basicInfoForm.value;
    this.fullFormsInfo.credentials = this.securityForm.value;
    this.fullFormsInfo.driverDetails = this.driverDetailsForm.value;
    this.fullFormsInfo.employeeDriverDetails = this.employeeFreelancerDetailsForm.value;
    this.fullFormsInfo.freelanceDriverVehicle = this.vehicleDetailsForm.value;
    this.fullFormsInfo.driverType = this.diverType;
    this.submit();
  }
  submit() {
    console.log("this.fullFormsInfo", this.fullFormsInfo)
    this.driverService.addDriver(this.fullFormsInfo).subscribe(res => {
      
      if(res.status === 200){
        this.router.navigate(['admin/alldrivers'])
      }
      
    }, err => {
    })
  }
  updateFunction(){
    this.fullFormsInfo.basicInfo = this.basicInfoForm.value;
    this.fullFormsInfo.credentials = this.securityForm.value;
    this.fullFormsInfo.driverDetails = this.driverDetailsForm.value;
    this.fullFormsInfo.employeeDriverDetails = this.employeeFreelancerDetailsForm.value;
    this.fullFormsInfo.freelanceDriverVehicle = this.vehicleDetailsForm.value;
    this.fullFormsInfo.driverType = this.diverType;

    console.log("this.fullFormsInfo" , this.fullFormsInfo)
    this.driverService.updateSingleDriver(this.fullFormsInfo).subscribe(res=>{

      console.log("res" , res)
    })
  }
  result(event) {
    console.log("event", event.target.text)
    this.diverType = event.target.text;
    if(this.diverType === "Freelancer"){
        this.forFreelancer = true;
    }else{
      this.forFreelancer = false;
    }
  }
}