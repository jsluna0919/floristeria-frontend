import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destinatarios } from './destinatarios';

describe('Destinatarios', () => {
  let component: Destinatarios;
  let fixture: ComponentFixture<Destinatarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destinatarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Destinatarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
