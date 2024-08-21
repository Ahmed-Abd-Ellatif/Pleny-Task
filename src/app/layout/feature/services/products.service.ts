import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GetAllCategories } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  searchValue = new Subject<String>();
  constructor(private _http: HttpClient) {}

  onSearchValue(searchvalue: string) {
    this.searchValue.next(searchvalue);
  }

  // -----------------------------------
  //  Get All Categories
  // -----------------------------------
  getAllCategories(): Observable<GetAllCategories> {
    return this._http.get<GetAllCategories>(
      'https://dummyjson.com/products/categories'
    );
  }

  // -----------------------------------
  //  Get All products
  // -----------------------------------
  getAllProducts(skip?: number): Observable<any> {
    return this._http.get(`https://dummyjson.com/products?skip=${skip ?? 0}`);
  }
  // -----------------------------------
  // Get products by a category
  // -----------------------------------
  getProductsByCategory(url: string): Observable<any> {
    return this._http.get(url);
  }

  // -----------------------------------
  // Get products by Search Value
  // -----------------------------------
  getProductsBySearchValue(searchValue: string): Observable<any> {
    return this._http.get(
      `https://dummyjson.com/products/search?q=${searchValue}`
    );
  }

  // -----------------------------------
  // Add To Cart
  // -----------------------------------
  addtoCart(obj: any): Observable<any> {
    return this._http.post(`https://dummyjson.com/carts/add`, obj);
  }

  // -----------------------------------
  // Get Cart By User Id
  // -----------------------------------
  getCartByUserId(id: number): Observable<any> {
    return this._http.get(`https://dummyjson.com/carts/user/${id}`);
  }
}
