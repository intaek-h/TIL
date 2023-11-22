"use strict";
/**
 * Intersection
 *
 * Union이 Or라면, Intersection은 And다.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let humanAndContacts = {
    name: "김현수",
    age: 28,
    phone: "010-1234-5678",
    address: "경기도 성남시",
}; // Person과 Contacts의 속성을 모두 가지고 있어야 한다.
// 논리적으로 존재할 수 없기 때문에, never 타입이 된다.
// let NumberAndString: NumberAndString = 123; // 어떤 값을 넣더라도 에러가 발생한다.
