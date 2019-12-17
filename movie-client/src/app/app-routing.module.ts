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
import { ManagerReviewDetailComponent } from './components/manager-review-detail/manager-review-detail.component';
import { UserReviewComponent } from './components/user-review/user-review.component';

const routes: Routes = [{
  path: 'login',
  component: SignInComponent
}, {
  path: 'home',
  component: UserHomeComponent
}, {
  path: 'sign-up',
  component: SignUpComponent
}, {
  path: 'user/profile',
  component: UserDetailComponent
}, {
  path: 'user/favorites',
  component: FavoritesComponent
},  {
  path: 'user/reviews',
  component: UserReviewComponent
},  {
  path: 'manager',
  component: ManagerHomeComponent,
  children: [{
    path: 'users',
    component: ManagerUserComponent
    },{
    path: 'reviews',
    component: ManagerReviewComponent
  }]}, {
  path: 'manager/users/:id',
  component: ManagerUserDetailComponent
}, {
  path: 'manager/reviews/:id',
  component: ManagerReviewDetailComponent
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
