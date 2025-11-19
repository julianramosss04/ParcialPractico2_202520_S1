import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  /** URL base indicada e*/
  private apiUrl: string = 'http://157.253.205.147:8080/api/movies';

  constructor(private http: HttpClient) {}

  /** consulta el listado de movies */
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  /** consulta el detalle de una movie por id */
  getMovieDetail(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
}
