import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStartpage } from './profile-startpage';

describe('ProfileStartpage', () => {
  let component: ProfileStartpage;
  let fixture: ComponentFixture<ProfileStartpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileStartpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileStartpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
