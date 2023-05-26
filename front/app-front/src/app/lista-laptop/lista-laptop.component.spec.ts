import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLaptopComponent } from './lista-laptop.component';

describe('ListaLaptopComponent', () => {
  let component: ListaLaptopComponent;
  let fixture: ComponentFixture<ListaLaptopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLaptopComponent]
    });
    fixture = TestBed.createComponent(ListaLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
