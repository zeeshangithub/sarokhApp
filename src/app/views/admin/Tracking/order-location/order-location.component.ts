import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-order-location',
  templateUrl: './order-location.component.html',
  styleUrls: ['./order-location.component.css']
})
export class OrderLocationComponent implements OnInit {

  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;

  constructor() {};

  locations = [
    {lat: 21.553333, lng: 39.192779 , name: 'Warehouse1'},
    {lat: 24.7136, lng:  46.6753 ,name : 'Warehouse2'},
    {lat: 21.3891, lng: 39.8579 , name : 'Warehouse3'},
    {lat: 24.5247, lng: 39.5692 , name : 'Warehouse4'},
  
  ]
  ngOnInit() {   
    this.renderMap();

  }

  loadMap = () => {
    var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: {lat: 23.8859, lng: 45.0792},
      zoom: 7
    });

    for (let i = 0; i < this.locations.length; i++) { 
      var marker = new window['google'].maps.Marker({
          position: new window['google'].maps.LatLng(this.locations[i]['lat'], this.locations[i]['lng']),
          map: map,
          title: this.locations[i]['name']
      });
  }
 
  

    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="thirdHeading" class="thirdHeading">Sarokh</h3>'+
    '<div id="bodyContent">'+
    '<p></p>'+
    '</div>'+
    '</div>';

    var infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

  }
  renderMap() {

    window['initMap'] = () => {
      this.loadMap();     
    }
    if(!window.document.getElementById('google-map-script')) {
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