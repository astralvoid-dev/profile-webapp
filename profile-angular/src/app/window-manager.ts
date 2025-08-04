import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowManager {
  isMainOpen = true;
  isBioOpen = false;

  openBioWindow() {
    this.isBioOpen = !this.isBioOpen;
  }
}
