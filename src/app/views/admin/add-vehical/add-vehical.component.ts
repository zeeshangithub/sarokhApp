import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminMisService } from '../../../services/adminMis.service';
import { VeshicalService } from '../../../services/vehical.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-vehical',
  templateUrl: './add-vehical.component.html',
  styleUrls: ['./add-vehical.component.css']
})
export class AddVehicalComponent implements OnInit {

  modelvalue
  addVehicalForm: FormGroup;
  preview: string;

  constructor(private formbuilder: FormBuilder, private addVehicalService : VeshicalService,
    private toastr: ToastrService) { }

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
    const file = (event.target as HTMLInputElement).files[0];
    this.addVehicalForm.patchValue({
      avatar: file
    });
    this.addVehicalForm.get('registrationFile').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)

  }
  addVehical(){
   
    // this.addVehicalForm.get("registrationFile").setValue(this.modelvalue);
    this.addVehicalService.addVehical(this.addVehicalForm.value).subscribe(res=>{
      console.log("res" , res)
      if(res.status === 200){
        this.toastr.success(res.message);

        this.addVehicalForm.reset();
      }
    })
  }
 
}
