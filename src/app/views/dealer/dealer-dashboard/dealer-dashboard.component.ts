import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../../../services/shipper.service';
import * as Highcharts from 'highcharts';
import { DealerService } from '../../../services/dealer.service';
@Component({
    selector: 'app-dealer-dashboard',
    templateUrl: './dealer-dashboard.component.html',
    styleUrls: ['./dealer-dashboard.component.css']
})
export class DealerDashboardComponent implements OnInit {
    public dealerDetail;
    // showDetails = false;
    // constructor(private shipperdetails: ShipperService) { }
    constructor(private dealerdetail: DealerService) { }
    highcharts = Highcharts;


    ngOnInit(): void {
        this.getDealerDetail();
        // const shipperID = localStorage.getItem("id");
        // this.shipperdetails.fetchshipperDetails(shipperID).subscribe(res => {
        //     console.log("res", res)
        //     this.shipperdata = res.user;

        //     this.showDetails = true;
        //     console.log(this.shipperdata)

        // })
    }
    getDealerDetail() {
        this.dealerdetail.fetchDealersDetail().subscribe(res => {
            this.dealerDetail = res.user
        })
    }
}


// chartOptions = {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Monthly Average'
//     },
//     // subtitle: {
//     //     text: 'Source: WorldClimate.com'
//     // },
//     xAxis: {
//         categories: [
//             'Deliverd',
//             'In Process',
//             'Return',

//         ],
//         crosshair: true
//     },
//     yAxis: {
//         // min: 0,
//         // title: {
//         //     text: 'Rainfall (mm)'
//         // }
//     },
//     tooltip: {
//         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//             '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//         footerFormat: '</table>',
//         shared: true,
//         useHTML: true
//     },
//     plotOptions: {
//         column: {
//             pointPadding: 0.2,
//             borderWidth: 0
//         }
//     },
//     series: [{
//         name: 'COD',
//         data: [49.9, 71.5, 106.4]

//     }, {
//         name: 'Prepaid',
//         data: [83.6, 78.8, 98.5]

//     }, {
//         name: 'Full Prepaid',
//         data: [48.9, 38.8, 39.3]

//     }]
// }
// }