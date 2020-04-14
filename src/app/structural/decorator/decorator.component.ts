import { Component, OnInit } from '@angular/core';


// Class decorator
function Console(target) {
  console.log('Our decorated class', target);
}

// Method decorator
function Log() {
  return (target, key: string, descriptor: any) => {

    const originalMethod = descriptor.value;

    descriptor.value =  (...args: any[]) => {

      console.log(`Entering ${key} method`);
      const result = originalMethod.apply(this, args);
      console.log(`Leaving ${key} method` );

      return result;
    };

    return descriptor;
  };
}

// Property decorator
function Emoji() {
  return (target, key: string | symbol) => {
    let val = target[key];
    const getter = () =>  {
      return val;
    };
    const setter = (next) => {
      console.log('updating flavor...');
      val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });

  };
}

@Console
class ExampleClass {
  constructor() {
    console.log('Yo!');
  }
}

@Console
@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})

export class DecoratorComponent implements OnInit {
  @Emoji()
  flavor = 'vanilla';

  constructor() { }

  @Log()
  ngOnInit() {
  }

}
