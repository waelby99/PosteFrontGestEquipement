import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcomComponent } from './detailcom.component';

describe('DetailcomComponent', () => {
  let component: DetailcomComponent;
  let fixture: ComponentFixture<DetailcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
