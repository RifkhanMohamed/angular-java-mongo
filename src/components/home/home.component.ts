import { Component, OnInit } from '@angular/core';
import { HomeService } from "./../homeService/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService:HomeService){}
  loading = true;
  // responseTime: number | undefined;
  ngOnInit(): void {
      this.getProducts();
      
  }
  products:any;

  getProducts(){
    // const startTime = new Date().getTime();
    this.homeService.getProducts().subscribe(
      (res)=>{
        console.log(res);
        this.products=res;
        // const endTime = new Date().getTime();
        // this.responseTime = endTime - startTime;
        this.loading = false;
      }
    )
    
  }
}
