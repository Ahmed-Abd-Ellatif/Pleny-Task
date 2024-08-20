import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  // -----------------------------------
  //  Get All Categories
  // -----------------------------------
  getAllCategories(): Observable<any> {
    return this._http.get('https://dummyjson.com/products/categories');
  }

  // 'https://dummyjson.com/products'
  getAllProducts(): Observable<any> {
    return this._http.get('https://dummyjson.com/products');
  }
}
