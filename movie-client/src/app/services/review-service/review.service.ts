import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  review: Review = {
    reviewId: 0,
    movieId:0,
    userId:0,
    postTitle:" ",
    postBody: " ",

  };
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
  
  editReview(userid, postTitle,postBody) {
   this.review.userId=userid;
    this.review.postTitle=postTitle;
    this.review.postBody=postBody;
   


  let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');

this.http.post(this.url,this.review).subscribe(
  (response) => console.log(response),
  (error) => console.log(error)
);
return true;

createReview(body) {
    // code
  }

  deleteReview(idParam) {
    return this.http.delete<Review>(this.url + '/' + idParam).toPromise();
  }
}
