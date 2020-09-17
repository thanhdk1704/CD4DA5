import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuathongtinComponent } from './suathongtin.component';

describe('SuathongtinComponent', () => {
  let component: SuathongtinComponent;
  let fixture: ComponentFixture<SuathongtinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuathongtinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuathongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
