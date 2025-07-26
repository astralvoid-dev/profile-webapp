import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-window',
  imports: [RouterLink],
  templateUrl: './profile-window.html',
  styleUrl: './profile-window.css'
})
export class ProfileWindow {
  birthDate = new Date('2003-02-23');
  timeDiff = Math.abs(Date.now() - this.birthDate.getTime());
  age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365.25);
}
