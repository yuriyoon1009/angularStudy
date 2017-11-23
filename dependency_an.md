### Angular service & Dependency injection
- template, component class, view
- component에는 로직, 데이터가 들어가고 모델이라 한다. (뷰를 표시하기 위한)
- 뷰만 컨트럴하기 위해 모델이 있는게 아니다. 데이터를 취득하기 위한 
- 데이터를 통신하는게 주요 관심사는 아니다. 주요 관심사는 뷰를 표시하기 위한 그래서 분리되는게 마땅하다. 

## service
- service는 순수 자바스크립트이다.
- import{Injectable} 주입 가능한 클래스
- 싱글톤(하나의 클래스로 공통으로 사용한다)
- 컴포넌트를 만들때 싱글톤으로 만든다.
- 클래스를 생성한 인스턴스를 서비스로 사용한다.
- 그래서 어떠한 클래스로 만들어졋는지 angular에게 알려야 한다. (어떤 인스턴스인지)
- constrcutore(private greetingService: GreetingService){} 멤버변수 선언
- 서비스는 데이터 베이스, 로깅, 인증관련에 사용한다.
- provider는 모듈에 한다.
```
import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
    selector:'app-root',
    template:`
        <button (click)="sayHi()">Say Hi</button>
        <p>{{ greeting }}</p>
     `
})
export class AppComponent{
    greeting: string;
    // 서비스의 인스턴스를 담을 프로퍼티
    greetingService: GreetingService;

    constructor(){
        this.greetingService = new GreetingService();
    }
    sayHi(){
        this.greeting = this.greetingService.sayHi();
    }
}
```

## Reactive programmint
- Angular의 필수 패키지로 채틱된 RxJs는 비동기 데이터 스트림을 처리하는 API를 제공하는 라이브러리다.
- observe은 프로미스의 단점을 해결하며 observal은 데이터 스트림을 스트리밍하고 연속적으로 보내진 데이터를 받아 처리하다.

## HttpClient
- subscription은 promist의 then이랑 같다.
- 