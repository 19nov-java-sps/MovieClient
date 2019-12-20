import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review-service/review.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-manager-user-detail',
  templateUrl: './manager-user-detail.component.html',
  styleUrls: ['./manager-user-detail.component.css']
})
export class ManagerUserDetailComponent implements OnInit {

  currentUser: User = new User();
  reviews: Review[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService, private reviewService: ReviewService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.currentUser.userId = param['id'];

      this.getUser(this.currentUser.userId);
      this.getUserReviews();
    })
    
  }

  getUser(idParam: number) {
    this.userService.getUserById(idParam)
      .then((response)=>{
        this.currentUser = response;
      })
      .catch((e)=>{
        console.warn(e);
      })
  }

  getUserReviews() {
    // this.reviewService.getReviewsByUserId(this.currentUser.userId)
    //   .then((response)=>{
    //     this.reviews = response;
    //   })
    //   .catch((e)=>{
    //     console.warn(e);
    //   });
  }

  delete(reviewId) {
    this.reviewService.deleteReview(reviewId);

    this.getUserReviews();
  }

}
