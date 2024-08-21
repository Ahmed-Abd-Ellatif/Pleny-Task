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
export class NavbarComponent implements OnInit {
  constructor(
    private _productsService: ProductsService,
    private _router: Router
  ) {}

  search(value: any) {
    this._productsService.onSearchValue(value.target.value);
  }

  productCart = [];
  getCartByUserId() {
    const id = Number(localStorage.getItem('userId'));
    this._productsService.getCartByUserId(id).subscribe((res) => {
      this.productCart = res.carts;
    });
  }
  //---------------------------------
  //---------------------------------
  isLoggedin: boolean = false;
  ngOnInit(): void {
    if ('pleny-token' in localStorage) {
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
    this.getCartByUserId();
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/auth']);
  }
}
