import { Component, inject } from '@angular/core';
import { ProfileWindow } from "../profile-window/profile-window";
import { ProfileMain } from "../profile-main/profile-main";
import { ProfileBio } from "../profile-bio/profile-bio";
import { WindowManager } from '../../services/window-manager/window-manager';
import { ProfileGallery } from "../profile-gallery/profile-gallery";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profile-startpage',
  imports: [ProfileWindow, ProfileMain, ProfileBio, ProfileGallery, NgClass],
  templateUrl: './profile-startpage.html',
  styleUrl: './profile-startpage.css'
})
export class ProfileStartpage {
  windowManager = inject(WindowManager);
}
