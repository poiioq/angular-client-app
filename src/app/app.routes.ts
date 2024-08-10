import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './api-data/api-data.component';
import { FeedbackListComponent } from './form-page/form-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-data', component: UserComponent },
  { path: 'form-page', component: FeedbackListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
