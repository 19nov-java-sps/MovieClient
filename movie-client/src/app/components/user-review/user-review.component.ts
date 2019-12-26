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
  allReviews: Review[] = [];
  totalPage: number = 1;
  curPage: number = 1;

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

  getUserReviews(userId) {
    this.reviewService.getReviewsByUserId(userId)
      .then((response)=>{
        this.allReviews = response;
        this.totalPage = Math.ceil(this.allReviews.length / 5);
        this.reviews = this.allReviews.slice(this.curPage * 5 - 5, this.curPage * 5);
      })
      .catch((e)=>{
        console.warn(e);
      });
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
      if (this.reviewService.editReview(this.currentReviewId, this.reviews[this.currentReviewIndex].postTitle.trim(), this.reviews[this.currentReviewIndex].postBody.trim(), this.reviews[this.currentReviewIndex].movieTitle)) {
        this.enableEdit = false;
        this.currentReviewId = null;
        this.currentReviewIndex = null;

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
      this.reviewService.deleteReview(reviewId)
      .subscribe((result) => {
        console.log(result);
        this.getUserReviews(this.userId);
      });
    }
  }

  cancel() {
    this.enableEdit = false;
    this.currentReviewId = null;

    this.reviews[this.currentReviewIndex].postTitle = this.oldTitle;
    this.reviews[this.currentReviewIndex].postBody = this.oldBody;
  }

  prevPage() {
    this.curPage--;
    this.reviews = this.allReviews.slice(this.curPage * 5 - 5, this.curPage * 5);
  }

  nextPage() {
    this.curPage++;
    this.reviews = this.allReviews.slice(this.curPage * 5 - 5, this.curPage * 5);
  }

  home() {
    this.router.navigate(['home']);
  }

}
