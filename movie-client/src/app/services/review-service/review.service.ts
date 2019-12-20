import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  url: string = 'http://34.205.129.232:8080/PBJCinema/reviews';

  review: Review = new Review();

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.url);
  }

  getReviewById(idParam: number){
    return this.http.get<Review>(this.url + '/' + idParam).toPromise();
  }

  getReviewsByUserId(idParam: number) {
    console.log(idParam)
    return this.http.get<Review[]>('http://34.205.129.232:8080/PBJCinemausers/' + idParam + '/reviews').toPromise();
  }

  createReview(body) {
    // code
  }

  deleteReview(idParam) {
    return this.http.delete<Review>(this.url + '/' + idParam).toPromise();
  }
  
  editReview(reviewId, postTitle,postBody) {

    this.review.reviewId = reviewId;
    this.review.postTitle = postTitle;
    this.review.postBody = postBody;

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.url, this.review).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    return true;
  }

}
