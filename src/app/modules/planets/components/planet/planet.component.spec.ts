import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetComponent } from './planet.component';
import {Planet} from '../../interfaces/planet.interface';

describe('PlanetComponent', () => {
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSelect when call clicked', () => {
    const spy = spyOn(component.onSelected, 'emit').and.callThrough();
    component.clicked({});
    expect(spy).toHaveBeenCalled();
  });


  it('should return name when it is set', () => {
    const planet = { name: 'Marte' } as Planet;
    component.planet = planet;
    expect(component.name).toBe('Marte');
  });


  it('should return empty  string when it is not set', () => {
    const planet = { } as Planet;
    component.planet = planet;
    expect(component.name).toBe('');
  });


});
