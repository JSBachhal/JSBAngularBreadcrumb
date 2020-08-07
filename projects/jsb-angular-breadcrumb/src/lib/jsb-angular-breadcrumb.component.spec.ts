import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSBAngularBreadcrumbComponent } from './jsb-angular-breadcrumb.component';

describe('JSBAngularBreadcrumbComponent', () => {
  let component: JSBAngularBreadcrumbComponent;
  let fixture: ComponentFixture<JSBAngularBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSBAngularBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSBAngularBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
