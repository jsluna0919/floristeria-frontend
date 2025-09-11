import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArreglo } from './crear-arreglo';

describe('CrearArreglo', () => {
  let component: CrearArreglo;
  let fixture: ComponentFixture<CrearArreglo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearArreglo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearArreglo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
