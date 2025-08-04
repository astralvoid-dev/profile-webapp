import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMain } from './profile-main';

describe('ProfileMain', () => {
  let component: ProfileMain;
  let fixture: ComponentFixture<ProfileMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
