"use strict";
//Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
x = true;
let age;
age = 30;
//Arrays
let ids = [1, 2, 3, 4, 5];
ids.push(6);
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'Brad', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
//Union
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user1 = {
    id: 1,
    name: 'John',
};
console.log(user1);
//Type Assertion (casting)
let cid = 1;
//let customerId = <number>cid;
let customerId = cid;
customerId = true;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user2 = {
    id: 1,
    name: 'John',
    age: 30,
};
const user3 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
