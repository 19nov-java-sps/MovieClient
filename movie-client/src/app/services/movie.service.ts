import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../models/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "https://api.themoviedb.org/3/movie/upcoming?api_key=ab07b88dc5197b7c48e8395f38ec4f8e"

  constructor(private http: HttpClient) { }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl)
  }
}
