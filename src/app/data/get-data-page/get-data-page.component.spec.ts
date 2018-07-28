import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataPageComponent } from './get-data-page.component';

describe('GetDataPageComponent', () => {
  let component: GetDataPageComponent;
  let fixture: ComponentFixture<GetDataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDataPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
