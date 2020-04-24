import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
import { DataService } from '../../../../services/data.service';


declare var $;
@Component({
  selector: 'app-shipperwearhouselist',
  templateUrl: './shipperwearhouselist.component.html',
  styleUrls: ['./shipperwearhouselist.component.css'],

})
export class ShipperwearhouselistComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
 
 
  @ViewChild('dataTable') table;
  @ViewChild('search')
  public searchElementRef: ElementRef
  dataTable: any;
  dtOption: any = {};
  shipperwearhouselist: any;
  showlisting: boolean = true;
  mapLocations;
  showmap = false;
  constructor(private router: Router, private shipperwearhouse: ShipperWearhouseService,
    private shareData: DataService,
    // private cdr: ChangeDetectorRef,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
 
      // let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      // autocomplete.addListener("place_changed", () => {
      //   this.ngZone.run(() => {
      //     //get the place result
      //     let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
      //     //verify result
      //     if (place.geometry === undefined || place.geometry === null) {
      //       return;
      //     }
 
      //     //set latitude, longitude and zoom
      //     this.latitude = place.geometry.location.lat();
      //     this.longitude = place.geometry.location.lng();
      //     this.zoom = 12;
      //   });
      // });
    });
    this.setCurrentLocation();
    this.dtOption = {
      "paging": true,
      "ordering": true,
      "info": true
    };
    this.fetchWearhouse();
  }
  ngAfterViewInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
    this.fetchWearhouse();
  }
  qrIconClicked(event: any) {
    console.log("dfdfsd", event)
  }
  onLoadNext() {
    this.fetchWearhouse();
  }
  viewOrder() {
    this.router.navigate(['orders/vieworder', '216513']);
  }
  addOrder() {
    this.router.navigate(['orders/add']);
  }
  fetchWearhouse() {
    this.shipperwearhouse.GetShipperWerahouseList().subscribe(res => {
      this.shipperwearhouselist = res.data.warehouseList;
    if(res.data){
      this.mapLocations = res.data.mapLocations;
      this.showmap = true;
    }
      console.log("res", this.mapLocations)
    })
  }
  DeleteWearhouse(id) {

    this.shipperwearhouse.DeleteShipperWearhouse(id).subscribe(res => {
      console.log("res", res)
      if (res.status === 200) {
        this.fetchWearhouse();
      }
    })
  }
  addNew(e) {
    this.showlisting = e
  }
  editShipper(id, e: boolean) {
    this.showlisting = e;
    this.shareData.setID(id);
  }


  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
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
