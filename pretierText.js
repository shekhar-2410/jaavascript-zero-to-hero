const obj = {
  a: 1,
  abc: 2,
  abcdefg: 3,
};
// output a-----1
//        b-----2
//        c-----3
function leftFillNum(first, targetLength) {
  return first.toString().padStart(targetLength, "0");
}
console.log(obj);
let first = obj.a;
let second = obj.abc;
let third = obj.abcdefg;
console.log(leftFillNum(first, 7));
console.log(leftFillNum(second, 7));
console.log(leftFillNum(third, 7));
