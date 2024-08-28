// 1. 상수 객체

const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
}

animal.age = 2;
animal.name = "까망이"
delete animal.color;

// 2. 메서드
// -> 값이 함수인 속성을 말함

const person = {
    name: "name",
    sayHi(){
        console.log("hi")
    }
}

person.sayHi();
person["sayHi"]();