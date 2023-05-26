import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLaptopComponent } from './registrar-laptop.component';

describe('RegistrarLaptopComponent', () => {
  let component: RegistrarLaptopComponent;
  let fixture: ComponentFixture<RegistrarLaptopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarLaptopComponent]
    });
    fixture = TestBed.createComponent(RegistrarLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
