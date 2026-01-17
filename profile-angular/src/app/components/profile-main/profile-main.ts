import { Component, inject, Input } from '@angular/core';
import { WindowManager } from '../../services/window-manager/window-manager';

@Component({
  selector: 'app-profile-main',
  imports: [],
  templateUrl: './profile-main.html',
  styleUrl: './profile-main.css'
})

export class ProfileMain {
  // TODO: Calculate age in a custom pipe
  birthDate = new Date('2003-02-23');
  timeDiff = Math.abs(Date.now() - this.birthDate.getTime());
  age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365.25);

  private windowManager = inject(WindowManager);

  openWindow(type: string) {
    this.windowManager.openWindow(type);
  }
}
