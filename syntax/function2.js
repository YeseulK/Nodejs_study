// Math.round 반올림 함수 (javascript 내장함수)
console.log(Math.round(1.6));
console.log(Math.round(1.4));

function sum(first, second){ // parameter
  console.log(first+second);
}
sum(2,4); // argument

// return
function sum2(first, second){ // parameter
  return first+second; // return은 함수를 출력 시킴과 동시에 종료한다. 
}
console.log(sum2(3,4)); // argument
