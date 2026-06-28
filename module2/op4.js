

const triangle = (a,b,c)=>{
    if((a+b>c) && (b+c>a) && (a+c>b)){
        if(a === b && b === c){
        console.log("Equilateral triangle");
        }
        else if (a === b || b === c || a === c){
            console.log("Isosceles triangle");
        }
        else if(a !== b && a !== c && b !== c){
            console.log("Scalene triangle");
        }
    }
    else
        console.log("false (Invalid)");
    
}

triangle(5,5,8);