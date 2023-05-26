import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSmartphoneSinempleadoComponent } from './registrar-smartphone-sinempleado.component';

describe('RegistrarSmartphoneSinempleadoComponent', () => {
  let component: RegistrarSmartphoneSinempleadoComponent;
  let fixture: ComponentFixture<RegistrarSmartphoneSinempleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSmartphoneSinempleadoComponent]
    });
    fixture = TestBed.createComponent(RegistrarSmartphoneSinempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
