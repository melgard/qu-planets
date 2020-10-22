import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanetsListComponent} from './planets-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';
import {Planet} from '../../interfaces/planet.interface';
import * as dragDrop from '@angular/cdk/drag-drop';

describe('ListPlanetsComponent', () => {
  let component: PlanetsListComponent;
  let fixture: ComponentFixture<PlanetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetsListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call next filter event when call searchPlanet', () => {
    const spy = spyOn(component.filter, 'next');
    component.searchPlanet('test');
    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should call router navigateByUrl when call showDetails', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigateByUrl');
    const event: Planet = {url: '/test/'} as Planet;
    component.showDetails(event);
    expect(spy).toHaveBeenCalledWith(`/planets/detail/test`);
  });

  it('should call loadData when call pageEvent', () => {
    // @ts-ignore
    const spy = spyOn(component, 'loadData');
    component.pageEvent({ pageIndex: 5});
    expect(spy).toHaveBeenCalledWith(5 + 1 );
  });


  it('should return false if is loading', () => {
    component.planets = [];
    component.loading.next(true);
    // expect(component.planets.length).toBe(0);
    expect(component.noItems).toBeFalse();
  });

  it('should return true if is not loading and it has not items', () => {
    component.planets = [];
    component.loading.next(false);
    expect(component.planets.length).toBe(0);
    expect(component.noItems).toBeTrue();
  });

  it('should return false if is not loading but it has items', () => {
    const planet = {} as Planet;
    component.planets = [ planet ];
    component.loading.next(false);
    expect(component.planets.length).toBe(1);
    expect(component.noItems).toBeFalse();

  });

});
