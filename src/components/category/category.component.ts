import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../categoryService/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService:CategoryService){}
  loading = true;
  name="Books";
  ngOnInit(): void {
    // this.getProducts();
    this.getCategory();
  }
  products:any;
  categories:any;
  selectedCategory:any;


  getProducts(name:string){
    this.loading = true;
    console.log("hi");
    
    this.categoryService.getProducts(name).subscribe(
      (res)=>{
        this.products=res;
        this.loading = false;
      }
    )
    
  }

  getCategory(){
    this.categoryService.getCategories().subscribe(
      (res)=>{
        this.categories=res;
        this.loading=false;
      }
    )
  }

}
