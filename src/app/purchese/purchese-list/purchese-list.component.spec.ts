import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcheseListComponent } from './purchese-list.component';

describe('PurcheseListComponent', () => {
  let component: PurcheseListComponent;
  let fixture: ComponentFixture<PurcheseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurcheseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcheseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
