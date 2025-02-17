function SJITcollege(message,abc){
    console.log(message);
    abc();
}

function callbackEg(){
    console.log("Welcome back to SJIT");
}

SJITcollege("Welcome to SJIT",callbackEg);