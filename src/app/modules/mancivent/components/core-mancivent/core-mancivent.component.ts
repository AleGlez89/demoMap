import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { clientsI } from 'src/app/modules/data-transfer/model/clients.interfaces';
import { ManciventService } from 'src/app/modules/data-transfer/services/manciventServices/mancivent.service';
import { sessionDataNames } from 'src/app/modules/data-transfer/services/sessionStoreServices/models/session-data-names.interface';
import { SessionStoreService } from 'src/app/modules/data-transfer/services/sessionStoreServices/session-store.service';

@Component({
  selector: 'app-core-mancivent',
  templateUrl: './core-mancivent.component.html',
  styleUrls: ['./core-mancivent.component.scss']
})
export class CoreManciventComponent implements OnInit  {

  enabledManagementsClients: boolean = false;
  sidebarExpanded = true;
  public listClients: clientsI [] = [];

  constructor(
    private serviceMancivent: ManciventService,
    private sessionStore: SessionStoreService
  ) {}

  ngOnInit(): void {    
    this.initialize();  
  }
  public receivedListClients(event: clientsI[]): void { 
    this.listClients = event;
  }
  private initialize(): void {
    const typeUser = this.sessionStore.getSessionStoreValue(sessionDataNames.typeUser);

    this.serviceMancivent.sharingAllClients
    /*
      .pipe(  
        map((client:clientsI[]) => client
        .filter((client: clientsI) => {
          client.codeGlobalClient === typeUser
        })
        )
      )
      */
      .subscribe((data: clientsI[])=>{
      this.listClients = data;
    });


  }
}