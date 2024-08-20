import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _productsService: ProductsService) {}
  allCategories: any[] = [];
  allProducts: any[] = [];
  getAllCategories() {
    this._productsService.getAllCategories().subscribe((res) => {
      this.allCategories = res;
    });
  }
  getAllProducts() {
    this._productsService.getAllProducts().subscribe((res) => {
      this.allProducts = res.products;
    });
  }
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }
}
