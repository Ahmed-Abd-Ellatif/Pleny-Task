import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavbarComponent,
    NgxPaginationModule,
  ],
})
export class ProductsModule {}
