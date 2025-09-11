import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArreglo } from './editar-arreglo';

describe('EditarArreglo', () => {
  let component: EditarArreglo;
  let fixture: ComponentFixture<EditarArreglo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarArreglo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarArreglo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
