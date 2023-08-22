import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrltechniqueComponent } from './ctrltechnique.component';

describe('CtrltechniqueComponent', () => {
  let component: CtrltechniqueComponent;
  let fixture: ComponentFixture<CtrltechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrltechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrltechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
