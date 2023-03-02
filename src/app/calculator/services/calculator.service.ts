import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to execute the operations of the calculator
 * @author Lucien Carbonare Jospin <lucien.carbonare@gmail.com>
 * @since 1.0.0
 */
export class CalculatorService {
  
  /* Define the constants for to use in the operations */
    static readonly ADDITION: string = "+";
    static readonly SUBTRACTION: string = "-";
    static readonly DIVISION: string = "/";
    static readonly MULTIPLICATION: string = "*";
  constructor() { }

  /**
   * Metod that calculate math matemathic from two numbers
   * Supports addition, subtraction, multiplication and division operations
   * @param number1 number 
   * @param number2 number
   * @param operation string operation for to execute
   * @return number Result of the operation
   */
  calc(number1: number, number2: number, operation: string): number {
    let result: number; // save to result
    switch(operation) {
      case CalculatorService.ADDITION :
        result = number1 + number2;
        break;
      case CalculatorService.SUBTRACTION :
        result = number1 - number2;
        break;
      case CalculatorService.DIVISION :
        result = number1 / number2;
        break;
      case CalculatorService.MULTIPLICATION :
        result = number1 * number2;
        break;
      default : result = 0;

    }
    return result;
  }
}
