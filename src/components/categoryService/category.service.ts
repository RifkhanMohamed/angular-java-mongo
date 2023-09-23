import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  base_url="http://localhost:8010/";

  getProducts(name:any): Observable<any> {
    return this.http.get<any>(this.base_url+"category/"+name);
  }

  getCategories() : Observable<any> {
    return this.http.get<any>(this.base_url+"category/get");
  }
}
