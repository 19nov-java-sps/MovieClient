import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { ReviewService } from 'src/app/services/review-service/review.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  token: string = '';
  userId: number;

  movie: Movie = new Movie();
  video: any;
  reviews: Review[] = [];

  constructor( private movieService: MovieService, private reviewService: ReviewService, private route: ActivatedRoute, private sanititizer: DomSanitizer, private router: Router ) { }
  
  ngOnInit() {
    this.token = sessionStorage.getItem('auth');

    if (this.token) {
      let tokenArr = this.token.split(':');
      this.userId = Number(tokenArr[0]);
    } else {
      this.userId = null;
    }

    this.route.params.subscribe(param => {
      this.movie.id = param['id'];
      this.getMovieDetails(param['id']);
      this.getTrailer(param['id']);
      this.getMovieReviews();
    })
  }

  getMovieDetails(movieId){
    this.movieService.getMovie(movieId).subscribe(data => this.movie = data);
  }

  getTrailer(movieId){
    this.movieService.getTrailer(movieId).subscribe(data => this.video = data["results"]);
  }

  getMovieReviews() {
    this.reviewService.getReviewsByMovieId(this.movie.id);
  }

  addFavorite(movie: Movie){
    if (!this.userId) {
      alert('Please Login or Sign Up!')
    } else {
      this.movieService.addMovieToFav(movie, this.userId);
    }
  }

  watch(){
    if (!this.userId) {
      alert('Please Login or Sign Up!')
    } else {
      window.open('http://www.e-try.com/black.htm', '_blank');
    }
  }

  post() {
    if (!this.userId) {
      alert('Please Login or Sign Up!')
    } else {
      console.log(this.userId)
    }
  }

  getEmbedUrl(location) {
    return this.sanititizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/`+location);
  }

  back() {
    this.userId ? this.router.navigate(['home']) : this.router.navigate(['']);
  }

  logout() {
    sessionStorage.clear();
    this.token = '';
    this.userId = null;
  }

}
