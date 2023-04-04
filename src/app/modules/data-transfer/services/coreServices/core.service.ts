import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, zip } from 'rxjs';
import { clientsI } from 'src/app/modules/data-transfer/model/clients.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { usersI } from '../resourcesServices/models/users.interface';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private pathVersion = '/v1';
  private pathUsers = '/users';
  private pathProducts = '/products';
  private pathCategories= '/categories';

  constructor (
    private http: HttpClient
  ) {}

  /*
  public retrieveDigitalData(
    digitalData: DigitalData,
    payload: GetDigitalDataPayload
  ): Observable<DigitalData> {
    const request = new DigitalDataRequest(
      this.translateService.getDefaultLang()
    );

    if (payload.forceCache) {
      request.elements = payload.elements;
    } else {
      request.elements = payload.elements.filter((e) => !digitalData[e]);
    }

    const hasUserElement = payload.elements.some(
      (e) => e === DigitalDataElementsType.user
    );
    if (!request.elements.length) {
      return this.gaDigitalDataUserService
        .getDigitalDataUser(hasUserElement)
        .pipe(
          map((user) => {
            if (user) {
              digitalData.user = user;
            }
            return this.completeDigitalData(payload.smartRoute, digitalData);
          })
        );
    }

    return zip(
      this.gaDigitalDataUserService.getDigitalDataUser(hasUserElement),
      this.analyticsResourceService.retrieveDigitalData(request.buildRequest())
    ).pipe(
      map(([responseUser,response]) => {     
        response.page = response.page || digitalData.page;
        response.user = responseUser || digitalData.user;
        return this.completeDigitalData(payload.smartRoute, response);
      })
    );
  }
  */

  public initialize() {
    return zip(
      this.getProducts(),
      this.getCategories()      
    )
    .pipe(
      map(([products,categorys]) => {
        console.log(products);
        console.log(categorys);
      })
    );
  }

  public getProducts(): Observable<any[]> {
    return this.http.get<any[]>(
      environment.externalServiceProvider 
      + this.pathVersion + this.pathProducts
    );
  }

  public getCategories(): Observable<any[]> {
    return this.http.get<any[]>(
      environment.externalServiceProvider 
      + this.pathVersion + this.pathCategories
    );
  }
}
