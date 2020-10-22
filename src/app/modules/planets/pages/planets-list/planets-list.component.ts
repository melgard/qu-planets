import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanetsApiService} from '../../services/planets-api.service';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Planet} from '../../interfaces/planet.interface';
import {Router} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {PlanetApiResponse} from '../../interfaces/planet-api-response';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit, OnDestroy {

  public count: number;
  public itemsPerPage: number;
  public planets: Array<Planet>;
  public filter: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  private subscrptions: Array<Subscription> = [];

  constructor(private planetService: PlanetsApiService,
              private router: Router) {
    this.itemsPerPage = 10;
  }

  get noItems(): boolean {
    return ((!this.loading.value) && this.planets.length === 0);
  }

  get loading$(): Observable<boolean> {
    return this.loading.asObservable();
  }

  ngOnInit(): void {
    this.loadData(null);
  }

  ngOnDestroy() {
    this.subscrptions.forEach(s => s.unsubscribe());
  }

  public searchPlanet(event: string) {
    this.filter.next(event);
    this.loadData(null);
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.planets, event.previousIndex, event.currentIndex);
  }

  showDetails(event: Planet) {
    const id = event.url.substring(0, event.url.length - 1).split('/').pop();
    this.router.navigateByUrl(`/planets/detail/${id}`);
  }

  public pageEvent(e) {
    this.loadData(e.pageIndex + 1);
  }

  private loadData(page) {
    this.planets = [];
    this.count = 0;
    this.loading.next(true);
    const sub: Subscription = this.planetService.loadData(page, this.filter.value).pipe(
      map((response: PlanetApiResponse) => {
        this.count = response.count;
        return response.results;
      }),
      tap(() => this.loading.next(false))
    ).subscribe(response => this.planets = response);
    this.subscrptions.push(sub);
  }

}
