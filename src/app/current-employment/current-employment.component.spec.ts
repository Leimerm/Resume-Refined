import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEmploymentComponent } from './current-employment.component';

describe('CurrentEmploymentComponent', () => {
  let component: CurrentEmploymentComponent;
  let fixture: ComponentFixture<CurrentEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentEmploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
