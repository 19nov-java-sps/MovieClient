import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review-service/review.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-manager-user-detail',
  templateUrl: './manager-user-detail.component.html',
  styleUrls: ['./manager-user-detail.component.css']
})
export class ManagerUserDetailComponent implements OnInit {

  currentUser: User = new User();

  allReviews: Review[] = [];
  reviews: Review[] = [];

  totalPage: number = 1;
  curPage: number = 1;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private reviewService: ReviewService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('auth')) {
      this.router.navigate(['']);
    }

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
    this.reviewService.getReviewsByUserId(this.currentUser.userId)
      .then((response)=>{
        this.allReviews = response;
        this.totalPage = Math.ceil(this.allReviews.length / 7);
        this.reviews = this.allReviews.slice(this.curPage * 7 - 7, this.curPage * 7);
      })
      .catch((e)=>{
        console.warn(e);
      });
  }

  prevPage() {
    this.curPage--;
    this.reviews = this.allReviews.slice(this.curPage * 7 - 7, this.curPage * 7);
  }

  nextPage() {
    this.curPage++;
    this.reviews = this.allReviews.slice(this.curPage * 7 - 7, this.curPage * 7);
  }

  delete(reviewId) {
    this.reviewService.deleteReview(reviewId);

    this.getUserReviews();
  }

  ban() {
    console.log(this.currentUser.userId);
  }

}
