import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwAlertComponent } from './tw-alert.component';

describe('TwAlertComponent', () => {
  let component: TwAlertComponent;
  let fixture: ComponentFixture<TwAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
