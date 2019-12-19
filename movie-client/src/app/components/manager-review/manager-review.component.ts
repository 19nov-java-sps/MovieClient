import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review-service/review.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-manager-review',
  templateUrl: './manager-review.component.html',
  styleUrls: ['./manager-review.component.css']
})
export class ManagerReviewComponent implements OnInit {

  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews()
      .subscribe((allReviews)=>{
        this.reviews = allReviews;
    });
  }

}
