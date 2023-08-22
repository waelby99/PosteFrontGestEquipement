import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomComponent } from './editcom.component';

describe('EditcomComponent', () => {
  let component: EditcomComponent;
  let fixture: ComponentFixture<EditcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
