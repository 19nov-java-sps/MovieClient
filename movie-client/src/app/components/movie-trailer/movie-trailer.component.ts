import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css']
})
export class MovieTrailerComponent implements OnInit {

  token: string = '';
  login: boolean = false;
  manager: boolean = false;
  
  movies: Movie[] = [];
  ramdomMovie: number = Math.floor(Math.random() * 10); 

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.token = sessionStorage.getItem('auth');

    if (this.token) {
      let tokenArr = this.token.split(':');

      this.login = !!tokenArr[0];
      this.manager = tokenArr[1] === 'true';
    } else {
      this.login = false;
      this.manager = false;
    }

    this.getUpcomingMovies();
  }

  logout() {
    sessionStorage.clear();
    this.token = '';
    this.login = false;
    this.manager = false;
  }

  getUpcomingMovies(): void {
    this.movieService.getUpcomingMovies().subscribe(data => this.movies = (data["results"]));
  }

}
