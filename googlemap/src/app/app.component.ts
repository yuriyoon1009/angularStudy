import { Component, OnInit } from '@angular/core';
// Marker Type
interface Marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

@Component({
  selector: 'app-root',
  template: `
  <nav class="nav">
    <h1>{{ title }}</h1>
  </nav>
  <div class="container">
    <agm-map
            [latitude]="lat"
            [longitude]="lng"
            [zoom]="zoom"
            [disableDefaultUI]=false
            [zoomControl]="false"
            (mapClick)="mapClicked($event)">
    <!-- [iconUrl]="'../assets/airbnb.png'"-->
      <agm-marker
            *ngFor="let m of markers; let i = index"
            (markerClick)="clickedMarker(m, i)"
            [latitude]="m.lat"
            [longitude]="m.lng"
            [markerDraggable]="m.draggable"
            (dragEnd)="markerDragEnd(m, $event)"
           >
          <agm-info-window>
              <strong>{{m.name}}</strong>
          </agm-info-window>
      </agm-marker>
    </agm-map>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Add new marker</h3>
        </div>
        <div class="panel-body">
          <form>

          </form>
        </div>
      </div>
    </div>
  </div>
  `,
  styles : [`agm-map {height:300px;}
  .nav{height:70px; width:98%; background:#FF5A5F; color:#fff;
  padding-left:2%; line-height:70px;
  }
  .container{padding-top:30px;}
  `]
})
export class AppComponent implements OnInit {
  title: string;
  // zoom level
  zoom: number;
  // start position
  lat: number;
  lng: number;
  markers: Marker[];
  ngOnInit() {
    this.title = 'google map';
    this.zoom = 10;
    this.lat = 51.678418;
    this.lng = 7.809007;

    this.markers = [
      {
        name: 'airbnb1',
        lat: 51.678418,
        lng: 7.929007,
        draggable: true
      },
      {
        name: 'airbnb2',
        lat: 51.678418,
        lng: 7.759007,
        draggable: true
      },
      {
        name: 'airbnb3',
        lat: 51.678418,
        lng: 7.349007,
        draggable: true
      }
    ];
  }
  // Markers
  clickedMarker(marker, index:number) {
    console.log(`clicked Marker: 
    ${marker.name} at index ${index}`)
  }

  /*
     clickedMarker(marker: marker, index:number) {
    console.log(`clicked Marker: 
    ${marker.name} at index ${index}`)
  }
  */

  mapClicked($event: any){
    console.log('map clicked');
    const newMarker = {
      name: 'untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    };
    this.markers.push(newMarker);
    console.log(this.markers);
  }

  markerDragEnd(marker: any, $event: any) {
    console.log('dragEnd', marker, $event);

    const updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }
    const newLat = $event.coords.lat;
    const newLng = $event.coords.lng;
  }
  // https://stackoverflow.com/questions/32062849/modify-my-custom-marker-image-size-for-my-google-map
  // https://github.com/angular-ui/angular-google-maps/issues/436#event-124520459
  // https://github.com/SebastianM/angular-google-maps/issues/517
}
