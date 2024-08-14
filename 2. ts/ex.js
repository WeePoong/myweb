var aname = "홍길동";
var aaddr = "서울시 마포구 공덕동 마포대로";
var frd = "james";
//나는 서울시 마포구 공덕동 마포대로에 살고 있는 홍길동입니다
console.log("나는", aaddr + "에 살고 있는", aname, "입니다");
console.log("\uB098\uB294 ".concat(aaddr, " \uC5D0 \uC0B4\uACE0\uC788\uB294 ").concat(aname, " \uC785\uB2C8\uB2E4"));
console.log(frd);
console.log("\uB0B4 \uCE5C\uAD6C \uC774\uB984\uC740 ".concat(frd.toUpperCase()));
var tel = "010-8460-3135";
console.log("\uC804\uD654\uBC88\uD638\uB294 ".concat(tel, " \uC785\uB2C8\uB2E4"));
console.log(tel.substring(0, 3));
console.log(tel.substring(9));
console.log(tel.substring(4, 8));
//바꾸기
console.log(tel.replace("19", "**"));
//Trim
var str3 = "                 안녕 친구             ";
console.log(str3);
console.log(str3.trim());
