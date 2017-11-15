export class User{
    // 생성자 파라미터에 접근 제한자 가능
    // constructor(public x: string) { }
    // 1. 멤버변수 정의 2. 초기화가 수행 3. public 클래스 내부, 클래스 인터페이스, 자식클래스 접근 가능
    constructor(public id:number, public name:string, public role:string){ }
}
