import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-bio',
  imports: [],
  templateUrl: './profile-bio.html',
  styleUrl: './profile-bio.css'
})
export class ProfileBio {
  birthDate = new Date('2003-02-23');
  timeDiff = Math.abs(Date.now() - this.birthDate.getTime());
  age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365.25);
}
