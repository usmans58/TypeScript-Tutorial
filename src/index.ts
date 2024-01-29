//Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';
x=true;
let age: number;
age=30;


//Arrays
let ids: number[]= [1,2,3,4,5];
ids.push(6);
let arr: any[]= [1,true,'Hello'];

//Tuple
let person: [number,string,boolean] = [1,'Brad',true];
let employee: [number,string][];
employee = [
    [1,'Brad'],
    [2,'John'],
    [3,'Jill'],
]

//Union
let pid: string | number;
pid = '22';

//Enum
enum Direction1 {
    Up=1,
    Down,
    Left,
    Right,
}

console.log(Direction1.Up);

enum Direction2 {
    Up= 'Up',
    Down= 'Down',
    Left= 'Left',
    Right= 'Right',
}
//objects
type User = {
    id: number,
    name: string,
}

const user1: User = {
    id: 1,
    name: 'John',
}
console.log(user1);


//Type Assertion (casting)
let cid: any = 1;
//let customerId = <number>cid;
let customerId = cid as boolean;
customerId = true;


//Functions
function addNum(x:number,y:number): number{
    return x+y;
}
console.log(addNum(1,2));


function log(message: string | number): void{
    console.log(message);
}


//Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number, //optional
}
const user2:UserInterface = {
    id: 1,
    name: 'John',
    age: 30,
}
const user3:UserInterface = {  
    id: 1,
    name: 'John',
}


//Interface with functions
interface MathFunc {
    (x:number,y:number): number,
}
const add: MathFunc = (x:number,y:number): number => x+y;
const sub: MathFunc = (x:number,y:number): number => x-y;

//Classes
class Person{
    id: number;
    name: string;

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }
    register(){
        return `${this.name} is now registered`;
    }
}

const brad = new Person(1,'Brad Traversy');
const mike = new Person(2,'Mike Jordan');
console.log(mike.register());
console.log(brad,mike);