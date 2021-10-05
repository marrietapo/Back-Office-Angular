import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getLocalStorageUserId() {
    return localStorage.getItem('userId')?.toString();
  }

  getLocalStorageApiKey() {
    return localStorage.getItem('apiKey')?.toString();
  }

  setLocalStorageUserId(userId:any){
    localStorage.setItem('userId', userId);
  }
  setLocalStorageApiKey(apikey: string){
    localStorage.setItem('apiKey', apikey);
  }

}
