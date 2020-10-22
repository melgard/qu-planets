import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPlanetsComponent } from './no-planets.component';

describe('NoPlanetsComponent', () => {
  let component: NoPlanetsComponent;
  let fixture: ComponentFixture<NoPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
