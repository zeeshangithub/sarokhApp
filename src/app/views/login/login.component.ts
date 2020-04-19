import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private storage: LocalStorageService,
    private auth: AuthService,
    private toast : ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get f() { return this.loginForm.controls; }

  submit() {
    this.submitted = true;
    if (!this.loginForm.invalid) {
      this.login();
    }
  }

  login() {
    this.auth.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe(res => {
      console.log("res", res)
      if(res.status === 401){
        this.toast.error(res.message)
      }else{
        this.toast.success(res.message)
      }
      let role = '';
      if (res.status === 200) {
       
        
        if (res.data.user && res.data.user.role ) {
          role = res.data.user.role.name;
        }
        else {
          role = res.data.role.name;
        }
        localStorage.setItem('_id', res.data.id);
        if (role === 'Admin') {
          localStorage.setItem('role', 'admin');
          this.router.navigate(['/admin']);
        }
        else if (res && role === 'Shipper') {
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('role', 'shipper');
          this.router.navigate(['/shipper/Dashboard']);
        }
        else if (res && role === 'Dealer') {
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('role', 'Dealer');
          this.router.navigate(['/Dealer/Dashboard']);
        }
        else if (res && role === "WarehouseUser") {
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('role', 'WarehouseUser');
          this.router.navigate(['/warehouseadmin/warehouse']);
        }
      }
    }, err => {

    })
  }
}
