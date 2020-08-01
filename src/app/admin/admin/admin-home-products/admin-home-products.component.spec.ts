import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeProductsComponent } from './admin-home-products.component';

describe('AdminHomeProductsComponent', () => {
  let component: AdminHomeProductsComponent;
  let fixture: ComponentFixture<AdminHomeProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
