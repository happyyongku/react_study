// 1. if 조건문
let num = 9;

if (num >= 10) {
    console.log("10 이상");
    console.log("레알로")
} else if (num >= 5){
    console.log("5 이상");
} else if (num >= 3) {
    console.log("3 이상")
} else {
    console.log("구라임");
}

// 2. Switch 문
// -> if 무ㅜㄴ과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if 보다 더 직관적

let animal = "owl";

// 일치하는 케이스가 있는 경우 하위 조건의 모든 조건을 발동

switch (animal) {
    case "cat": {
        console.log("고양이");
        break
    }
    case "dog": {
        console.log("개");
        break;
    }
    case "bear": {
        console.log("곰")
        break;
    }
    case "snake": {
        console.log("뱀")
        break;
    }
    case "tiger": {
        console.log("호랑이")
        break;
    }
    default: {
        console.log("없는 동물")
    }
}