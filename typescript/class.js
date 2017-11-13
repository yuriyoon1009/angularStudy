//클래스는 prototype 기반 패넡의 syntactic sugar
//typescript 클래스는 클래스 바디에 멤버 변수를 사전 정의하여야 한다.
class Foo {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name}`);
    }
}
const person = new Foo('lee');
person.walk();
/*
//ES6
class Person {
  constructor(name) {
    // 멤버 변수
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}
*/
//접근 제한자 Access modifier
//public - 클래스 내부, 자식 클래스, 클래스 인스턴스
// protected - 클래스 내부, 자식 클래스
// private - 클래스 내부
class Poo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
//public, protected 자식 클래스 접근 가능
class Bar extends Poo {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x);
        console.log(this.y);
        console.log(this.z); // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
    }
}
//protected, private 인스턴스 접근 불가능
const soo = new Poo('x', 'y', 'z');
console.log(soo.x);
console.log(soo.y); // error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.
console.log(soo.z); // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
// 생성자 파라미터에 접근 제한 사용
// 때 접근 제한자가 사용된 생성자의 파라미터는
// 암묵적으로 멤버 변수로 정의되고 생성자 내부에서 별도의 초기화가 없어도 암묵적으로 초기화가 수행된다.
class Koo {
    // 접근 제한자가 사용된 생성자의 파라미터
    // 1. x는 멤버 변수로 정의되고
    // 2. 초기화가 수행된다
    // 3. public이 사용되었으므로 x는 클래스 외부에서도 참조가 가능하다
    constructor(x) {
        this.x = x;
    }
}
const a = new Koo('Hello');
console.log(a.x); //참조 가능
/*

ES6
class Uoo {
  constructor(x) {
      this.x = x;
  }
}

*/
class Qoo {
    constructor(x) {
        this.x = x;
    }
}
const l = new Qoo('Hello');
//console.log(l.x)  // error : only accessible within class 'Qoo'
class A {
    // x는 생성자 내부에서만 유효한 지역 변수이다.
    constructor(x) {
        // console.log(x); // Hello
    }
}
const b = new A('hello'); //hello
console.log(b); // A{}
console.log(b.x); // undefined
// static 키워드
// ES6 클래스에서 static 키워드는 클래스의 정적(static) 메소드를 정의한다.
// 정적 메소드는 클래스의 인스턴스화 없이 호출하며 클래스의 인스턴스로 호출할 수 없다.
class T {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {
        return 'staticMethod';
    }
    prototypeMethod() {
        return 'prototypeMethod';
    }
}
const t = new T(123);
console.log(T.staticMethod());
//console.log(t.staticMethod()); // error 
/*
  static 키워드는 멤버 변수에도 사용할 수 있다.
  ECMAScript 6와 마찬가지로 정적 프로퍼티는 클래스의
  인스턴스화없이 호출하며 클래스의 인스턴스로 호출할 수 없다.
*/
class O {
    constructor() {
        O.instanceCounter++;
    }
}
O.instanceCounter = 0;
var o = new O();
console.log(O.instanceCounter); // 1
console.log(o.instanceCounter); // error TS2339: Property 'instanceCounter' does not exist on type 'Foo'.
// 추상 클래스 Abstract class
// 추상 클래스는 추상 메소드를 포함
// 직접 인스턴스를 생성할 수 없으며 상속만을 위해 사용된다.
// 추상 클래스를 상속하는 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다.
class Animal {
    // 일반 메소드
    move() {
        console.log("roaming the earth...");
    }
}
// new Animal();
// error TS2511: Cannot create an instance of the abstract class 'Animal'.
class Dog extends Animal {
    // 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
    makeSound() {
        console.log('bowwow~~');
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
