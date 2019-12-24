import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service"
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[]

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.getUpcomingMovies()
    console.log(this.movies)
  }

  getUpcomingMovies(): void {
    this.movieService.getUpcomingMovies().subscribe(data => this.movies = (data["results"]))
 
  }
  
  moreInfo(movie: Movie){
    console.log("movie is clicked")
    console.log(movie)

  }
}
