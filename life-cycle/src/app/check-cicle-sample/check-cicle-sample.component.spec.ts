import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCicleSampleComponent } from './check-cicle-sample.component';

describe('CheckCicleSampleComponent', () => {
  let component: CheckCicleSampleComponent;
  let fixture: ComponentFixture<CheckCicleSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckCicleSampleComponent]
    });
    fixture = TestBed.createComponent(CheckCicleSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
