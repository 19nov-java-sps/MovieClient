import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review-service/review.service';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {

  reviews: Review[] = [];

  currentReview: Review = new Review();
  currentReviewId: number;

  oldTitle: string = '';
  oldBody: string = '';

  enableEdit: boolean = false;
  validate: boolean = true;
  noChange: boolean = false;

  constructor(private router: Router, private reviewService: ReviewService) { }

  ngOnInit() {
    this.getUserReviews(2);
  }

  edit(reviewId) {
    if (!this.currentReviewId) {
      this.currentReviewId = reviewId;
    }
    
    if (this.currentReviewId === reviewId) {
      this.enableEdit = !this.enableEdit;
    }

    if (this.enableEdit) {
      this.currentReviewId = reviewId;
      this.getReview(this.currentReviewId);

    } else {
      this.currentReviewId = null;
    }
    
  }

  getUserReviews(userId) {
    // this.reviewService.getReviewsByUserId(userId)
    //   .then((response)=>{
    //     this.reviews = response;
    //   })
    //   .catch((e)=>{
    //     console.warn(e);
    //   });

    let review1 = new Review();
    review1.reviewId = 1;
    review1.userId = userId;
    review1.movieId = 1;
    review1.postTitle = '111';
    review1.postBody = 'body 111';

    let review2 = new Review();
    review2.reviewId = 2;
    review2.userId = userId;
    review2.movieId = 1;
    review2.postTitle = '222';
    review2.postBody = 'body 222';

    let review3 = new Review();
    review3.reviewId = 3;
    review3.userId = userId;
    review3.movieId = 1;
    review3.postTitle = '333';
    review3.postBody = 'body 333';

    this.reviews = [review1, review2, review3];
  }

  getReview(reviewId: number) {
    // this.reviewService.getReviewById(reviewId)
    //   .then((response)=>{
    //     this.currentReview = response;
    //   })
    //   .catch((e)=>{
    //     console.warn(e);
    //   });

    this.currentReview = this.reviews[reviewId - 1];
    
    this.oldTitle = this.currentReview.postTitle;
    this.oldBody = this.currentReview.postBody;
  }

  editReview() {
    if (this.currentReview.postTitle === this.oldTitle && this.currentReview.postBody === this.oldBody) {
      this.noChange = true;
      setTimeout(() => this.noChange = false, 3000);

    } else if (this.currentReview.postTitle.replace(/\s/g, '').length > 0 && this.currentReview.postBody.replace(/\s/g, '').length > 0) {
      // this.reviewService.editReview(this.currentReviewId, this.currentReview.postTitle.trim(), this.currentReview.postBody.trim());

      this.enableEdit = false;
      this.currentReviewId = null;
    } else {
      this.validate = false;
      setTimeout(() => this.validate = true, 3000);
    }
  }

  delete(reviewId) {
    // this.reviewService.deleteReview(reviewId);

    this.enableEdit = false;
    this.currentReviewId = null;

    this.getUserReviews(this.currentReviewId);
  }

  cancel() {
    this.enableEdit = false;
    this.currentReviewId = null;

    this.getUserReviews(this.currentReviewId);
  }

  home() {
    this.router.navigate(['home']);
  }

}
