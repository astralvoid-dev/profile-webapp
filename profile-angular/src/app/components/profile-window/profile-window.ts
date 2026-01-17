import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { WindowManager } from '../../services/window-manager/window-manager';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-profile-window',
  imports: [CdkDrag, CdkDragHandle, TitleCasePipe],
  templateUrl: './profile-window.html',
  styleUrl: './profile-window.css'
})
export class ProfileWindow {

  @Input()
  windowType = '';

  windowManager = inject(WindowManager);

  closeWindow() {
    this.windowManager.closeWindow(this.windowType);
  }

  minimizeWindow() {
    this.windowManager.minimizeWindow(this.windowType);
  }

  maximizeWindow() {
    this.windowManager.maximizeWindow(this.windowType);
  }

  toggleImportance() {
    this.windowManager.toggleImportance(this.windowType);
  }
  
}
