"use strict";
// let myName = "omale";
// // myName = 5;
// // type any
// let myDuties: number;
// // myDuties = "service";
// myDuties = 2;
// // arrays
// let hobbies: string[] = ["3","4"]
// // hobbies = [1, 3]
// // tuples
// let address: [string, number] = ["CAC street", 4]
// // enums
// enum Colors {
//     Red,
//     Blue = 20,
//     Green
// }
// let myColor: Colors = Colors.Red
// console.log(myColor)
// // function types
// function printName():string {
//     return myName
// }
// function consoleName():void {
//     console.log(myName)
// }
// function multiply( num: number , num2: number ): number{
//     return num * num2
// }
// console.log(multiply(4,6))
// let myMultiply : ( val:number , val2: number ) => number;
// // myMultiply = consoleName
// myMultiply = multiply
// // object types
// let user: {name:string, age:number} = {
//     name:"omale",
//     age:24
// }
// // user = {
// //     a:"abobo",
// //     b:30
// // }
// let complexObj: { data: number[], output: ( all: boolean) => number[]} = {
//     data: [10, 20, 30],
//     output: function ( all: boolean) : number[] {
//         return this.data
//     }
// }
// // type aliases
// type ComplexObjType = { data: number[], output: ( all: boolean) => number[]}
// let complexObj2: ComplexObjType = { 
//     data: [10, 20, 30],
//     output: function ( all: boolean) : number[] {
//         return this.data
//     }
// }
// // union types
// let someAge: string | number  = "24"
// someAge = 24 
// if( typeof complexObj2 == "string") {
//     console.log("Hey")
// }
// // never type
// function neverReturns() :never {
//     throw new Error("error encountered")
// }
// // nullable types
// let canNull: number | null = 12
// canNull = null
// let canAlsoNull;
// canAlsoNull = null;
// let canBeAny = null
// canBeAny = 10
// // module exercise
// // let bankAccount = {
// //     money:2000,
// //     deposit(value){
// //         this.money += value
// //     }
// // }
// // let mySelf = { 
// //     name:"Omale",
// //     bankAccount: bankAccount,
// //     hobbies:["football", "gaming"]
// // }
// // mySelf.bankAccount.deposit(3000);
// // console.log(mySelf)
// type bankAcc = { money:number , deposit:(val: number) => void}
// let bankAccount: bankAcc = {
//     money:2000,
//     deposit(value: number): void {
//         this.money += value
//     }
// }
// type person = { name: string, bankAccount: bankAcc, hobbies: string[]}
// let mySelf: person = { 
//     name:"Omale",
//     bankAccount: bankAccount,
//     hobbies:["football", "gaming"]
// }
// mySelf.bankAccount.deposit(3000);
// console.log(mySelf)
// Arrow functions
// const mult = ( num1: number = 1, num2: number) : number => num1 * num2
// console.log(mult(6, 4))
// // default parameters
// // Rest and Spread operators
// const makeArr = ( ...args: number[] ) =>{
//     return args;
// }
// console.log(makeArr(2,3))
// // destructuring
// const hobbies = ["coding", "gaming"]
// const [hobby1, hobby2] = hobbies
// Classes
// class Person {
//     public name: string; 
//     private type: string;
//     protected age: number = 24;
//     constructor ( name: string, public username: string){
//         this.name = name
//     }
//     printAge(){
//         console.log(this.age)
//         this.setType("Coder")
//     }
//     private setType(type: string){
//         this.type = type;
//         console.log(this.type)
//     }
// }
// const user = new Person("Omale", "elminho")
// // console.log(user.username)
// user.printAge();
// // user.setType("Coder"); wont work outside class as method is now private
// // classes Inheritance
// class Omale extends Person{
//     // name: string = "Omale";
//     constructor(username: string){
//         super("Omale", username);
//     }
// }
// const userOmale = new Omale("AOE") //instance of new class Omale inherited fro person
// Getters and Setters
// class Plant {
//     private _species = "Nothing";
//     get species(){
//         return this._species;
//     }
//     set species(val:string){
//         if(val.length > 3){
//             this._species = val
//         }else{
//             this._species = "Nothing";
//         }
//     }
// }
// let orange = new Plant;
// console.log(orange.species);
// orange.species = "Orange";
// console.log(orange.species);
// Static properties and methods
// class Helpers {
//     static PI:number = 3.142;
//     static calcCircum(val:number){
//         return this.PI * val;
//     }
// }
// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircum(8));
// Abstract classes
// abstract class Project {
//     projectName:string = "None";
//     budget:number ;
//     abstract changeName( val: string ):void;
//     calcBudget(budg:number, multiplier:number):number{
//         return budg * multiplier;
//     }
// }
// class ITProject extends Project{
//     changeName(name:string):void{
//         this.projectName = name
//     }
// }
// let cropShares = new ITProject();
// cropShares.changeName("Cropshares Web App");
// console.log(cropShares.projectName);
// private constructors
// class OnlyOne{
//     private static instance: OnlyOne;
//     private constructor ( public name:string){}
//     static getInstance(){
//         if(!OnlyOne.instance){
//             OnlyOne.instance = new OnlyOne("The Only One");
//         }
//         return OnlyOne.instance;
//     }
// }
// let wrong = new OnlyOne("The Only One");
// let right = OnlyOne.getInstance();
// Class Module exercises solution
//Exercise 1
// class Car {
//     acceleration:number = 0 ;
//     constructor (public name:string){
//     }
//     honk():void{
//         console.log("Peeen Peeen");
//     }
//     accelerate( speed:number ):void{
//         this.acceleration = this.acceleration + speed;
//     }
// }
// let myCar = new Car("Benz");
// myCar.honk();
// console.log(myCar.acceleration);
// myCar.accelerate(10);
// console.log(myCar.acceleration);
//Exercise 2 - inheritance
// class Shape {
//     width:number = 0;
//     length:number = 0;
// }
// class Rectangle extends Shape {
//     constructor(){
//         super()
//     }
//     calcSize():number{
//         return this.width * this.length;
//     }
// }
// let myRect = new Rectangle();
// myRect.width = 5;
// myRect.length = 2;
// console.log(myRect.calcSize());
//Exercise 3 - Getters and Setters
// class Person {
//     private _firstName: string ;
//     constructor( name:string ){
//         this._firstName = name
//     }
//     get firstName(): string { return this._firstName; }
//     set firstName( val:string ){
//         if(val.length > 3){
//             this._firstName = val
//         }else{
//             this._firstName = ""
//         }
//     }
// }
// let me = new Person("");
// console.log(me.firstName);
// me.firstName = "Omale";
// console.log(me.firstName);
// NameSpace
// const PI = 2.88;
// console.log(mathVars.calcCircum(5));
// Modules
// import { PI, calcCircum } from "./math/circle"
// console.log(PI);
// console.log(calcCircum(5));
// Interfaces
// interface NamedPerson {
//     firstName:string,
//     age?:number,
//     [extraProp:string]:any,
//     greeter( name:string ):void,
// }
// const abobo: NamedPerson ={
//     firstName:"Emmanuel",
//     greeter( name:string ):void {
//         console.log("Hello" + name)
//     }
// }
// abobo.greeter("Omale")
// interface to create class
//  class FromNamedPerson implements NamedPerson{
//     firstName:string;
//     greeter( name:string ):void {
//         console.log("Hello" + name)
//     }
//  }
//  let david = new FromNamedPerson();
//  david.firstName = "David"
//  console.log(david.firstName)
// interface to set type of functions
// interface CalcFunction{
//     ( num1:number, num2:number ):number
// }
// const doubleNum: CalcFunction = (num1:number, num2:number) => {
//     alert(`${num1 * num2}`)
//     return num1*num2
// }
// doubleNum(4,5);
// Generics
// Simple Generic
// function echo( data:any ){
//     return data;
// }
// console.log(echo("Omale"));
// console.log(echo(35));
// console.log(echo({name:"Omale"}));
// // Better Generic
// function betterEcho<T>( data: T ){
//     return data;
// }
// console.log(betterEcho("Omale").length);
// console.log(betterEcho<number>(35));
// // console.log(echo({name:"Omale"}));
// // Built in Generics
// let numArray: Array<number> = [ 1, 4, 7]
// numArray.push(0.8)
// console.log(numArray);
// // Arrays
// function printAll<T>(given: T[]){
//     given.forEach((el)=>console.log(el))
// }
// printAll<string>(["dgd", "23"])
// Generic Types
// const echo2: <T>( data:T )=> T = betterEcho
// console.log(echo2<string>("dfdbdj"))
// // Generic Classes
// class  SimpleMath<T extends number | string, U extends number | string> {
//     baseValue: T;
//     multiplyValue: U;
//     calc(): number{
//         return +this.baseValue * +this.multiplyValue
//     }
// }
// const simpleMath = new SimpleMath<number, string>();
// simpleMath.baseValue = 10;
// simpleMath.multiplyValue = "10";
// console.log(simpleMath.calc())
// Decorators
// function logged(constructorFn: Function){
//     console.log(constructorFn);
// }
// function loggedFalse(constructorFn: Function){
//     alert(constructorFn);
// }
// @logged
// class Person{
//     constructor(){
//         console.log("hi");
//     }
// }
// // Decorator Factories
// function logging(value: boolean){
//     return value ? logged : loggedFalse
// }
// @logging(false)
// class Car{
//     constructor(){
//     }
// }
// //Advanced usage
// function printable(constructorFn: Function){
//     constructorFn.prototype.print = function () {
//         console.log(this);
//     }
// }
// @printable
// class Plant {
//     name:string = "Egg Plant"
// }
// const eggPlant = new Plant()
// eggPlant.print
// Creating a Class decorator
// @showPerson
// class Person {
// }
// function showPerson( target: Function ){
//     alert(target)
// }
// Creating a property decorator
// class Person{
//     @compulsoryName
//     static personName:string = "AboboElminho";
//     // constructor(name:string){
//     //     this.personName = name;
//     // }
// }
// function compulsoryName( target:any, propName:string ): void {
//     console.log(target[propName])
// }
// const omale = new Person();
