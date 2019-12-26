import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie
  trailerButtonPressed: boolean = false
  // @Input() movieId : string
  video: any
  constructor( private movieService: MovieService, private route: ActivatedRoute ) { }
  ngOnInit() {
    this.route.params.subscribe(param => {
      
      this.getMovieDetails(param['id']);
      this.getTrailer(param['id']);
    })
  }
  getMovieDetails(movieId){
    this.movieService.getMovie(movieId).subscribe(data => this.movie = data)
  }
  getTrailer(movieId){
    this.movieService.getTrailer(movieId).subscribe(data => this.video = data["results"])
  }
  addFavorite(movie : Movie){
    console.log(movie)
  }
  seeTrailer(){
    this.trailerButtonPressed = !this.trailerButtonPressed
  }

}
