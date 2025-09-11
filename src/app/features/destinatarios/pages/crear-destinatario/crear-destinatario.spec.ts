import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDestinatario } from './crear-destinatario';

describe('CrearDestinatario', () => {
  let component: CrearDestinatario;
  let fixture: ComponentFixture<CrearDestinatario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearDestinatario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDestinatario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
