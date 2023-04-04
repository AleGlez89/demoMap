import { Injectable } from '@angular/core';
import { sessionDataNames } from './models/session-data-names.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionStoreService {

  public getSessionStoreValue<T>(key: sessionDataNames): T | null {
    const value = window.sessionStorage.getItem(key);

    if(value) {
      return JSON.parse(value) as T;
    } else {
      return null;
    }
  }

  public setSessionStoreValue<T>(key: sessionDataNames, value: T) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }

  public removeSessionStoreValue(key: sessionDataNames) {
    window.sessionStorage.removeItem(key)
  }
}
