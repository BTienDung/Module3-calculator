import { Component, OnInit } from '@angular/core';
import {operators} from "rxjs/internal/Rx";

@Component({
  selector: 'app-angular-calculator',
  templateUrl: './angular-calculator.component.html',
  styleUrls: ['./angular-calculator.component.css']
})
export class AngularCalculatorComponent implements OnInit {

  number1 : number;
  number2: number;
  result:number;
  operator: '+';

  firstChange(value){
    this.number1 = Number(value);
  }

  secondChange(value){
    this.number2 = Number(value);
  }

  operatorChange(value){
    this.operator = value;
  }

  calculate(){
    switch (this.operator as any) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
