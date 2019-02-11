import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoderComponent } from './foder.component';

describe('FoderComponent', () => {
  let component: FoderComponent;
  let fixture: ComponentFixture<FoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
