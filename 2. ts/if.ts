//조건문
let nScore: number = 87;

if(nScore >= 90){
    console.log("훌륭 티비")
}
else if(nScore >=80 ){
    console.log('잘함 티비')
}
else if(nScore >= 70){
    console.log('낫뱃 타비')
}
else if(nScore >= 60){
    console.log("못함 티비")
}
else{
    console.log("ㅈㄴ 못함 티비")
}

let isPass: boolean = true;
let nSc= (isPass) ? 10 : 5;
console.log(nSc);

//스위치
let mname: string = "홍길동"
let code: number = 0;
switch(mname){
    case "김길동":
        code = 90;
        break
    case "홍길동":
        code = 70;
        break
    case "이길동":
        code = 50;
        break
    default:
        code = 10;
        break
}
console.log(code);

//반복문
for (let i = 0; i < 10 ; i++){
    console.log("반복",i+1)
}

//구구단
let nDan:number = 5;
console.log(`구구단 ${nDan}을 외자`)
for(let i = 1; i < 10 ; i++){
    console.log(`${nDan} x ${i} = ${nDan*i}`)
}

console.log(`구구단 ${nDan}을 짝수만 외자`)
for(let i = 1; i < 10 ; i++){
    if (i%2 == 0){
        console.log(`${nDan} x ${i} = ${nDan*i}`)
    }
}   

