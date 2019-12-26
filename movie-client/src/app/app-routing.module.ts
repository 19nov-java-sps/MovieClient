import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { ManagerUserComponent } from './components/manager-user/manager-user.component';
import { ManagerUserDetailComponent } from './components/manager-user-detail/manager-user-detail.component';
import { ManagerReviewComponent } from './components/manager-review/manager-review.component';
import { UserReviewComponent } from './components/user-review/user-review.component';
import { MovieTrailerComponent } from './components/movie-trailer/movie-trailer.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [{
  path: '',
  component: MovieTrailerComponent
}, {
  path: 'login',
  component: SignInComponent
}, {
  path: 'sign-up',
  component: SignUpComponent
}, {
  path: 'home',
  component: UserHomeComponent,
  children: [{
    path: 'profile',
    component: UserDetailComponent
    }, {
    path: 'favorites',
    component: FavoritesComponent
  }, {
    path: 'reviews',
    component: UserReviewComponent
  }, {
    path: '',
    component: MovieComponent
  }]}, {
  path: 'manager',
  component: ManagerHomeComponent,
  children: [{
    path: 'users',
    component: ManagerUserComponent
    }, {
    path: 'reviews',
    component: ManagerReviewComponent
  }, {
    path: 'users/:id',
    component: ManagerUserDetailComponent
  }]}, {
    path: 'movies/:id',
    component: MovieDetailComponent
  }, {
  path: '**',
  pathMatch: 'full',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
