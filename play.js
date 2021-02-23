//A Quick Refresher: Refreshing the Core Syntax
var name = 'Max';
var age = 29;
var hasHobbites = true;

function summarizeUser(userName, userAge, userHasHobby)
{
    return ('Name is '+ userName + ' ,age is '+ userAge + ' and the user has hobbies: '+userHasHobby);
}
const add = (a,b) =>{
   return a+b;
};
const add = (a,b) => a+b; //lambda in python

const person = {
    name : 'Max',
    age: 29,
    greet () {
        console.log('Hi, I am ' + this.name);
    }
};


console.log(name);
console.log(summarizeUser(name,age,hasHobbites));


//Second Version of things:
