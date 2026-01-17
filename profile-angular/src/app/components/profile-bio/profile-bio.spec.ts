import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBio } from './profile-bio';

describe('ProfileBio', () => {
  let component: ProfileBio;
  let fixture: ComponentFixture<ProfileBio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
