import { TestBed } from '@angular/core/testing';

import { OperationsService } from './operations.service';
import { WarnService } from './warn.service';

describe('OperationsService', () => {
  
  it('Add 2 numbers', () => {
    // const opés = new OperationsService(new WarnService)
    // const result = opés.ajouter(10,5);
    // expect(result).toBe(15)

    // jasmine spy
    const MockWarn = jasmine.createSpyObj('WarnService', ['warnMessage', 'logErreur'], ['nbWarn'])

    const opé = new   OperationsService(MockWarn);
    const result = opé.ajouter(10,5);
    expect(result).toBe(15)
    expect(MockWarn.warnMessage).toHaveBeenCalled(1)
  })
  
  it('Substact 2 numbers', () => {
    const opés = new OperationsService(new WarnService)
    const result = opés.ajouter(10,5);
    expect(result).toBe(15)
  })

})
