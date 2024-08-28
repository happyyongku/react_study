// 1. 함수 표현식

function funcA () {
    console.log("FuncA")
}

// 함수 자체를 변수에 담을 수 있음
let varA = funcA
varA();

let varB = function () {  // 익명 함수
    console.log("varB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
    return value + 1;
}

console.log(varC(1));