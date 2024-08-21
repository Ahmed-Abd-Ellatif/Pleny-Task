import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/layout/feature/services/products.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  //---------------------------------
  // LOGOUT
  //---------------------------------
  productCart = [];
  //---------------------------------
  // constructor
  //---------------------------------
  constructor(
    private _productsService: ProductsService,
    private _router: Router
  ) {}
  //---------------------------------
  // search Subject
  //---------------------------------
  search(value: any) {
    this._productsService.onSearchValue(value.target.value);
  }

  //---------------------------------
  // get Cart By User Id
  //---------------------------------
  getCartByUserId() {
    const id = Number(localStorage.getItem('userId'));
    this._productsService.getCartByUserId(id).subscribe((res) => {
      this.productCart = res.carts;
    });
  }
  //---------------------------------
  // LOGOUT
  //---------------------------------
  logout() {
    localStorage.clear();
    this._router.navigate(['/auth']);
  }
}
