import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLaptopSinempleadoComponent } from './registrar-laptop-sinempleado.component';

describe('RegistrarLaptopSinempleadoComponent', () => {
  let component: RegistrarLaptopSinempleadoComponent;
  let fixture: ComponentFixture<RegistrarLaptopSinempleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarLaptopSinempleadoComponent]
    });
    fixture = TestBed.createComponent(RegistrarLaptopSinempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
