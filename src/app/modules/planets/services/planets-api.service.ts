import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {PlanetApiResponse} from '../interfaces/planet-api-response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsApiService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/`;
  }

  loadData(page?: number, search: string = '') {
    const searchText = (!search) ? `` : `&search=${search}`;
    const pageText = (!page) ? `?search=${search}` : `?page=${page}${searchText}`;
    const url = (!pageText) ? `${this.baseUrl}` : `${this.baseUrl}${pageText}`;
    return this.http.get<PlanetApiResponse>(url);
  }

}

