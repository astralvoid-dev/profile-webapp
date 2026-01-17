import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGallery } from './profile-gallery';

describe('ProfileGallery', () => {
  let component: ProfileGallery;
  let fixture: ComponentFixture<ProfileGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
