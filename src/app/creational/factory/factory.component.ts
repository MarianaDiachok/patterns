import { Component, OnInit } from '@angular/core';

function Factory() {
  this.createEmployee = (type) => {
    let employee;

    if (type === 'fulltime') {
      employee = new FullTime();
    } else if (type === 'parttime') {
      employee = new PartTime();
    } else if (type === 'temporary') {
      employee = new Temporary();
    } else if (type === 'contractor') {
      employee = new Contractor();
    }

    employee.type = type;

    employee.say = function() {
      log.add(this.type + ': rate ' + this.hourly + '/hour');
    };

    return employee;
  };
}

function FullTime() {
  this.hourly = '$12';
}

function PartTime() {
  this.hourly = '$11';
}

function Temporary() {
  this.hourly = '$10';
}

function Contractor() {
  this.hourly = '$15';
}

const log = (() => {
  let log = '';

  return {
    add: (msg) => {
      log += msg + '\n';
    },
    show: () => {
      alert(log);
      log = '';
    }
  };
})();

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {
  employees;
  constructor() { }

  ngOnInit() {
  }

  run() {
    this.employees = [];
    const factory = new Factory();

    this.employees.push(factory.createEmployee('fulltime'));
    this.employees.push(factory.createEmployee('parttime'));
    this.employees.push(factory.createEmployee('temporary'));
    this.employees.push(factory.createEmployee('contractor'));

    for (let i = 0, len = this.employees.length; i < len; i++) {
      this.employees[i].say();
    }

    log.show();
  }


}
