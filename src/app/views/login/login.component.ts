import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LocalStorageService} from 'ngx-webstorage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private storage:LocalStorageService,
    private auth: AuthService
    ){}

  ngOnInit(){
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get f() { return this.loginForm.controls; }

  submit () {
    this.submitted = true;
    if(!this.loginForm.invalid){
      this.login();
    }
  }

  login(){
    this.auth.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe(res => {
     
      console.log("res" , res)
      let role = '';
      if(res && res.data.role){

        role = res.data.role.name;
        localStorage.setItem('_id', res.data.id);
        if(role === 'Admin'){
          localStorage.setItem('role', 'admin');
        }
        this.router.navigate(['dashboard']);
      }
      else if(res && res.data.user.role.name === 'Shipper') {
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('role', 'shipper');
        this.router.navigate(['/shipper/Dashboard']);
      }
    }, err => {

    })
  }
 }
