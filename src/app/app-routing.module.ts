import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewDogComponent } from './new-dog/new-dog.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'new-dog', component: NewDogComponent},
  { path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
