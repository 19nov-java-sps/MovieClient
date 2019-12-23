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

  userId: number;
  reviews: Review[] = [];

  currentReviewIndex: number = null;
  currentReviewId: number = null;

  oldTitle: string = '';
  oldBody: string = '';

  enableEdit: boolean = false;
  validate: boolean = true;
  noChange: boolean = false;

  constructor(private router: Router, private reviewService: ReviewService) { }

  ngOnInit() {
    this.userId = Number(sessionStorage.getItem('auth').split(':')[0]);
    this.getUserReviews(this.userId);
  }

  edit(reviewId) {
  
    if (!this.currentReviewId) {
      this.currentReviewId = reviewId;
    }
    
    if (this.currentReviewId === reviewId) {
      if (this.enableEdit === true) {
        this.reviews[this.currentReviewIndex].postTitle = this.oldTitle;
        this.reviews[this.currentReviewIndex].postBody = this.oldBody;
      }
      this.enableEdit = !this.enableEdit;
    }

    if (this.enableEdit) {
      if (this.currentReviewIndex !== null) {
        this.reviews[this.currentReviewIndex].postTitle = this.oldTitle;
        this.reviews[this.currentReviewIndex].postBody = this.oldBody;
      }

      this.currentReviewId = reviewId;
      this.getReview(this.currentReviewId);

    } else {
      this.currentReviewId = null;
    }
    
  }

  getUserReviews(userId) {
    this.reviewService.getReviewsByUserId(userId)
      .then((response)=>{
        this.reviews = response;
      })
      .catch((e)=>{
        console.warn(e);
      });
  }

  getReview(reviewId: number) {

    this.currentReviewIndex = this.reviews.findIndex(review => review.reviewId === reviewId);

    this.oldTitle = this.reviews[this.currentReviewIndex].postTitle;
    this.oldBody = this.reviews[this.currentReviewIndex].postBody;
  }

  editReview() {
    if (this.reviews[this.currentReviewIndex].postTitle === this.oldTitle && this.reviews[this.currentReviewIndex].postBody === this.oldBody) {
      this.noChange = true;
      setTimeout(() => this.noChange = false, 3000);

    } else if (this.reviews[this.currentReviewIndex].postTitle.replace(/\s/g, '').length > 0 && this.reviews[this.currentReviewIndex].postBody.replace(/\s/g, '').length > 0) {
      if (this.reviewService.editReview(this.currentReviewId, this.reviews[this.currentReviewIndex].postTitle.trim(), this.reviews[this.currentReviewIndex].postBody.trim())) {
        this.enableEdit = false;
        this.currentReviewId = null;
        this.currentReviewIndex = null;

        // this.getUserReviews(this.userId);
      } else {
        console.log('Server Error')
      }
      
    } else {
      this.validate = false;
      setTimeout(() => this.validate = true, 3000);
    }
  }

  delete(reviewId) {
    if (window.confirm("Do you really want to delete the review?")) { 
      
      this.reviewService.deleteReview(reviewId);
  
      this.getUserReviews(this.userId);
    }
  }

  cancel() {
    this.enableEdit = false;
    this.currentReviewId = null;

    this.reviews[this.currentReviewIndex].postTitle = this.oldTitle;
    this.reviews[this.currentReviewIndex].postBody = this.oldBody;
  }

  home() {
    this.router.navigate(['home']);
  }

}
