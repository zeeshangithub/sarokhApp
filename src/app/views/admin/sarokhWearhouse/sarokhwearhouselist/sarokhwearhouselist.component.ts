import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { SarokhwearhouseService } from '../../../../services/sarokhwearhouse.service';
import { DataService } from '../../../../services/data.service';


declare var $;
@Component({
  selector: 'app-sarokhwearhouselist',
  templateUrl: './sarokhwearhouselist.component.html',
  styleUrls: ['./sarokhwearhouselist.component.css']
})
export class SarokhwearhouselistComponent implements OnInit {
  // columnDefs = [
  //   { headerName: 'Warehouse ID', field: 'id', sortable: true, filter: true },
  //   { headerName: 'Name', field: 'name', sortable: true, filter: true },
  //   { headerName: 'Manager Name', field: 'managerName', sortable: true, filter: true },
  //   { headerName: 'Manager Contact', field: 'mangerContact', sortable: true, },
  //   { headerName: 'Address', field: 'address', sortable: true, },
  //   { headerName: 'City', field: 'city', sortable: true, },
  //   { headerName: 'Action', field: 'price', sortable: true, }
  // ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  // rowData: any;

  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  sarokhwearhouselist: any;
  showlisting: boolean = true;
  mapLocations;
  showmap = false;
  constructor(private router: Router, private sarokhwearhouse: SarokhwearhouseService,
    private shareData: DataService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }
  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;


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
  }

  viewOrder() {
    this.router.navigate(['orders/vieworder', '216513']);
  }

  addOrder() {
    this.router.navigate(['orders/add']);
  }

  fetchWearhouse() {
    this.sarokhwearhouse.GetSarokhWerahouseList().subscribe(res => {
      this.sarokhwearhouselist = res.data.warehouseList;
      // this.rowData = res.data.warehouseList;
      if (res.data) {
        this.mapLocations = res.data.mapLocations;
        this.showmap = true;
      }
      console.log("res", res.data)

    })
  }
  DeleteWearhouse(id) {
    this.sarokhwearhouse.DeleteSarokhWearhouse(id).subscribe(res => {
      console.log("res", res)

      if (res.status === 200) {
        this.fetchWearhouse();
      }
    })
  }
  addNew(e) {
    this.showlisting = e
  }
  EditWarehouse(id, e: boolean) {
    this.showlisting = e;
    this.shareData.setID(id);
  } private setCurrentLocation() {
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
