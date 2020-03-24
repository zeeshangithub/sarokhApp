import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { ShipperService } from '../../../services/shipper.service';
import {Shipperdetails } from '../../../interfaces/shipperdetails'
@Component({
  selector: 'app-shipper-dashboard',
  templateUrl: './shipper-dashboard.component.html',
  styleUrls: ['./shipper-dashboard.component.css']
})

export class ShipperDashboardComponent implements OnInit {
    shipperdata;
  constructor(private shipperdetails : ShipperService) { }
highcharts = Highcharts;


  ngOnInit(): void {

    const  shipperID  = localStorage.getItem("id");
    this.shipperdetails.fetchshipperDetails(shipperID).subscribe(res => {
        this.shipperdata = res.user;
        console.log(this.shipperdata)

    })
  }


chartOptions = {   
  chart: {
    type: 'column'
},
title: {
    text: 'Monthly Average'
},
// subtitle: {
//     text: 'Source: WorldClimate.com'
// },
xAxis: {
    categories: [
        'Deliverd',
        'In Process',
        'Return',

    ],
    crosshair: true
},
yAxis: {
    // min: 0,
    // title: {
    //     text: 'Rainfall (mm)'
    // }
},
tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0
    }
},
series: [{
    name: 'COD',
    data: [49.9, 71.5, 106.4]

}, {
    name: 'Prepaid',
    data: [83.6, 78.8, 98.5]

}, {
    name: 'Full Prepaid',
    data: [48.9, 38.8, 39.3]

}]
  }
}