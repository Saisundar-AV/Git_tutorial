function SJITcollege(message,abc){
    console.log(message);
    abc();
}

function callbackEg(){
    console.log("Welcome back to SJIT");
}

SJITcollege("Welcome to SJIT",callbackEg);


async function asyncEg(){
    setTimeout(function(){
        console.log("hello");
    }, 5000);
    return "Welcome to SJIT";
}
console.log(asyncEg());