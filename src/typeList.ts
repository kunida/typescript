/* eslint-disable @typescript-eslint/no-unused-vars  */

// TypeScriptの基本の方

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "a";

// array
let arr1: Array<number> = [0,1,2];
let arr2: number[] = [0,1,2];

// tuple
let tuple: [number, string] = [0, "a"];

// any なんでも
let any1: any =false;

// void
const funcA = (): void => { //何も返さない時は: voidはなくてもいい
  const test = "test";
}

// null
let null1 : null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: {id:number, name: string} = {id: 0, name: "kuttan"};