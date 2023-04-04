import { Component, ElementRef, OnInit, Input, SimpleChanges } from '@angular/core';
import { clientsI, propertyMapI } from '../../../data-transfer/model/clients.interfaces';
import { ManciventService } from 'src/app/modules/data-transfer/services/manciventServices/mancivent.service';
import { SharedServiceService } from 'src/app/modules/data-transfer/services/sharedServices/shared-service.service';
import { SessionStoreService } from 'src/app/modules/data-transfer/services/sessionStoreServices/session-store.service';
import { sessionDataNames } from 'src/app/modules/data-transfer/services/sessionStoreServices/models/session-data-names.interface';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {

  name = 'Angular';
  lat: number = 39.9;
  lng: number = -4.366745381736881;
  tmpIcon = {
    url: "../../../../assets/img/2875387_3.png"
  }
  
  @Input()
  public listClients: clientsI [] = [];

  public updateMarkers: boolean = false;
  public defaultPropertyMap: propertyMapI = {
    //41.02647852582954, -2.2812653289285625
    coordinates: {latitude: 41.02647852582954, longitude: -2.2812653289285625}, 
    zoom: 6, 
    title: 'Demo melon de frank'
  }
  public markerClients: clientsI [] = [];

  constructor(
    private serviceShared: SharedServiceService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.listClients){
     this.markerClients = this.listClients;
    }
    
  }
  ngOnInit(): void {
    this.initialize();
  }
  public clickedMarker(marker: clientsI): void {
    console.log(marker)
    const selectedmarker: clientsI [] = this.markerClients
    .filter((data: clientsI) => {
     return data.id === marker.id
   });
 
   if(selectedmarker.length){
     this.serviceShared.setSelectedMarker(selectedmarker[0]);
   }
  }
  private initialize(): void {
    this.serviceShared.sharingFilterClient
    .subscribe((data: clientsI)=>{
      console.log(data)
      this.updateMarker(data);
    });
  }
  private updateMarker(newMarker: clientsI): void {
    if(newMarker.id !== 'null'){
      this.updateMarkers = true;
      this.markerClients = [];
      this.markerClients.push(newMarker);
      console.log('inter')
    } else if (this.updateMarkers){
      console.log('down')
      this.updateMarkers = false;
      this.markerClients = [];
      this.markerClients = [...this.listClients];
    }
    
  }

  test($event: google.maps.MapMouseEvent){
  }

  loadUrl(marker: clientsI): string {
    console.log(marker);
    return '';
  }
}