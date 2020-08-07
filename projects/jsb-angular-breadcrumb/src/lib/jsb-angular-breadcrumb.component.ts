import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'jsb-AngularBreadcrumb',
  template: `
    <ul class="breadcrumb" *ngIf="breadcrumbData?.length > 0">
      <li *ngFor="let item of breadcrumbData">
        <a [routerLink]="['item.url']">{{ item.label }}</a>
      </li>
    </ul>
  `,
  styleUrls: ['./JSBAngularBreadcrumb.component.scss'],
})
export class JSBAngularBreadcrumbComponent implements OnInit {
  static readonly ROUTE__LABEL = 'routebreadcrumb';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  breadcrumbData: IBreadcrumb[] = [];
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbData = this.getBreadcrumbs(this.activatedRoute.root);
        console.log(this.breadcrumbData);
      });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string = '/',
    breadcrumbs: IBreadcrumb[] = []
  ): IBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '') {
        url += `${routeURL}`;
      }

      const label =
        child.snapshot.data[JSBAngularBreadcrumbComponent.ROUTE__LABEL];
      if (label) {
        breadcrumbs.push({ label, url });
      }

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
interface IBreadcrumb {
  label: string;
  url: string;
}
