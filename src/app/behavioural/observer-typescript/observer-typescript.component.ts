import { Component, OnInit } from '@angular/core';

export interface IObserver {
  sendEmail(): void;
}

// Observer
export class Client implements IObserver {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  sendEmail(): void {
    console.log(`Sending a mail to ${this.name}`);
  }

}

// Observable
export class Sale {
  private observers: IObserver[];

  constructor() {
    this.observers = [];
  }

  addObserver(ob: IObserver) {
    this.observers.push(ob);
  }

  notifyObservers() {
    console.log('Notifying clients:');
    this.observers.map((observer) => observer.sendEmail());
  }

}

@Component({
  selector: 'app-observer-typescript',
  templateUrl: './observer-typescript.component.html',
  styleUrls: ['./observer-typescript.component.scss']
})
export class ObserverTypescriptComponent implements OnInit {
  blackFriday: any;

  constructor() { }

  ngOnInit() {
  }

  notify() {
    // Creates a new Sale on the store
    this.blackFriday = new Sale();

    const clientA = new Client('John', 'john@email.com');
    const clientB = new Client('Jessica', 'jessica@email.com');
    const clientC = new Client('George', 'george@email.com');

    // Add clients to the observers list
    this.blackFriday.addObserver(clientA);
    this.blackFriday.addObserver(clientB);
    this.blackFriday.addObserver(clientC);

    // Notify all of clients about Black Friday
    this.blackFriday.notifyObservers();
  }

}
