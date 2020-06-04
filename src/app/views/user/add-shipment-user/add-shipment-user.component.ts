import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-shipment-user',
  templateUrl: './add-shipment-user.component.html',
  styleUrls: ['./add-shipment-user.component.css']
})
export class AddShipmentUserComponent implements OnInit {
  roles: any;
  userForm: FormGroup;
  submitted = false;;
  constructor(private formbuilder: FormBuilder, private userService: UserService, 
    private router: Router) { }
  get f() { return this.userForm.controls; }

  ngOnInit(): void {
    this.initializeUserForm();
    this.fetchUserRoles();
  }

  initializeUserForm() {
    this.userForm = this.formbuilder.group({
      contact: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],
      
    })
  }

  fetchUserRoles():void {
    this.userService.fetchUserRoles().subscribe(res => {
      this.roles = res;
    })
  }

  submit(): void{
    this.submitted = true;
    if(!this.userForm.invalid){
      this.addUser();
    }
    
  }

  addUser(): void{
    this.userService.addUser(this.userForm.value).subscribe(res => {
      alert('Order created successfully')
      this.router.navigate(['user']);
    })
  }

}
