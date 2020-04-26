import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { DealerService } from '../../../../services/dealer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader, MouseEvent } from '@agm/core';
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
  validationErrorMessage = "Please Enter Required Fields";
  filepath;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  fullFormsInfo = {
    dealerContract: {},
    credentials: {},
    dealerBasicInfo: {},
    dealerDetails: {}
  }

  constructor(private router: Router, private formbuilder: FormBuilder, private dealerService: DealerService,
    private shareData: DataService, private route: ActivatedRoute, private toaster: ToastrService ,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, ) {


  }
  public uploader: FileUploader = new FileUploader({ itemAlias: 'file' });
  ngOnInit(): void {

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
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
        console.log("this.selectedDealer", this.selectedDealer)
        // const dateOfBirth = new Date(this.selectedDealer.dateOfBirth).toISOString()

        if (this.selectedDealer) {
          this.basicInfoForm = this.formbuilder.group({
            firstName: [this.selectedDealer.firstName],
            lastName: [this.selectedDealer.lastName],
            email: [this.selectedDealer.user.email],
            dateOfBirth: [this.selectedDealer.user.dob],
            contact: [this.selectedDealer.contact],
            profilePicture: [this.selectedDealer.profilePicture],
            id: [this.selectedDealer.id],


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
            bankAccountId: [this.selectedDealer.bankAccountId]
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
      id: ['']
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
      bankAccountId: ['']
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
    
    this.dealerDetailsForm.patchValue({ 'locationLongitude': this.longitude});
    this.dealerDetailsForm.patchValue({ 'locationLatitude': this.latitude });
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

        this.toaster.success(res.message)

        this.router.navigate(['/admin/alldealers']);
      }
    }, err => {

    })
  }
  updateFunction() {
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
    this.dealerService.updateSingleDealer(this.fullFormsInfo).subscribe(res => {
      console.log(res)
      if (res) {
        this.router.navigate(['/admin/alldealers']);
      }
    })
  }
  showErrorBasicInfoForm() {
    console.log(this.basicInfoForm.valid);
    if (this.basicInfoForm.valid === false) {
      this.toaster.error(this.validationErrorMessage);
    }
  }
  showErrorDealerDetailsForm() {
    console.log(this.dealerDetailsForm.valid);
    if (this.dealerDetailsForm.valid === false) {
      this.toaster.error(this.validationErrorMessage);
    }
  }
  showErrorContractDetailsForm() {
    console.log(this.contractDetailsForm.valid);
    if (this.contractDetailsForm.valid === false) {
      this.toaster.error(this.validationErrorMessage);
    }
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      this.latitude = 21.543333;
      this.longitude = 39.172779;
      this.zoom = 7;
    }
  }
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          // window.alert('No results found');
        }
      } else {
        // window.alert('Geocoder failed due to: ' + status);
      }
    });
  }


}
