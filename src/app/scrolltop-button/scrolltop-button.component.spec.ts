import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolltopButtonComponent } from './scrolltop-button.component';

describe('ScrolltopButtonComponent', () => {
  let component: ScrolltopButtonComponent;
  let fixture: ComponentFixture<ScrolltopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrolltopButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrolltopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
