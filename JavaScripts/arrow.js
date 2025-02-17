// Arrow Function
var test = () =>{
    console.log('Hello');
}
test()
// Scoping
var a=10
console.log(a);
{
    let a=20
    console.log(a)
    let b=30
    console.log(b)
    let c=40
    console.log(c)
    var e=50;
    console.log(e)
    a=30;
    console.log(a)
}
console.log(a)
console.log(e)
// ternary operator
a=10
console.log((a%2==0)?'Even':'Odd')

//spread operator
arr1=["user1","user2","user3"]
arr2=["user4","user5","user6"]
arr3=["user7","user8","user9"]
arr4=["user10","user11","user12"]
db=[...arr1,...arr2,...arr3,...arr4]
console.log(db)
aldb=[arr4]
console.log(aldb)

// Rest operator
function test(...db){
    console.log(db)
}
test(db)

// destructuring operator
var array = [10,20,30,40,50]
var [a,b,c,d,e,f]=array
console.log(a,b,f)

class classEg{
    classfun=()=>{
        console.log('Hello function from class')

    }
}

obj = new classEg()
console.log(obj.classfun())