import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDestinatarios } from './listar-destinatarios';

describe('ListarDestinatarios', () => {
  let component: ListarDestinatarios;
  let fixture: ComponentFixture<ListarDestinatarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDestinatarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDestinatarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
