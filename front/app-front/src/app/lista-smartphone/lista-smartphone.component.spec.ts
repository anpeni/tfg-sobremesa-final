import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSmartphoneComponent } from './lista-smartphone.component';

describe('ListaSmartphoneComponent', () => {
  let component: ListaSmartphoneComponent;
  let fixture: ComponentFixture<ListaSmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSmartphoneComponent]
    });
    fixture = TestBed.createComponent(ListaSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
