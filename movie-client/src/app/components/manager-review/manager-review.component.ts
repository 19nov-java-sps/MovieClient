import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review-service/review.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-manager-review',
  templateUrl: './manager-review.component.html',
  styleUrls: ['./manager-review.component.css']
})
export class ManagerReviewComponent implements OnInit {

  allReviews: Review[] = [];
  reviews: Review[] = [];
  totalPage: number = 1;
  curPage: number = 1;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getAllReviews();
  }

  getAllReviews() {
    this.reviewService.getReviews()
      .subscribe((allReviews)=>{
        this.allReviews = allReviews;
        this.totalPage = Math.ceil(this.allReviews.length / 7);
        this.reviews = this.allReviews.slice(this.curPage * 7 - 7, this.curPage * 7);
    });
  }

  delete(reviewId) {
    if (window.confirm("Delete the review?")) {
      this.reviewService.deleteReview(reviewId);

      // this.getAllReviews();
    }
  }

  prevPage() {
    this.curPage--;
    this.reviews = this.allReviews.slice(this.curPage * 7 - 7, this.curPage * 7);
  }

  nextPage() {
    this.curPage++;
    this.reviews = this.allReviews.slice(this.curPage * 7 - 7, this.curPage * 7);
  }

}
