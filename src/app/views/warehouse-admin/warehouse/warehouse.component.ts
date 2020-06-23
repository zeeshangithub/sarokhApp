import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { WarehouseService } from '../../../services/warehouse.service';
import { SarokhwearhouseService } from '../../../services/sarokhwearhouse.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  warehouses;
  shipmentList;
  warehouseData: any;
  private geoCoder;
  address;
  showMap = false;
  @ViewChild('mapRef', { static: true }) mapElement: ElementRef;


  constructor(private getWarehouseService: WarehouseService, private getwarehouseDashoboardData: SarokhwearhouseService
    , private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  locations = [
    { lat: 29.953894, lng: 40.197044, name: 'Driver 1' },
    { lat: 26.399250, lng: 49.984360, name: 'Driver 2' },
    { lat: 24.507143, lng: 44.408798, name: 'Driver 3' },
    { lat: 25.994478, lng: 45.318161, name: 'Driver 4' },
  ]

  ngOnInit(): void {
    const warehouseid = 1
    this.getWarehouseData(warehouseid)
    this.getWarehouseService.fetchSarokhWarehouses().subscribe(res => {
      this.warehouses = res.data.warehouseList
    })
  }

  getWarehouseData(id) {

    this.getwarehouseDashoboardData.dashboardSarokhWearhouse(id).subscribe(res => {
      console.log("res", res)
      this.warehouseData = res.data;
      this.shipmentList = res.data.shipments;
      this.latitude = parseInt(res.data.locationLatitude);
      this.longitude = parseInt(res.data.locationLongitude);
      this.showMap = true;
      this.initializeMap(this.latitude, this.longitude);
      console.log()
    })
  }
  initializeMap(lat, long) {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation(lat, long);
      this.geoCoder = new google.maps.Geocoder;


    });
  }
  private setCurrentLocation(lat, long) {
    if ('geolocation' in navigator) {
      this.latitude = lat;
      this.longitude = long;

      this.zoom = 7;
      // navigator.geolocation.getCurrentPosition((position) => {
      //   this.latitude = position.coords.latitude;
      //   this.longitude = position.coords.longitude;
      //   this.zoom = 15;
      // });
    }
  }



}
