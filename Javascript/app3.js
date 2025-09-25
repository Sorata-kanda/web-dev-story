//This keyword
const student = {
    name: "Rahul",
    age : 18,
    maths : 4,
    eng : 90,
    phy : 12,
    getAvg() {
        console.log(this);

        let avg = (this.maths + this.eng + this.phy)/3;
        console.log(Math.floor(avg));   
        console.log(`${this.name} whose age is ${this.age} got: ${Math.floor(avg)}`);
    }

}
console.log(student.getAvg());



//-------------try and catch-------
//when we get error , the code ahead or error not get runned, so we use try and catch, so our whole code run
//even if we get any error

//we can use catch as a function to print what our error was

try{
    console.log(a);
}catch{
    console.log("Variable not defined");
}
console.log("\n");




try{

    //------------miscellaneous topics
    //arrow functions
    const sum = (a,b) => {
        return(a+b);
    }
    console.log(sum(12,5));

    const cube = a => {       //for single arguments we don't need to use paranthesis
        return(a*a*a);
    }
    console.log(cube(90));

    const pow = (a,b) => {
        return(a**b);
    }
    console.log(pow(2,2));

    //====implicit return

    const mul = (a,b) => (a*b);
    console.log(mul(2,3));


}catch(err){
    console.log("we got fucked");
    console.log("\n");
    console.log(err);
}

