"use strict";
// //  Infer types (implicit type)
// let userName = "Arjun kumar";
// let num = 9_00;
// console.log(num)
// Defining types (Explicit Types)
// let myName: string = "Arjun";
// let age: number = 24;
// let isAProgrammer: boolean = true;
// let skills: string[] = ['JS', 'CSS', 'TS'];
// let count : number[] = [1, 2, 3];
// let userDetails: {name: string; age: number} = {name: "Arjun kumar vs", age: 24}
// Interface 
// interface Details {
//     name: string;
//     age: number;
//     work: string;
//     getName: ()=> void;
// }
// let userDetails: Details= {name: "Arjun kumar vs", age: 24, work: "developer"}
// let adminDetails: Details= {name: "Arjun kumar vs", age: 24, work: "developer", getName(){
//     console.log("function")
// }}
// Type
// type Details = {
//     name: string;
//     age: number;
//     work: string;
//     getName: ()=> void;
// }
// let adminDetails: Details= {name: "Arjun kumar vs", age: 24, work: "developer", getName(){
//     console.log("function")
// }}
// union and optional 
// type Details = {
//     name: string;
//     age: number | string;
//     work?: string;
//     getName?: ()=> void;
// }
// let adminDetails: Details= {name: "Arjun kumar vs", age: "twenty four", work: "developer", getName(){
//     console.log("function")
// }}
// let skills: (string | number | boolean)[] = ['JS', 'CSS', 'TS', 1, 3, 6, true];
// Functions 
// type Details = {
//     name: string;
//     age: number | string;
//     work?: string;
//     getName?: ()=> void;
// }
// let adminDetails: Details= {name: "Arjun kumar vs", age: "twenty four", work: "developer", getName(){
//     console.log("function")
// }}
// type getUsernameAndAge = {
//     name: string;
//     age: string | number;
// }
// function getUserName(adminDetails: Details): getUsernameAndAge{
//     return {name: adminDetails.name, age: adminDetails.age }
// };
// const newValue = getUserName(adminDetails);
// newValue.length;
// // Named Types
// type Status = "pending" | "completed" | "failed";
// let currentStatus: Status = "completed"
// Function overloading 
// function add(num1: string | number, num2: string | number): string | number{
//    if(typeof num1 === 'string'  || typeof num2 === 'string'){
//        return num1 + "" + num2;
//    }
//     return num1 + num2;
// }
// function add(num1: string, num2: string): string;
// function add(num1: number, num2: number): number;
// function add(num1: any, num2: any): any{
//     return num1 + num2;
// }
// add(2, 2)
// add("2", "2")
// Generics
// function getAge<T>(age: T): T {
//     return age
// }
// getAge<string>("20");
// getAge<number>(20);
// getAge([]);
// type UserType = {
//     name: string;
//     age: number;
// };
// interface AdminType extends UserType  {
//     role: string;
// }
// const userDetails: UserType = {
//     name: "Arjun",
//     age: 24
// }
// const adminDetails: AdminType = {
//     name: "Libin",
//     age: 25,
//     role: "admin"
// }
// function getDetails<T>(details: T): T {
//     return details
// }
// const userValue = getDetails<UserType>(userDetails);
// const adminValue = getDetails<AdminType>(adminDetails);
// adminValue.role;
// userValue.name
// // Enums
// const enum StatusType {
//     PENDING = "pending",
//     COMPLETED = "completed",
//     FAILED = "failed"
// }
// function getStatus(orderId: string, status: StatusType){
//     console.log(orderId, "==", status);
// }
// getStatus("12345", StatusType.COMPLETED);
// // as const 
// let userName = "Arjun kumar " as const;
// userName = "Arjun kumar "
// typeof keyof
// const  StatusType = {
//     PENDING:  "pending",
//     COMPLETED:  "completed",
//     FAILED:  "failed"
// } as const 
// function getStatus(orderId: string, status: keyof typeof StatusType){
//     console.log(orderId, "==", StatusType[status]);
// }
// getStatus("12345", "PENDING");
// Utility types 
// type Users = {
//     name: string;
//     age?: number;
// }
// const userDetails: Required<Users> = {
//     name: "Arjun",
//     age: 24
// }
// const userDetails: Pick<Users, "name" |  "age"> = {
//     name: "Arjun",
//     age: 24
// }
// const userDetails: Omit<Users,  "age"> = {
//     name: "Arjun",
// }
// userDetails.name = "amal";
// type StatusType = "pending" | "complete" | "failed";
// const status: Exclude<StatusType, "pending" > = "failed";
// type Food = {
//     KFC: string;
//     PIZZA: string;
//     CHICKEN: string;
// };
// type Food = Record<string, any>;
// type Food = {
//     [index: string]: any;
// }
// const food:Food = {
//     eh: "hey",
//     ha: 24,
//     chicken: {
//         ss: "fsdfsd"
//     }
// }
// any / unknown / never / void / null
// let userName: unknown = "Arjun";
// const newVal =userName as string 
// newVal.charAt(1)
// function throwError(message: string): never{
//     throw new Error(message)
// }
// function logMessage(message: string): void{
//     console.log(message)
// }
// type User = {
//     name: string;
//     getUserName: (message: string)=>  void;
//     // getUserName(): string;
// }
// const obj: User = {
//     name: "Arjun",
//     getUserName(message) {
//         console.log(message)
//     },
// }
// obj.getUserName("arjun");
// let userName = null;
// function get() {
//     if (userName) {
//         return "hey";
//     }
//     else if (userName === null) {
//         return "hello";
//     }
// }


