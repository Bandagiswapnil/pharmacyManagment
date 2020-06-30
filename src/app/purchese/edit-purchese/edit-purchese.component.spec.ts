import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurcheseComponent } from './edit-purchese.component';

describe('EditPurcheseComponent', () => {
  let component: EditPurcheseComponent;
  let fixture: ComponentFixture<EditPurcheseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPurcheseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPurcheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
