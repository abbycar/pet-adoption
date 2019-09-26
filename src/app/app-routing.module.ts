import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewDogComponent } from './new-dog/new-dog.component';
import { DetailsComponent } from './details/details.component';
import { DogsComponent } from './dogs/dogs.component';

const routes: Routes = [
  { path: '', component: DogsComponent},
  { path: 'new-dog', component: NewDogComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'login', component: LoginComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
