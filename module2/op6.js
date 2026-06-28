

const stringChar = (input)=>{
    const code = input.charCodeAt(0);
    if(code>=65 && code <= 90){
        console.log("Uppercase letter");
    }
    else if(code>=97 && code<=122){
        console.log("Lowercase letter");
    }
    else if(code >= 48 && code<=57){
        console.log("Digit");
    }
    else
        console.log("Symbol/Special Character");
}

stringChar("A");
stringChar("@");
stringChar("1");