import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmaintComponent } from './editmaint.component';

describe('EditmaintComponent', () => {
  let component: EditmaintComponent;
  let fixture: ComponentFixture<EditmaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
