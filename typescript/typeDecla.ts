// 함수선언식
function multiply1(x: number, y: number): number {
    return x * y;
}
  
// 함수표현식
const multiply2 = (x: number, y: number): number => x * y;
  
console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
  
console.log(multiply1(true, 1)); // error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.

// boolean
let isDone:boolean = false;
// null
let n: null = null;
// undefined
let u: undefined = undefined;
// number
let decimal: number = 6;
// array
let list1: any[] = [1,'two', true];
let list2: number[] = [1,2,3];
let list3: Array<number> = [1,2,3];
let x:[string, number];
x = ['hello', 10];

// void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function warnUser():void{
    console.log('this is my warning message');
}

// 정적 타이핑 static typing 
// 타입스크립트는 변수의 타입을 선언할 수 있으며
// 잘못된 타입의 값이 할당되며 컴파일러는 이를 감지하고 에러를 발생한다.

let foo:string,
    bar:number,
    bax:boolean;

foo = 'hello';
bar = 123;
baz = 'true' // error

