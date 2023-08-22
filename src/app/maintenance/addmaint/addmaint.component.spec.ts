import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaintComponent } from './addmaint.component';

describe('AddmaintComponent', () => {
  let component: AddmaintComponent;
  let fixture: ComponentFixture<AddmaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
