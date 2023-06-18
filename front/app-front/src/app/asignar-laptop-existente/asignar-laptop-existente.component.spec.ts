import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarLaptopExistenteComponent } from './asignar-laptop-existente.component';

describe('AsignarLaptopExistenteComponent', () => {
  let component: AsignarLaptopExistenteComponent;
  let fixture: ComponentFixture<AsignarLaptopExistenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarLaptopExistenteComponent]
    });
    fixture = TestBed.createComponent(AsignarLaptopExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
