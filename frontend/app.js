// const stu1={
//     name:"dushyant",
//     age:22,
//     marks:99,
//     getmarks(){
//         return this.marks;
//     }
// }
// const stu2={
//     name:"akankasha",
//     age:22,
//     marks:95,
//     getmarks(){
//         return this.marks;
//     }
// }
// const stu3={
//     name:"alok",
//     age:23,
//     marks:80,
//     getmarks(){
//         return this.marks;
//     }
// }
// const arr=[1,2,3];
// arr.sayHello=()=>{
//     console.log("hello");
// }
// arr.push(4);

// function factFun(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi, my self dushyant ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1=factFun("dushyant",22);
// let p2=factFun("akash",21);

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk=function(){
//     console.log(`hi my name is ${this.name}`);
// }

// let p1=new Person("dushyant",22);
// let p2=new Person("akash",21);

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`hi this side ${this.name}`);
//     }
// }

// let p1=new Person("dushyant",22);
// let p2=new Person("akash",21);

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi I am ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name,age,marks){ 
//         super(name,age);      
//         this.marks=marks;
//     }   
// }

// let p1=new Student("dushyant",22,99);

// class Teacher extends Person {
//     constructor(name,age,subject){  
//         super(name,age); 
//         this.subject=subject;
//     } 
// }
// let t1= new Teacher("alok",37,"maths");

class Mammal{
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
    eat(){
        console.log(`i can eat`);
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log(`woof...`);
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log(`meow...`);
    }
}
let dog1=new Dog("tuffy");
let cat1=new Cat("lusy");