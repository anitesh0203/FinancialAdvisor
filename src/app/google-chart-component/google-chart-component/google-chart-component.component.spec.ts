import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleChartComponentComponent } from './google-chart-component.component';

describe('GoogleChartComponentComponent', () => {
  let component: GoogleChartComponentComponent;
  let fixture: ComponentFixture<GoogleChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
