import { TestBed } from '@angular/core/testing';

import { PlanetsApiService } from './planets-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Test} from 'tslint';
import {HttpClient} from '@angular/common/http';

describe('PlanetsApiService', () => {
  let service: PlanetsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PlanetsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http get without search params', () => {
    // @ts-ignore
    service.baseUrl = 'testing/';
    const http = TestBed.inject(HttpClient);
    const spy = spyOn(http, 'get');
    service.loadData(null);
    expect(spy).toHaveBeenCalledWith('testing/?search=');
  });

  it('should call http get with search params', () => {
    // @ts-ignore
    service.baseUrl = 'testing/';
    const http = TestBed.inject(HttpClient);
    const spy = spyOn(http, 'get');
    service.loadData(null, 'check');
    expect(spy).toHaveBeenCalledWith('testing/?search=check');
  });

  it('should call http get with page', () => {
    // @ts-ignore
    service.baseUrl = 'testing/';
    const http = TestBed.inject(HttpClient);
    const spy = spyOn(http, 'get');
    service.loadData(5);
    expect(spy).toHaveBeenCalledWith('testing/?page=5');
  });

  it('should call http get without page', () => {
    // @ts-ignore
    service.baseUrl = 'testing/';
    const http = TestBed.inject(HttpClient);
    const spy = spyOn(http, 'get');
    service.loadData();
    expect(spy).toHaveBeenCalledWith('testing/?search=');
  });

});
