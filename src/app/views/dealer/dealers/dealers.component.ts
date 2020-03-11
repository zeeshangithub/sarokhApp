import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(path: string): void{
    this.router.navigate([path]);
  }

}
