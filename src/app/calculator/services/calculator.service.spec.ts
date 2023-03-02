import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ensure that 1 + 4 equals 5', () => {
    let result = service.calc(1, 4, CalculatorService.ADDITION);
    expect(result).toEqual(5);
  });

  it('should ensure that 4 - 1 equals 3', () => {
    let result = service.calc(4, 1, CalculatorService.SUBTRACTION);
    expect(result).toEqual(3);
  });

  it('should ensure that 2 * 3 equals 6', () => {
    let result = service.calc(2, 3, CalculatorService.MULTIPLICATION);
    expect(result).toEqual(6);
  });

  it('should ensure that 6 / 2 equals 3', () => {
    let result = service.calc(6, 2, CalculatorService.DIVISION);
    expect(result).toEqual(3);
  });

  it('should be 0 to invalid operation', () => {
    let result = service.calc(6, 2, '%');
    expect(result).toEqual(0);
  });

});
