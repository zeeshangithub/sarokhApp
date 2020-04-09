import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminMisService } from '../../../services/adminMis.service';
import { VeshicalService } from '../../../services/vehical.service';

@Component({
  selector: 'app-add-vehical',
  templateUrl: './add-vehical.component.html',
  styleUrls: ['./add-vehical.component.css']
})
export class AddVehicalComponent implements OnInit {

  modelvalue
  addVehicalForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private addVehicalService : VeshicalService) { }

  ngOnInit(): void {
    this.initializeReciveCashForm();
  }


  initializeReciveCashForm(){
    this.addVehicalForm = this.formbuilder.group({
      cargoCapacity: ['', [Validators.required]],
      createdDate: ['', [Validators.required]],
      currentMilage: ['', [Validators.required]],
      id: [],
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
      name: ['', [Validators.required]],
      owner: ['', [Validators.required]],
      registrationFile: [],
      registrationNumber: ['', [Validators.required]],
      registrationYear: ['', [Validators.required]],
      status: ['', [Validators.required]],
      type: ['' , [Validators.required]]
    })
  }
  onUploadChange(event){
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      me.modelvalue = reader.result;
      console.log("reader.result" , reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
console.log(event)

  }
  addVehical(){
    console.log("file" , this.modelvalue)
    this.addVehicalForm.get("registrationFile").setValue(this.modelvalue);
    this.addVehicalService.addVehical(this.addVehicalForm.value).subscribe(res=>{
      console.log("res" , res)
      if(res.status === 200){
        this.addVehicalForm.reset();
      }
    })
  }
}
