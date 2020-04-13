import { Component, OnInit } from '@angular/core';

interface IPayStrategy {
  pay(strategy);
}

export class PayByCC implements IPayStrategy {
  pay(strategy) {
    console.log('Paying using credit card');
  }
}

export class PayByPayPall implements IPayStrategy {
  pay(strategy) {
    console.log('Paying using PayPall');
  }
}

export class ShoppingCart {
  strategy;
  payment: IPayStrategy;

  constructor(strategy) {
    this.strategy = strategy;
  }

  payBy() {
    switch (this.strategy) {
      case 'credit card':
        this.payment = new PayByCC();
        break;
      case 'paypall':
        this.payment = new PayByPayPall();
        break;
      default:
        this.payment = new PayByCC();
    }
    this.payment.pay(this.strategy);
  }

}

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {
  cart;

  constructor() {
  }

  ngOnInit() {
    this.cart = new ShoppingCart('credit cart');
    this.cart.payBy();
    this.cart = new ShoppingCart('paypall');
    this.cart.payBy();
  }

}
