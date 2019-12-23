import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MovieTrailerComponent } from './components/movie-trailer/movie-trailer.component';
import { AuthService } from './services/auth-service/auth.service';
import { UserService } from './services/user-service/user.service';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { ManagerUserComponent } from './components/manager-user/manager-user.component';
import { ManagerUserDetailComponent } from './components/manager-user-detail/manager-user-detail.component';
import { ManagerReviewComponent } from './components/manager-review/manager-review.component';
import { UserReviewComponent } from './components/user-review/user-review.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserHomeComponent,
    UserDetailComponent,
    MovieComponent,
    MovieDetailComponent,
    AboutUsComponent,
    SignInComponent,
    SignUpComponent,
    MovieTrailerComponent,
    FavoritesComponent,
    ManagerHomeComponent,
    ManagerUserComponent,
    ManagerUserDetailComponent,
    ManagerReviewComponent,
    UserReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
