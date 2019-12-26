import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  url: string = 'http://34.205.129.232:8080/PBJCinema/reviews/';

  review: Review = new Review();

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.url);
  }

  getReviewById(idParam: number){
    return this.http.get<Review>(this.url + '/' + idParam).toPromise();
  }

  getReviewsByUserId(idParam: number) {
    return this.http.get<Review[]>('http://34.205.129.232:8080/PBJCinema/users/' + idParam + '/reviews').toPromise();
  }

  createReview(body) {
    // code
  }

  deleteReview(idParam) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.delete(this.url+idParam, httpOption);
  }
  
  editReview(reviewId, postTitle, postBody, movieTitle) {

    this.review.reviewId = reviewId;
    this.review.postTitle = postTitle;
    this.review.postBody = postBody;
    this.review.movieTitle = movieTitle;

    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');

    this.http.post(this.url+reviewId, this.review).subscribe(
    // this.http.post(this.url, this.review).subscribe(
      (response) => {
        console.log(response);
        return true;
      },
      (error) => console.log(error)
    );
    return true;
  }

}
