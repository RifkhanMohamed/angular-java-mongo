import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from "./category.component";
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  }
];

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
    FormsModule
  ]
})
export class CategoryModule { }
