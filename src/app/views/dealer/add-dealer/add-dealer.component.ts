import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DealerService } from '../../../services/dealer.service';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent implements OnInit {

  basicInfoForm: FormGroup;
  dealerDetailsForm: FormGroup;
  contractDetailsForm: FormGroup;
  securityForm: FormGroup;

  fullFormsInfo = {
    dealerContract:{},
    credentials:{},
    dealerBasicInfo:{},
    dealerDetails:{}
  }

  constructor(private formbuilder: FormBuilder, private dealerService: DealerService) { }

  ngOnInit(): void {
    this.initializeBasicInformationForm();
    this.initializeDealerDetailsForm();
    this.initializecontractDetailsForm();
    this.initializeSecurityForm();
  }

  initializeBasicInformationForm(){
    this.basicInfoForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      profilePicture: ['']
    })
  }
  initializeDealerDetailsForm(){
    this.dealerDetailsForm = this.formbuilder.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      crFile: [''],
      crNumber: ['', [Validators.required]],
      locationLatitude: [''],
      locationLongitude: [''],
      nicFile: [''],
      nicNumber: ['', [Validators.required]]
    })
  }
  initializecontractDetailsForm(){
    this.contractDetailsForm = this.formbuilder.group({
      bankName: ['', [Validators.required]],
      compensationClearanceDuration: ['', [Validators.required]],
      contractStartDate: ['', [Validators.required]],
      contractValidToDate: ['', [Validators.required]],
      contractFile: [''],
      iban: ['', [Validators.required]],
      preShipmentCompensation: ['', [Validators.required]]
    })
  }

  initializeSecurityForm(){
    this.securityForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  finishFunction(){
    this.fullFormsInfo.dealerContract = this.contractDetailsForm.value;
    this.fullFormsInfo.credentials = this.securityForm.value;
    this.fullFormsInfo.dealerBasicInfo = this.basicInfoForm.value;
    this.fullFormsInfo.dealerDetails = this.dealerDetailsForm.value;
    this.submit();
  }

  submit(){
    // debugger;
    this.dealerService.addDealer(this.fullFormsInfo).subscribe( res => {
      // debugger;
    }, err => {

    })
  }

}
