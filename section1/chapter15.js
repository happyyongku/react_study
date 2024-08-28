// 객체
let obj1 =  new Object()  // 객체 생성자
let obj2 = {}   // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
    job : "FE developer",
    extra : {}
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

let name = person.name;

let age = person["age"]

let property = "hobby";
let hobby = personn[property]

// 3.2 새로운 속성을 추가하는 방법
person.job = "FE developer"
person["favoriteFood"] = "chickenn"

// 3.4 속성을 삭제하는 방법
delete person.job;

// 3.5 속성의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;