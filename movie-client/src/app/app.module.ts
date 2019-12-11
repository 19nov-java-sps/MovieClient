import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
