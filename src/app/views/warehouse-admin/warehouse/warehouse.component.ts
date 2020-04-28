import { Component, OnInit, ViewChild, ElementRef , NgZone} from '@angular/core';
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
  @ViewChild('mapRef', { static: true }) mapElement: ElementRef;


  constructor(private getWarehouseService: WarehouseService, private getwarehouseDashoboardData: SarokhwearhouseService
    ,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  locations = [
    { lat: 29.953894, lng: 40.197044, name: 'Driver 1' },
    { lat: 26.399250, lng: 49.984360, name: 'Driver 2' },
    { lat: 24.507143, lng: 44.408798, name: 'Driver 3' },
    { lat: 25.994478, lng: 45.318161, name: 'Driver 4' },
  ]

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;


    });
    this.getWarehouseService.fetchSarokhWarehouses().subscribe(res => {
      this.warehouses = res.data.warehouseList
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
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      this.latitude = 21.543333;
      this.longitude = 39.172779;
      this.zoom = 7;
      // navigator.geolocation.getCurrentPosition((position) => {
      //   this.latitude = position.coords.latitude;
      //   this.longitude = position.coords.longitude;
      //   this.zoom = 15;
      // });
    }
  }
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          // window.alert('No results found');
        }
      } else {
        // window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

}
