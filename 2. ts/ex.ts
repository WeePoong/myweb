const aname: string = "홍길동";
const aaddr: string = "서울시 마포구 공덕동 마포대로";
const frd: string = "james";

//나는 서울시 마포구 공덕동 마포대로에 살고 있는 홍길동입니다
console.log("나는", aaddr + "에 살고 있는", aname, "입니다");
console.log(`나는 ${aaddr} 에 살고있는 ${aname} 입니다`);
console.log(frd);
console.log(`내 친구 이름은 ${frd.toUpperCase()}`);

const tel = "010-8460-3135"
console.log(`전화번호는 ${tel} 입니다`);
console.log(tel.substring(0, 3));
console.log(tel.substring(9));
console.log(tel.substring(4,8));

//바꾸기
console.log(tel.replace("19", "**"));

//Trim
const str3: string = "                 안녕 친구             ";
console.log(str3);
console.log(str3.trim());