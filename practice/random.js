// var isPalindrome = function(x) {
//     let lastNum = 0;
//     let totalNum = x;
//     let remNum = 0;
//     let palin = "";
    
//     while(totalNum > 0){
//         lastNum = totalNum % 10;
//         remNum = Math.floor(totalNum/10);
//         totalNum = remNum;
//         palin = `${palin}${lastNum}`
//         // console.log(palin)
//         console.log(lastNum, remNum, totalNum, palin);
//     }
//     // let palin = `${lastNum}${nextNum}${nextRemNum}`;

//     // const lastNum = x%10;
//     // let remNum = Math.floor(x/10);
//     // const nextNum = remNum%10;
//     // let nextRemNum = Math.floor(remNum/10);
//     // // const lastRemNum = nextRemNum%10;
//     // let palin = `${lastNum}${nextNum}${nextRemNum}`;
//     if(x === Number(palin)){
//         return true;
//         console.log(palin)
//     }else{
//         console.log(totalNum)
//         return false;

//     }
// };
// console.log(isPalindrome(121));
// // isPalindrome(121)

var romanToInt = function(s) {
   const roman= {
    I : 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
   };
   let sum = 0;
   let sub = 0;
   const arr = [...s]

   for(let i = 0; i<arr.length; i++){
        if(i+1 === arr.length-1){
            if(roman[arr[i]]<roman[arr[arr.length-1]]){
                sub = roman[arr[arr.length-1]]- roman[arr[i]];
                
                sum += sub;
                console.log(sum)
            }else{
                sum += roman[arr[i]];
            }

        }else if(roman[arr[i]]<roman[arr[i+1]]){
                sub = roman[arr[i+1]]- roman[arr[i]];
                
                sum += sub;
                

        }
        
        else if(roman[arr[i]]>roman[arr[i+2]]){
            sum += roman[arr[i]];
        }
         
   }
    // console.log(sum);
    
    return sum;
};
console.log(romanToInt("LVIII"));