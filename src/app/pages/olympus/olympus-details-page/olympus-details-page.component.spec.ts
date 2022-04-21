import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympusDetailsPageComponent } from './olympus-details-page.component';

describe('OlympusDetailsPageComponent', () => {
  let component: OlympusDetailsPageComponent;
  let fixture: ComponentFixture<OlympusDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlympusDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympusDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
