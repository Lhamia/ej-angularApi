import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympusComponent } from './olympus.component';

describe('OlympusComponent', () => {
  let component: OlympusComponent;
  let fixture: ComponentFixture<OlympusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlympusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
