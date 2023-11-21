"use strict";
/**
 * Types
 */
let helloText = "Hello World";
// helloText = true; // string 타입이 아니라 저장 불가능
/**
 * JS에 존재하는 7가지 기본 타입
 */
const string = "string";
const number = 1;
const bigInt = BigInt(999999);
const boolean = true;
const symbol = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any: 아무 타입이나 입력할 수 있음
let anyVar;
anyVar = 1;
anyVar = "string";
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar; // any 타입은 다른 타입으로 할당 가능
// unknown
let unknownVar;
unknownVar = 1;
unknownVar = "string";
unknownVar = true;
// let testNumber: number = unknownVar; // unknown 타입은 다른 타입으로 할당 불가능
// let testString: string = unknownVar;
// let testBoolean: boolean = unknownVar;
let unknownType2 = unknownVar;
let anyType2 = unknownVar; // unknown, any 타입에는 할당 가능
// never: 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// 리스트 타입
const kleagueClubNames = ["성남FC", "부산 아이파크"];
const booleanList = [true, false, true];
