import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLaptopFiltradaComponent } from './lista-laptop-filtrada.component';

describe('ListaLaptopFiltradaComponent', () => {
  let component: ListaLaptopFiltradaComponent;
  let fixture: ComponentFixture<ListaLaptopFiltradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLaptopFiltradaComponent]
    });
    fixture = TestBed.createComponent(ListaLaptopFiltradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
