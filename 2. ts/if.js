//조건문
var nScore = 87;
if (nScore >= 90) {
    console.log("훌륭 티비");
}
else if (nScore >= 80) {
    console.log('잘함 티비');
}
else if (nScore >= 70) {
    console.log('낫뱃 타비');
}
else if (nScore >= 60) {
    console.log("못함 티비");
}
else {
    console.log("ㅈㄴ 못함 티비");
}
var isPass = true;
var nSc = (isPass) ? 10 : 5;
console.log(nSc);
//스위치
var mname = "홍길동";
var code = 0;
switch (mname) {
    case "김길동":
        code = 90;
        break;
    case "홍길동":
        code = 70;
        break;
    case "이길동":
        code = 50;
        break;
    default:
        code = 10;
        break;
}
console.log(code);
//반복문
for (var i = 0; i < 10; i++) {
    console.log("반복", i + 1);
}
//구구단
var nDan = 5;
console.log("\uAD6C\uAD6C\uB2E8 ".concat(nDan, "\uC744 \uC678\uC790"));
for (var i = 1; i < 10; i++) {
    console.log("".concat(nDan, " x ").concat(i, " = ").concat(nDan * i));
}
console.log("\uAD6C\uAD6C\uB2E8 ".concat(nDan, "\uC744 \uC9DD\uC218\uB9CC \uC678\uC790"));
for (var i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        console.log("".concat(nDan, " x ").concat(i, " = ").concat(nDan * i));
    }
}
