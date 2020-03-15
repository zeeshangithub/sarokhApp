import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { constants } from 'buffer';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

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
      parentTypeId: ['']
    })
  }

  fetchUserRoles(): void {
    this.userService.fetchUserRoles().subscribe(res => {
      console.log("res", res)
      this.roles = res;



      if (localStorage.getItem('role') === 'shipper') {


        this.roles.filter(function(item) {return item.type === 'Manager'})
        

        for (var i=0; i < this.roles.length; i++) {
          if (this.roles[i].name === "Manager") {
              return this.roles[i];
          }
        }

        console.log(this.roles)
        // const allowed = ['id'];
        // const filtered = Object.keys(this.roles)
        //   .filter(key => allowed.includes(key))
        //   .reduce((obj, key) => {
        //     obj[key] = this.roles[key];
        //     return obj;
        //   }, {});
        
          // console.log(filtered)

        //  this.roles = "";
        //   this.roles = 
      }


    })
  }

  submit(): void {
    this.submitted = true;
    if (!this.userForm.invalid) {
      this.addUser();
    }

  }

  addUser(): void {
  if(localStorage.getItem('role') === 'shipper'){
    const parentTypeId = localStorage.getItem('id')
    console.log(parentTypeId);
    this.userForm.get('parentTypeId').setValue(parentTypeId);
    // this.userForm.updateValueAndValidity();
    // this.userForm.patchValue({'parentTypeId' :parentTypeId  })
    console.log("this.userForm" , this.userForm)
    // this.userService.addShipperUser(this.userForm.value).subscribe(res => {
    //   // alert('Order created successfully')
    //   this.router.navigate(['user']);
    // })
  } else if(localStorage.getItem('role') === 'admin'){
    this.userService.addUser(this.userForm.value).subscribe(res => {
      // alert('Order created successfully')
      this.router.navigate(['user']);
    })
  }
  }

}
