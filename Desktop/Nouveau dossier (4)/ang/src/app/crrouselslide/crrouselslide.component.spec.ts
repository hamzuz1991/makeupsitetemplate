import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrrouselslideComponent } from './crrouselslide.component';

describe('CrrouselslideComponent', () => {
  let component: CrrouselslideComponent;
  let fixture: ComponentFixture<CrrouselslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrrouselslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrrouselslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
