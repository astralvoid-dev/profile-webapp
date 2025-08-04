import { Component, inject } from '@angular/core';
import { ProfileStartpage } from '../profile-startpage/profile-startpage';
import { WindowManager } from '../window-manager';

@Component({
  selector: 'app-profile-main',
  imports: [],
  templateUrl: './profile-main.html',
  styleUrl: './profile-main.css'
})

export class ProfileMain {
  birthDate = new Date('2003-02-23');
  timeDiff = Math.abs(Date.now() - this.birthDate.getTime());
  age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365.25);

  windowManager = inject(WindowManager);

  openWindow() {
    this.windowManager.openBioWindow();
  }
}
