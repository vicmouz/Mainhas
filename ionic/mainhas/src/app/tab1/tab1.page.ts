import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, GeoSearchControl, OpenStreetMapProvider } from 'leaflet';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  map: Map;

  creches = [{ "id": "creche-menino-jesus", "name": "Creche Menino Jesus", "lat": -8.0389406, "lon": -34.9175401 },
  { "id": "creche-paulo-guerra", "name": "Creche Senador Paulo Guerra", "lat": -8.0873369, "lon": -34.9069596 },
  { "id": "creche-irma-dulce", "name": "Creche Irmã Dulce", "lat": -8.0421904, "lon": -34.8900877 }];

  private userLatitude: any;
  private userLongitude: any;

  ionViewDidEnter() { this.leafletMap(); }
  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([-8.05389, -34.88111], 13);
    tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);



    /*marker([-8.0389406, -34.9175401]).addTo(this.map)
      .bindPopup('Creche Menino Jesus');
    marker([-8.0873369, -34.9069596]).addTo(this.map)
      .bindPopup('Creche Senador Paulo Guerra');
    marker([-8.0421904, -34.8900877]).addTo(this.map)
      .bindPopup('Creche Irmã Dulce');
*/
    for (let index = 0; index < this.creches.length; index++) {
      marker([this.creches[index].lat, this.creches[index].lon])
        .bindPopup(this.creches[index].name)
        .addTo(this.map);
    }
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}