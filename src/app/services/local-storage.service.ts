import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private router: Router) {}

  getLocalStorageUserId() {
    return localStorage.getItem('userId')?.toString();
  }

  getLocalStorageApiKey() {
    return localStorage.getItem('apiKey')?.toString();
  }

  setLocalStorageUserId(userId: any) {
    localStorage.setItem('userId', userId);
  }
  setLocalStorageApiKey(apikey: string) {
    localStorage.setItem('apiKey', apikey);
  }

  isLogged() {
    return (
      this.getLocalStorageApiKey() !== null &&
      this.getLocalStorageApiKey() !== undefined
    );
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('apiKey');
    this.router.navigate(["login"]);
  }
}
