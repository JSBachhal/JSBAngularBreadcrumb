import { NgModule } from '@angular/core';
import { JSBAngularBreadcrumbComponent } from './jsb-angular-breadcrumb.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [JSBAngularBreadcrumbComponent],
  imports: [CommonModule, RouterModule],
  exports: [JSBAngularBreadcrumbComponent],
})
export class JSBAngularBreadcrumbModule {}
