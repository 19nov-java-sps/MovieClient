import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../models/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "https://api.themoviedb.org/3/movie/upcoming?api_key=ab07b88dc5197b7c48e8395f38ec4f8e";
  singleMovieUrl: string = "https://api.themoviedb.org/3/movie/";
  api_key : string = "?api_key=ab07b88dc5197b7c48e8395f38ec4f8e";

  constructor(private http: HttpClient) { }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getMovie(movieId : string): Observable<Movie> {
    console.log(`${this.singleMovieUrl}${movieId}${this.api_key}`);
    return this.http.get<Movie>(`${this.singleMovieUrl}${movieId}${this.api_key}`);
  }

  getTrailer(movieId : string): Observable<any> {
    return this.http.get<any>(`${this.singleMovieUrl}${movieId}/videos${this.api_key}`);
  }
}
