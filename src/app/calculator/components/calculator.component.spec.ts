import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../services';

import { By } from '@angular/platform-browser';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should ensure that 1 + 7 equals 8', () => {
    let btn1 = fixture.debugElement.query(By.css("#btn1"));
    let btn7 = fixture.debugElement.query(By.css("#btn7"));
    let btnAddition = fixture.debugElement.query(By.css("#btnAddition"));
    let btnCalc = fixture.debugElement.query(By.css("#btnCalc"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnAddition.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn7.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalc.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('8');
  })

  it('Should ensure that 2 * 3 equals 6', () => {
    let btn2 = fixture.debugElement.query(By.css("#btn2"));
    let btn3 = fixture.debugElement.query(By.css("#btn3"));
    let btnMultiplication = fixture.debugElement.query(By.css("#btnMultiplication"));
    let btnCalc = fixture.debugElement.query(By.css("#btnCalc"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMultiplication.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalc.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('6');
  })

  it('Should ensure that 8 / 4 equals 2', () => {
    let btn8 = fixture.debugElement.query(By.css("#btn8"));
    let btn4 = fixture.debugElement.query(By.css("#btn4"));
    let btnDivision = fixture.debugElement.query(By.css("#btnDivision"));
    let btnCalc = fixture.debugElement.query(By.css("#btnCalc"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn8.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDivision.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalc.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('2');
  })

  it('Should ensure that 9 - 5 equals 4', () => {
    let btn9 = fixture.debugElement.query(By.css("#btn9"));
    let btn5 = fixture.debugElement.query(By.css("#btn5"));
    let btnSubtraction = fixture.debugElement.query(By.css("#btnSubtraction"));
    let btnCalc = fixture.debugElement.query(By.css("#btnCalc"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn9.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSubtraction.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn5.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalc.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('4');
  })

  it('Should ensure that 6.6 + 4 equals 10.6', () => {
    let btn6 = fixture.debugElement.query(By.css("#btn6"));
    let btnDecimal = fixture.debugElement.query(By.css("#btnDecimal"));
    let btn4 = fixture.debugElement.query(By.css("#btn4"));
    let btnAddition = fixture.debugElement.query(By.css("#btnAddition"));
    let btnCalc = fixture.debugElement.query(By.css("#btnCalc"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn6.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    btnDecimal.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn6.triggerEventHandler('click', null);
    fixture.detectChanges();    

    btnAddition.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalc.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('10.6');
  })    

});
