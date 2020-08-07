import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JSBAngularBreadcrumbModule } from 'projects/jsb-angular-breadcrumb/src/public-api';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    JSBAngularBreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
