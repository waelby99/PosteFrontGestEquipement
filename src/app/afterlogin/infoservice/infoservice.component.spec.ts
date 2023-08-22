import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoserviceComponent } from './infoservice.component';

describe('InfoserviceComponent', () => {
  let component: InfoserviceComponent;
  let fixture: ComponentFixture<InfoserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
