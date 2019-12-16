import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  url: string = 'http://localhost:8080/PBJCinema/reviews';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.url);
  }

  getReviewById(idParam: number){
    return this.http.get<Review>(this.url + '/' + idParam).toPromise();
  }

  getReviewsByUserId(idParam: number) {
    // return this.http.get<Review>(this.url + '/' + idParam).toPromise();
  }
}