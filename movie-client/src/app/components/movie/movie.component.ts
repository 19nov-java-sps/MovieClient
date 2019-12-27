import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service"
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];
  SearchCondition: string = '';

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies(): void {
    this.movieService.getUpcomingMovies().subscribe(data => this.movies = (data["results"]));
 
  }

  search() {
    if (this.SearchCondition === '') {
      this.getUpcomingMovies();
    } else {
      this.movieService.searchMovie(this.SearchCondition).subscribe(data => this.movies = (data["results"]));
    }
  }
}
