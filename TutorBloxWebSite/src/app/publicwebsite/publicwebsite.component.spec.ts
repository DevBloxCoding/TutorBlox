import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicwebsiteComponent } from './publicwebsite.component';

describe('PublicwebsiteComponent', () => {
  let component: PublicwebsiteComponent;
  let fixture: ComponentFixture<PublicwebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicwebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
