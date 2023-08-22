import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifserviceComponent } from './modifservice.component';

describe('ModifserviceComponent', () => {
  let component: ModifserviceComponent;
  let fixture: ComponentFixture<ModifserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
