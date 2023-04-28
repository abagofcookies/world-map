import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySvgComponent } from './display-svg.component';

describe('DisplaySvgComponent', () => {
  let component: DisplaySvgComponent;
  let fixture: ComponentFixture<DisplaySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
