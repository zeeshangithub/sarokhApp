import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WarehouseService } from '../../../services/warehouse.service';
import { SarokhwearhouseService } from '../../../services/sarokhwearhouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  warehouses;
  shipmentList;
  warehouseData: any;
  @ViewChild('mapRef', { static: true }) mapElement: ElementRef;


  constructor(private getWarehouseService: WarehouseService, private getwarehouseDashoboardData: SarokhwearhouseService) { }

  locations = [
    { lat: 29.953894, lng: 40.197044, name: 'Driver 1' },
    { lat: 26.399250, lng: 49.984360, name: 'Driver 2' },
    { lat: 24.507143, lng: 44.408798, name: 'Driver 3' },
    { lat: 25.994478, lng: 45.318161, name: 'Driver 4' },
  ]

  ngOnInit(): void {
    this.renderMap();
    this.getWarehouseService.fetchSarokhWarehouses().subscribe(res => {
      this.warehouses = res.data
    })
  }

  getWarehouseData(id) {

    this.getwarehouseDashoboardData.dashboardSarokhWearhouse(id).subscribe(res => {
      console.log("res", res)
      this.warehouseData = res.data;
      this.shipmentList = res.data.shipments
      console.log()
    })
  }

  loadMap = () => {
    var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: { lat: 23.8859, lng: 45.0792 },
      zoom: 7
    });

    // var marker = new window['google'].maps.Marker({
    //   position: {lat: 21.553333, lng: 39.192779},
    //   map: map,
    //   title: 'Warehouse1',
    //   draggable: true,
    //   animation: window['google'].maps.Animation.DROP,
    // });

    for (let i = 0; i < this.locations.length; i++) {
      var marker = new window['google'].maps.Marker({
        position: new window['google'].maps.LatLng(this.locations[i]['lat'], this.locations[i]['lng']),
        map: map,
        title: this.locations[i]['name']
      });
    }



    var contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="thirdHeading" class="thirdHeading">Sarokh</h3>' +
      '<div id="bodyContent">' +
      '<p></p>' +
      '</div>' +
      '</div>';

    var infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });

  }
  renderMap() {

    window['initMap'] = () => {
      this.loadMap();
    }
    if (!window.document.getElementById('google-map-script')) {
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjt_DROGYyzEY0BTDt0vrPcZIMLuBUGiw&callback=initMap";

      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }


}
