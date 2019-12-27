import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service"
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  allMovies: Movie[] = [];
  movies: Movie[] = [];

  totalPage: number = 1;
  curPage: number = 1;

  SearchCondition: string = '';

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies(): void {
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.allMovies = (data["results"]);
      this.totalPage = Math.ceil(this.allMovies.length / 5);
      this.movies = this.allMovies.slice(this.curPage * 5 - 5, this.curPage * 5);
    });
  }

  nextPage() {
    this.curPage++;
    this.movies = this.allMovies.slice(this.curPage * 5 - 5, this.curPage * 5);
  }

  prevPage() {
    this.curPage--;
    this.movies = this.allMovies.slice(this.curPage * 5 - 5, this.curPage * 5);
  }

  search() {
    if (this.SearchCondition === '') {
      this.getUpcomingMovies();
    } else {
      this.movieService.searchMovie(this.SearchCondition).subscribe(data => {
        this.allMovies = (data["results"]);
        this.totalPage = Math.ceil(this.allMovies.length / 5);
        this.movies = this.allMovies.slice(this.curPage * 5 - 5, this.curPage * 5);
      });
    }
  }

  back() {
    this.SearchCondition = '';
    this.getUpcomingMovies();
  }
}
