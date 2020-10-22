import {Planet} from './planet.interface';

export interface PlanetApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Planet>;
}
