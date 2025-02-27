import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestcorusolComponent } from './latestcorusol.component';

describe('LatestcorusolComponent', () => {
  let component: LatestcorusolComponent;
  let fixture: ComponentFixture<LatestcorusolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestcorusolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestcorusolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
