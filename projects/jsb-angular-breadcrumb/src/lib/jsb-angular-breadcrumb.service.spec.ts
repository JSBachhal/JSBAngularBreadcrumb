import { TestBed } from '@angular/core/testing';

import { JSBAngularBreadcrumbService } from './jsb-angular-breadcrumb.service';

describe('JSBAngularBreadcrumbService', () => {
  let service: JSBAngularBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSBAngularBreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
