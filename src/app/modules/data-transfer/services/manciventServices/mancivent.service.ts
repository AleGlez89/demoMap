import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clientsI } from 'src/app/modules/data-transfer/model/clients.interfaces';
import { ResourcesService } from '../resourcesServices/resources.service';
import { defaultUser, usersI } from '../resourcesServices/models/users.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManciventService {

  get sharingAllClients(): Observable<clientsI[]> {
    return this.respurcesServices.getClient();
  }

  constructor(
    private respurcesServices: ResourcesService
  ) {}

  public getUsers(): Observable<usersI[]> {
    return this.respurcesServices.getUsers()
    .pipe(
      tap(usersList => {usersList.push(defaultUser);
    }));;
  }
}