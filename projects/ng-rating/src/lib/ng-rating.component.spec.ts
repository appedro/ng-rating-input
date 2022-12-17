import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRatingComponent } from './ng-rating.component';

describe('NgRatingComponent', () => {
  let component: NgRatingComponent;
  let fixture: ComponentFixture<NgRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
