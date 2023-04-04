import { Component, Input, SimpleChanges } from '@angular/core';
import { clientMarkerEmpty, clientsI } from '../../../data-transfer/model/clients.interfaces';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/modules/data-transfer/services/sharedServices/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  public allClients: clientsI [] = [];

  public countClient: number = 0;
  public allServices: number = 0;
  public allPrices: number = 0;
  public searchClients: string = '';

  constructor(
    private serviceShared: SharedServiceService,
    private router: Router
  ) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.allClients){
      this.updateDashboard(this.allClients);
    }
  }
  public searchClient(): void {
    const selected =  this.allClients.filter((client)=> client.Codigo === this.searchClients);
    if(selected.length){
      this.serviceShared.setFilterClient(selected[0]);
      this.resetValueDashboard();
      this.updateDashboard(selected);
    } else {      
      this.serviceShared.setFilterClient(clientMarkerEmpty);
      this.resetValueDashboard();
      this.updateDashboard(this.allClients);
    }

  }
  public exitToLogin(): void {
    this.clearData();
    this.router.navigate(['/login']);
  }
  private updateDashboard(clients: clientsI[]): void {
    this.countClient = clients.length;
    clients.map((data:clientsI) => {
      this.allServices += data.devices.count;
      this.allPrices += data.devices.count -3;
    }
  )}
  private clearData(): void {
    this.serviceShared.setFilterClient(clientMarkerEmpty);
    this.serviceShared.setSelectedMarker(clientMarkerEmpty);
  }
  private resetValueDashboard(): void {
    this.allServices = 0, this.allPrices = 0, this.countClient = 0;
  } 
}