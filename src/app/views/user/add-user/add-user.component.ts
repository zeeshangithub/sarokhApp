import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { constants } from 'buffer';
import { DataService } from '../../../services/data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() childMessage: string;
  @Output()
  showlisting = new EventEmitter<boolean>();
  roles: any;
  userForm: FormGroup;
  submitted = false;
  message: string;
  singleUser;
  editUser = false;
  userid;
  constructor(private formbuilder: FormBuilder, private userService: UserService,
    private router: Router,
    private data: DataService ,
    private toaster: ToastrService
    ) { }
  get f() { return this.userForm.controls; }
  ngOnInit(): void {
    this.initializeUserForm();
    this.fetchUserRoles();
    const text = this.data.getID();
    console.log("text", text)
    if(text){
      this.editUser = true;
      this.userService.fetchSingleUser(text).subscribe(res => {
        this.singleUser  = res.data;
        this.userid  = this.singleUser.id;
        console.log("this.singleUser" , this.singleUser)
        this.userForm = this.formbuilder.group({
          contact: [this.singleUser.contact],
          designation: [this.singleUser.designation],
          dob: [this.singleUser.dob],
          email: [this.singleUser.email],
          fullName: [this.singleUser.fullName],
          gender: [this.singleUser.gender],
          roleId: [this.singleUser.roleId],
          userName: [this.singleUser.userName],
          userPassword: [this.singleUser.userPassword],
          parentTypeId: [this.singleUser.role.id],
          userId:[''],
        })
      })
    }
  }

  initializeUserForm() {
    this.userForm = this.formbuilder.group({
      userId:[''],
      contact: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],
      parentTypeId: [''],
  
    })
  }

  fetchUserRoles(): void {
      const selectedRoel =  localStorage.getItem('role');
      this.userService.fetchUserRoleByParentRole(selectedRoel).subscribe(res => {
      console.log("res", res)
      this.roles = res.data;

    })
  }

  submit(): void {
    this.submitted = true;
    if (!this.userForm.invalid) {
      this.addUser();
    }

  }

  addUser(): void {
    if (localStorage.getItem('role') === 'shipper') {
      const parentTypeId = localStorage.getItem('id')
      console.log(parentTypeId);
      this.userForm.get('parentTypeId').setValue(parentTypeId);
      // this.userForm.updateValueAndValidity();
      // this.userForm.patchValue({'parentTypeId' :parentTypeId  })
      console.log("this.userForm", this.userForm)
      this.userService.addShipperUser(this.userForm.value).subscribe(res => {
        console.log("res" , res)
        if(res.status == 200){
          this.toaster.success(res.message);
           this.router.navigate(['user']);
        }
        // this.toaster.success(res.)
        // this.router.navigate(['user']);
      })
    } else if (localStorage.getItem('role') === 'admin') {
      this.userService.addUser(this.userForm.value).subscribe(res => {
        // alert('Order created successfully')
        this.router.navigate(['user']);
      })
    }
    else if (localStorage.getItem('role') === 'Dealer') {
      const parentTypeId = localStorage.getItem('id')
      console.log(parentTypeId);
      this.userForm.get('parentTypeId').setValue(parentTypeId);
      this.userService.addUser(this.userForm.value).subscribe(res => {
        // alert('Order created successfully')
        console.log("res" , res);
        this.router.navigate(['user']);
      })
    }
  }
  closeAdd() {
    this.showlisting.emit(true);
    this.userForm.reset();
    this.data.setID("")
  }
  updateUser(){
    console.log("user" , this.userid)
    console.log("this.userForm.value" , this.userForm.value)
    console.log(this.userForm.get["userId"]);
    this.userForm.controls['userId'].setValue(this.userid)
    console.log("this.userForm.value" , this.userForm.value)
    this.userService.updateShipperUser(this.userForm.value).subscribe(res=>{
      console.log("res" , res)
    })

  }
}
