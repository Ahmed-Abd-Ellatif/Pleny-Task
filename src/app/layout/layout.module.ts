import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
