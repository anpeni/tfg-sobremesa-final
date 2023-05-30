import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDispositivosComponent } from './ver-dispositivos.component';

describe('VerDispositivosComponent', () => {
  let component: VerDispositivosComponent;
  let fixture: ComponentFixture<VerDispositivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerDispositivosComponent]
    });
    fixture = TestBed.createComponent(VerDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
