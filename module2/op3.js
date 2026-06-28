//! triangle inquality theorem
//? sum of any two sides is greater than third side

const validationCheck = (a,b,c)=>{
    if((a+b>c) && (b+c>a) && (a+b>b)){
        console.log("true (Valid)");
    }
    else
        console.log("false (Invalid)");
}

validationCheck(3,4,5);
validationCheck(1,2,3);