import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  token: string = '';
  login: boolean = false;

  movie: Movie;
  video: any;

  constructor( private movieService: MovieService, private route: ActivatedRoute, private sanititizer: DomSanitizer, private router: Router ) { }
  ngOnInit() {
    this.token = sessionStorage.getItem('auth');

    if (this.token) {
      let tokenArr = this.token.split(':');
      this.login = !!tokenArr[0];
    } else {
      this.login = false;
    }

    this.route.params.subscribe(param => {
      this.getMovieDetails(param['id']);
      this.getTrailer(param['id']);
    })
  }

  getMovieDetails(movieId){
    this.movieService.getMovie(movieId).subscribe(data => this.movie = data);
  }

  getTrailer(movieId){
    this.movieService.getTrailer(movieId).subscribe(data => this.video = data["results"]);
  }

  addFavorite(movie: Movie){
    let userId = Number(sessionStorage.getItem('auth').split(':')[0]);
    this.movieService.addMovieToFav(movie, userId);
  }

  watch(){
    // code
  }

  getEmbedUrl(location) {
    return this.sanititizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/`+location);
  }

  back() {
    this.login ? this.router.navigate(['home']) : this.router.navigate(['']);
  }

  logout() {
    sessionStorage.clear();
    this.token = '';
    this.login = false;
  }

}
