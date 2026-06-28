

const verification = (password)=>{
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for(let i = 0; i<password.length; i++){
        const ch = password[i];
        const code = ch.charCodeAt(0);
        if(code>=65 && code <= 90){
            hasUpper = true;
        }
        if(code>=97 && code<=122){
            hasLower = true;
        }
        if(code >= 48 && code<=57){
            hasDigit = true;
        }
        if(hasDigit && hasUpper && hasLower){
            break;
        }
    }
    if(password.length>= 8 && hasUpper && hasLower && hasDigit){
        console.log("true (Valid)");
    }
    else{
        console.log("false (Invalid)");
    }
}

verification("SecurePass123");