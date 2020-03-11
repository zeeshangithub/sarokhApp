import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(path: string): void{
    this.router.navigate([path]);
  }

}
