import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', children: [] },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // { path: '', component: Home1Component, pathMatch: 'full' },
      // { path: 'home1', component: Home1Component },
      // { path: 'home2', component: Home2Component },
      // { path: ':id/:name', component: HomeDetailComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
