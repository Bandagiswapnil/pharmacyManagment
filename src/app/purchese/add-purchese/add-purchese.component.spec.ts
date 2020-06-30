import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurcheseComponent } from './add-purchese.component';

describe('AddPurcheseComponent', () => {
  let component: AddPurcheseComponent;
  let fixture: ComponentFixture<AddPurcheseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPurcheseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPurcheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
