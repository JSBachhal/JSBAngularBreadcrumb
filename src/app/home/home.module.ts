import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { RouterModule } from '@angular/router';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  declarations: [HomeComponent, ProductdetailsComponent, ProductComponent],
  imports: [CommonModule, HomeRoutingModule, RouterModule],
})
export class HomeModule {}
