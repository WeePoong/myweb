//369
// for (let i = 1; i <30 ; i++){
//     if (i % 3 == 0){
//         console.log("짝")
//     }
//     else{
//         console.log(i)
//     }
// }

/*------------------------------------------------------------------*/

let a: number;
for(let i ; i < 1000; i++){
    a = Math.floor(a / 10);
    if (a < 1){
        if (i % 3 == 0){
            console.log('짝');
        }
        else{
            console.log(i)
        }
    }
    else if (a >= 1){
        if (a < 10){
            if (Math.floor(i / 10) == 3){
                console.log('짝');
            }
            if (Math.floor(i / 10) == 6){
                console.log('짝');
            }
            if (Math.floor(i / 10) == 9){
                console.log('짝');
            }
        }
    }
    else if(a >=10){
        if (a < 100){

        }
    }
}