import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductComponent } from '../product/product.component';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';

const routes: Routes = [
  {
    path: '',
    data: {
      routebreadcrumb: 'Home',
    },
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
    data: { routebreadcrumb: 'products' },
    children: [
      {
        path: 'details',
        component: ProductdetailsComponent,
        data: { routebreadcrumb: 'details' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
