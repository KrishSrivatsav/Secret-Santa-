import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForresComponent } from './forres.component';

describe('ForresComponent', () => {
  let component: ForresComponent;
  let fixture: ComponentFixture<ForresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
