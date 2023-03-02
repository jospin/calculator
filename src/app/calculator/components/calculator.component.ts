import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit{


  private number1: string;
  private number2: string;
  private result: number;
  private operation: string

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() { this.clean() }

   /**
   * init the all operators and set to null or 0
   *
   * @return void
   */
  clean(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;

  }

  /**
   * Add the number selected for calculation later
   * 
   * @param number string
   * @return void
   */
  addNumber(number: string): void {
    if(this.operation === null) {
      this.number1 = this.concatNumber(this.number1, number);
    } else {
      this.number2 = this.concatNumber(this.number2, number);
    }
  }

  /**
   * Return the concat value and trat the decimal value
   * 
   * @param actualNumber string
   * @param concatNumber string
   * @return string
   */
  concatNumber(actualNumber: string, concatNumber: string): string {
    // Caso concatena 0 ou null apenas inicializa o valor
    if(actualNumber === null || actualNumber === '0') {
      actualNumber = '';
    }
    if(concatNumber === '.' && actualNumber === '') {
      return '0.';
    }
    if(concatNumber === '.' && actualNumber.indexOf(".") > -1) {
      return actualNumber;
    }
    return actualNumber + concatNumber;
  }

  /**
   * If you already have an operation selected, execute the operation
   * previous one, and defines the new operation
   * 
   * @param operation string
   * @return void
   */
  defineOperation(operation: string): void {
    // Apenas define a operação caso não exista uma
    if(this.operation === null) {
      this.operation = operation;
      return;
    }

    /* If operation defined and number 2 selected, 
    calculates the operation */
    if(this.number2 !== null ) {
      this.result = this.calculatorService.calc(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  /** 
   * Calculates an operation
   * 
   * @return void
   */
  calc(): void {
    if(this.number2 === null) {
      return;
    }
    this.result = this.calculatorService.calc(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation);
  }

  /**
   * Returns the value to be displayed on the calculator screen
   * 
   * @return string
   */
  get display(): string {
    if(this.result !== null) {
      return this.result.toString();
    }

    if(this.number2 !== null) {
      return this.number2;
    }
    return this.number1;

  }
}
