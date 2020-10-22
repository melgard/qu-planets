import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsDetailComponent } from './planets-detail.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PlanetsDetailComponent', () => {
  let component: PlanetsDetailComponent;
  let fixture: ComponentFixture<PlanetsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsDetailComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
