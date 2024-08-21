import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, DoCheck {
  // --------------------------------
  // VALUES
  // --------------------------------
  allCategories: any[] = [];
  allProducts: any[] = [];
  products: any[] = [];
  p: number = 1;
  // --------------------------------
  // CONSTRUCTOR
  // --------------------------------
  constructor(private _productsService: ProductsService) {}
  // --------------------------------
  // get All Categories
  // --------------------------------
  getAllCategories() {
    this._productsService.getAllCategories().subscribe((res) => {
      this.allCategories = res;
    });
  }
  // --------------------------------
  // get All Products
  // --------------------------------
  pageSize!: number;
  total!: number;
  getAllProducts(skip?: number) {
    this._productsService.getAllProducts(skip).subscribe((res) => {
      this.allProducts = res.products;
      this.total = res.total;
      this.pageSize = res.limit;
    });
  }
  pageChanged(value: any) {
    this.p = value;
    const skip = (value - 1) * 30;

    this.getAllProducts(skip);
  }
  // --------------------------------
  //FILTER BY CATEGORY LIST
  // --------------------------------

  filterName: string = '';
  onCategoryList(url: string, name?: string) {
    this.filterName = name!;
    this._productsService.getProductsByCategory(url).subscribe({
      next: (res) => {
        this.allProducts = res.products;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // --------------------------------
  //FILTER BY SEARCH VALUE
  // --------------------------------
  filterBySearchValue() {
    this._productsService.searchValue.subscribe((res: any) => {
      this.filterName = res;
      this._productsService
        .getProductsBySearchValue(res)

        .subscribe((res) => {
          this.allProducts = res.products;
        });
    });
  }
  // --------------------------------
  // ADD TO CART
  // --------------------------------
  addToCart(id: any) {
    this.products.push({ id: id, quantity: 1 });
    const obj = {
      userId: Number(localStorage.getItem('userId')),
      products: this.products,
    };
    this._productsService.addtoCart(obj).subscribe({
      next: (res) => {
        this.products = [];
      },
    });
  }
  // --------------------------------
  //ONINIT
  // --------------------------------
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }
  // --------------------------------
  //ONDOCHECK
  // --------------------------------
  ngDoCheck(): void {
    this.filterBySearchValue();
  }
}
