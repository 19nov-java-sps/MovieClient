import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review-service/review.service';

@Component({
  selector: 'app-manager-review-detail',
  templateUrl: './manager-review-detail.component.html',
  styleUrls: ['./manager-review-detail.component.css']
})
export class ManagerReviewDetailComponent implements OnInit {

  currentReview: Review = new Review();

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.currentReview.reviewId = param['id'];
      this.getReview(this.currentReview.reviewId);
    })
  }

  getReview(idParam) {
    this.reviewService.getReviewById(idParam)
      .then((response)=>{
        this.currentReview = response;
      })
      .catch((e)=>{
        console.warn(e);
      })
  }

  deleteReview() {
    this.reviewService.deleteReview(this.currentReview.reviewId);
  }
}
