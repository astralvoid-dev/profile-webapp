import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-profile-window',
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './profile-window.html',
  styleUrl: './profile-window.css'
})
export class ProfileWindow {
  
}
