import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEmploymentComponent } from './past-employment.component';

describe('PastEmploymentComponent', () => {
  let component: PastEmploymentComponent;
  let fixture: ComponentFixture<PastEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastEmploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
