import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSmartphoneComponent } from './registrar-smartphone.component';

describe('RegistrarSmartphoneComponent', () => {
  let component: RegistrarSmartphoneComponent;
  let fixture: ComponentFixture<RegistrarSmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSmartphoneComponent]
    });
    fixture = TestBed.createComponent(RegistrarSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
