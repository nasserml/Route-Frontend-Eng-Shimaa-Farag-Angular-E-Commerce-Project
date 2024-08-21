import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwDangerComponent } from './tw-danger.component';

describe('TwDangerComponent', () => {
  let component: TwDangerComponent;
  let fixture: ComponentFixture<TwDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwDangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
