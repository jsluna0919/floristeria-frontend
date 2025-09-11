import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArreglos } from './listar-arreglos';

describe('ListarArreglos', () => {
  let component: ListarArreglos;
  let fixture: ComponentFixture<ListarArreglos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarArreglos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarArreglos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
