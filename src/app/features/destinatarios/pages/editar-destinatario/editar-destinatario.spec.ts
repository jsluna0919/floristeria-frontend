import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDestinatario } from './editar-destinatario';

describe('EditarDestinatario', () => {
  let component: EditarDestinatario;
  let fixture: ComponentFixture<EditarDestinatario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDestinatario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDestinatario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
