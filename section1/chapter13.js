// 콜백 함수
// 자신이 아닌 다른 함수에 인자로써 전달된 함수

// 1. 콜백 함수

function main(value) {
    console.log(value);
}

// 콜백 함수 형태
main(()=> {
    console.log("i am sub")
});

// 2. 콜백 함수의 활용

function repeat(count, callback) {
    for (let idx=1; idx <= count; idx++) {
        callback(idx)
    }
}

repeat(5, (idx) => {
    console.log(idx);
});                         // 1~5까지 출력

repeat(5, (idx) => {
    console.log(idx*2);
});