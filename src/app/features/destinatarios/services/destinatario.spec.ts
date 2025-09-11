import { TestBed } from '@angular/core/testing';

import { Destinatario } from './destinatario';

describe('Destinatario', () => {
  let service: Destinatario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Destinatario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
