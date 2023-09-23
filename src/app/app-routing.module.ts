import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./../components/home/home.module').then(e => e.HomeModule)},
  { path: 'category', loadChildren: () => import('./../components/category/category.module').then(e => e.CategoryModule)},
  { path: '', loadChildren: () => import('./../components/home/home.module').then(e => e.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
