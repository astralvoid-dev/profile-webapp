import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowManager {
  isMainOpen = true;
  isBioOpen = false;
  isGalleryOpen = false;

  isMinimized = false;
  isMainMinimized = false;
  isBioMinimized = false;
  isGalleryMinimized = false;

  isMainImportant = true;
  isBioImportant = false;
  isGalleryImportant = false;

  openWindow(windowType: string) {
    switch(windowType) {
      case 'main':
        this.isMainOpen = true;
        break;
      case 'bio':
        this.isBioOpen = true;
        break;
      case 'gallery':
        this.isGalleryOpen = true;
        break;
      default:
        console.error("Window type undefined");
    }
  }

  closeWindow(windowType: string) {
    switch(windowType) {
      case 'main':
        this.isMainOpen = false;
        break;
      case 'bio':
        this.isBioOpen = false;
        break;
      case 'gallery':
        this.isGalleryOpen = false;
        break;
      default:
        console.error("Window type undefined");
    }
  }

  minimizeWindow(windowType: string) {
    this.isMinimized = true;
    switch(windowType) {
      case 'main':
        this.isMainMinimized = true;
        break;
      case 'bio':
        this.isBioMinimized = true;
        break;
      case 'gallery':
        this.isGalleryMinimized = true;
        break;
      default:
        console.error("Window type undefined");
    }
  }

  maximizeWindow(windowType: string) {
    this.isMinimized = false;
    switch(windowType) {
      case 'main':
        this.isMainMinimized = false;
        break;
      case 'bio':
        this.isBioMinimized = false;
        break;
      case 'gallery':
        this.isGalleryMinimized = false;
        break;
      default:
        console.error("Window type undefined");
    }
  }

  toggleImportance(windowType : string) {
    switch(windowType) {
      case 'main':
        this.isMainImportant = true;
        this.isBioImportant = false;
        this.isGalleryImportant = false;
        break;
      case 'bio':
        this.isMainImportant = false;
        this.isBioImportant = true;
        this.isGalleryImportant = false;
        break;
      case 'gallery':
        this.isMainImportant = false;
        this.isBioImportant = false;
        this.isGalleryImportant = true;
        break;
      default:
        console.error("Window type undefined");
    }
  }

}
