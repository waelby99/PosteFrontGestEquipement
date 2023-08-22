import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmaintComponent } from './detailsmaint.component';

describe('DetailsmaintComponent', () => {
  let component: DetailsmaintComponent;
  let fixture: ComponentFixture<DetailsmaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsmaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsmaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
