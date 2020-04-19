import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DealerService } from '../../../../services/dealer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { FileUploader } from 'ng2-file-upload';

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
  ifEditMode = false;
  sharedID;
  selectedDealer;
  filepath;
  fullFormsInfo = {
    dealerContract: {},
    credentials: {},
    dealerBasicInfo: {},
    dealerDetails: {}
  }

  constructor( private router: Router, private formbuilder: FormBuilder, private dealerService: DealerService,
    private shareData: DataService,private route: ActivatedRoute) {

   
     }
 public uploader: FileUploader = new FileUploader({ itemAlias: 'file' });
  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; 
    console.log(file);
    this
    this.filepath = file._file.name

    };
   

    this.initializeBasicInformationForm();
    this.initializeDealerDetailsForm();
    this.initializecontractDetailsForm();
    this.initializeSecurityForm();
    // console.log(this.route.snapshot.params.id)
    this.sharedID = this.route.snapshot.params.id;
    // this.route.paramMap.subscribe( params => {
    //   // this.sharedID = params.get('id');    
    //   console.log(params)
    // });
    this.sharedID = this.shareData.getID();
    if (this.sharedID) {
      this.ifEditMode = true;
      this.dealerService.getSingleDealer(this.sharedID).subscribe(res => {
        console.log("selectedDealer", res)
        this.selectedDealer = res;
        console.log("this.selectedDealer" , this.selectedDealer)
        // const dateOfBirth = new Date(this.selectedDealer.dateOfBirth).toISOString()
       
        if(this.selectedDealer){
          this.basicInfoForm = this.formbuilder.group({
            firstName: [this.selectedDealer.firstName],
            lastName: [this.selectedDealer.lastName],
            email: [this.selectedDealer.user.email],
            dateOfBirth: [this.selectedDealer.user.dob],
            contact: [this.selectedDealer.contact],
            profilePicture: [this.selectedDealer.profilePicture],
            id : [this.selectedDealer.id],

            
          })
          this.dealerDetailsForm = this.formbuilder.group({
            address: [this.selectedDealer.address],
            city: [this.selectedDealer.city],
            country: [this.selectedDealer.country],
            zipCode: [this.selectedDealer.zipCode],
            crFile: [''],
            crNumber: [this.selectedDealer.crNumber],
            locationLatitude: [''],
            locationLongitude: [''],
            nicFile: [''],
            nicNumber: [this.selectedDealer.nicNumber]
          })
          this.contractDetailsForm = this.formbuilder.group({
            bankName: [this.selectedDealer.bankAccount.bank],
            compensationClearanceDuration: [this.selectedDealer.compensationClearanceDuration],
            contractStartDate: [this.selectedDealer.contractStartDate],
            contractValidToDate: [this.selectedDealer.contractValidToDate],
            contractFile: [''],
            iban: [this.selectedDealer.bankAccount.iban],
            preShipmentCompensation: [this.selectedDealer.preShipmentsCompensation],
            bankAccountId : [this.selectedDealer.bankAccountId]
          })
          this.securityForm = this.formbuilder.group({
            username: [this.selectedDealer.user.userName],
            password: [this.selectedDealer.user.userPassword],
            userId: [this.selectedDealer.user.userId]
          })
        }
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
      id:['']
    })
  }
  initializeDealerDetailsForm() {
    this.dealerDetailsForm = this.formbuilder.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      crFile: [''],
      crNumber: ['', [Validators.required]],
      locationLatitude: [''],
      locationLongitude: [''],
      nicFile: [''],
      nicNumber: ['', [Validators.required]]
    })
  }
  initializecontractDetailsForm() {
    this.contractDetailsForm = this.formbuilder.group({
      bankName: ['', [Validators.required]],
      compensationClearanceDuration: ['', [Validators.required]],
      contractStartDate: ['', [Validators.required]],
      contractValidToDate: ['', [Validators.required]],
      contractFile: [''],
      iban: ['', [Validators.required]],
      preShipmentCompensation: ['', [Validators.required]],
      bankAccountId:['']
    })
  }

  initializeSecurityForm() {
    this.securityForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      userId:['']
    })
  }
  finishFunction() {
    this.fullFormsInfo.dealerContract = this.contractDetailsForm.value;
    this.fullFormsInfo.credentials = this.securityForm.value;
    this.fullFormsInfo.dealerBasicInfo = this.basicInfoForm.value;
    this.fullFormsInfo.dealerDetails = this.dealerDetailsForm.value;
    this.submit();
  }
  submit() {
    // debugger;
    console.log("this.fullFormsInfo", this.fullFormsInfo)
    this.dealerService.addDealer(this.fullFormsInfo).subscribe(res => {
      console.log(res)
      if (res.status === 200) {
        this.router.navigate(['/admin/alldealers']);
      }
    }, err => {

    })
  }
  updateFunction(){
    // this.fullFormsInfo.credentials = this.securityForm.value;
    console.log(this.securityForm.value);
    console.log(this.selectedDealer.id)
    this.basicInfoForm.get('profilePicture').setValue(this.filepath)
    // this.basicInfoForm.controls['id'].setValue(this.selectedDealer.id);
    // // this.basicInfoForm.controls['id'].setValue
    console.log(this.basicInfoForm.value);
    this.fullFormsInfo.dealerContract = this.contractDetailsForm.value;
    this.fullFormsInfo.credentials = this.securityForm.value;
    this.fullFormsInfo.dealerBasicInfo = this.basicInfoForm.value;
    this.fullFormsInfo.dealerDetails = this.dealerDetailsForm.value;

    console.log(this.fullFormsInfo)
    this.dealerService.updateSingleDealer(this.fullFormsInfo).subscribe(res=> {
      console.log(res)
      if(res){
          this.router.navigate(['/admin/alldealers']);
      }
    })
  }

}
