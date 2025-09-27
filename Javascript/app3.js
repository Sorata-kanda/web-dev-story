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


    //====set timeout
    console.log("hi there");
    // setTimeout(() => {
    //     console.log("Welcome to javascript basics");
    // }, 4000);
    console.log("welcome to");


    //===set interval :- it keeps running, so we need to stop it sometimes too..
    let id = setInterval(() => {
        console.log("This is a js basics file");
    }, 1000);

    console.log(id);
    clearInterval(id);



    //====this with arrow functions

    //This is different for both function and arrow function,
    //for normal function it depends on it's caller/object 
    //but for arrow function it depends on it's parent scope  

    let stu = {
        name : "rahul",
        marks : 95,
        prop : this,
        getNames :  function(){
            console.log(this);
            return this.name;
        },

        getMarks: () => {
            console.log(this);
            return this.name;
        },

        // getInfo1 : function(){
        //     setTimeout(() => {
        //         console.log(this);   //student
        //     }, 2000);
        // },
        // getInfo2 : function(){
        //     setTimeout(function(){
        //         console.log(this);  //window
        //     },2000);
        // }

    }
    console.log(stu.getNames());
    console.log(stu.getMarks());

    // console.log(stu.getInfo1());
    // console.log(stu.getInfo2());






}catch(err){
    console.log("we got fucked");
    console.log("\n");
    console.log(err);
}







//--------------pratice question

try{
    //Write an arrow function that returns the square of a number n

    const square = (n) =>{
        console.log(n*n);
    }

    console.log(square(2));

    //Write a funciton that prints "hello world" 5 times at interval of 2s each
    let count =0;
    let func = function(){
        let ide = setInterval(() => {
        console.log("Hello world");
        count++;
            if (count >= 5) {
                clearInterval(ide);
                console.log("Interval stopped!");
            }
        }, 1000);   
    }
    console.log(func());


}catch(er){
    console.log("Something goes wrong, err is below");
    console.log("\n");
    console.log(er);
}