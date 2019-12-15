import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


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
