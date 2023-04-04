import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { clientMarkerEmpty, clientsI } from '../../model/clients.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  
  private selectedMarker$: BehaviorSubject<clientsI> = new BehaviorSubject<clientsI>(clientMarkerEmpty);
  private filterClient$: BehaviorSubject<clientsI> = new BehaviorSubject<clientsI>(clientMarkerEmpty)  

  get sharingSelectedMarker(): Observable<clientsI> {   
    return this.selectedMarker$.asObservable();
  }
  get sharingFilterClient(): Observable<clientsI> {   
    return this.filterClient$.asObservable();
  }

  constructor() { }

  public setSelectedMarker(clients: clientsI): void {   
    this.selectedMarker$.next(clients);
  }
  public setFilterClient(clients: clientsI): void {   
    this.filterClient$.next(clients);
  }
}
