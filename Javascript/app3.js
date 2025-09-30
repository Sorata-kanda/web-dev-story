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

// try{
//     //Write an arrow function that returns the square of a number n

//     const square = (n) =>{
//         console.log(n*n);
//     }

//     console.log(square(2));

//     //Write a funciton that prints "hello world" 5 times at interval of 2s each
//     let count =0;
//     let func = function(){
//         let ide = setInterval(() => {
//         console.log("Hello world");
//         count++;
//             if (count >= 5) {
//                 clearInterval(ide);
//                 console.log("Interval stopped!");
//             }
//         }, 1000);   
//     }
//     console.log(func());


// }catch(er){
//     console.log("Something goes wrong, err is below");
//     console.log("\n");
//     console.log(er);
// }




try{
    let arr1 = [1,2,3,4,5];
    let print = function(el){
        console.log(el);
    }

    arr1.forEach(print);



    let arr2 = [{
        name: "rahul",
        marks: 98,

    },
    {
        name: "aman",
        marks: 97,
    },
    {
        name : "shradha",
        marks: 95,
    }];

    arr2.forEach((stud) => {
        console.log(stud.marks);
    })


    //Map function
    let num = [1,2,3,4,5];
    let double = num.map((el) =>{
        return el*el;
    })
    console.log(double);


    let gpa = arr2.map((el) => {
        return el.marks/10;
    })
    console.log(gpa);


    //filter function
    let nums = [1,2,3,4,5,6,7,8,9,10];
    let ans = nums.filter((el) =>{
        return el%2 ==0;
    })
    console.log(ans);

    //every method :- can only return true or either false, this will return true if for every single elment our ans is true and vica versa

    let ans2 = nums.every((el) => {
        return el%2==0;
    })
    console.log(ans2);

    //some
    let ans3 = nums.some((el) => {
        return el%2 == 0;
    })

    console.log(ans3);

    //reduce

    let ans4 = nums.reduce((res,el) => res+el);
    console.log(ans4);


    let maxer  = [10,45,32,47,50,1,56];

    let max = -1;
    for(let i=0;i<maxer.length; i++){
        if(max <maxer[i] ){
            max = maxer[i];
        }
    }
    console.log(max);
    //samelogic by reduce method:-

    let max1 = maxer.reduce((maxx,el)=>{
        if(maxx < el){
            return el;
        }
        return maxx; 
    })

    console.log(max1);



}catch(er){
    console.log("Something goes wrong, err is below");
    console.log("\n");
    console.log(er);
}




//--------------pratice question

//Qs1. check if all numebr in out array are multiple of 10 or not
//Qs2. create a function to find the min number in array

try{    
    let arr = [10,12,23,15,20,561,23,30];

    let finder = arr.every((i) => {
        return (i%10==0);
    })

    console.log(finder);


    //Qs2.
    function getmin(arr){
        let miner = arr.reduce((red,el) => {
            if(red>el){
                red = el;
            }else{
                return red;
            }
        });
        return miner;
    }
    console.log(getmin(arr));

}catch(er){
    console.log("Something goes wrong, err is below");
    console.log("\n");
    console.log(er);
}


try{
    //default parameters

    function sum(a,b=2){
        return a+b;
    }

    console.log(sum(1));


    //spread
    console.log(..."Rahul Jangra");
    array1 = [12,34,5,23,54,21];
    let printer = Math.min(array1); //This will give nothing/NaN cause math.min can't read the array1
    console.log(printer);

    console.log(...array1);
    let printer1 = Math.min(...array1);
    console.log(printer1); 

    let newarr = array1;
    console.log(...newarr);
    let char = "Rahul";
    let newarr1 = [...char];
    console.log(newarr1);

    let data = {
        email: "jangraboy.nature@gmail.com",
        passwords: "abcd",

    };

    const datadopy = {
        ...data,
        id: 123 
    };

    console.log(datadopy);

    let char1 = "random string"; //we can same do this with an array
    let chopper = {
        ...char1
    };
    console.log(chopper);
    

    //Rest
    function sumer(...argss){
        for(let i=0; i<argss.length;i++){
            console.log(`you gave us ${argss[i]} element`); 
        }
        console.log(arguments); //arguments is not a array but a inbuilt function

        return argss.reduce((red,el)=>red+el);
    }

    console.log(sumer(1,3,2));


    //Destructuring

    let names = ["tony", "bruce", "steve","Hogward","random1", "random2", "random3","random4"];
    let [winner, runnerup, secondrunnerup, ...rest] = names;
    console.log(winner,runnerup, secondrunnerup, ...rest); 



    const stud = {
        name: "Rahul",
        age : 18,
        city: "Hisar",
        subjects: ["English", "Hindi", "Math"],
        username: "asdljaldk@123"
    }

    let {username: secret, name:secret1, age:secret2, city:secret3, district:secret4 = "Bhiwani"} = stud;

    console.log(secret,secret1,secret2,secret3,secret4);
     

    
}catch(er){
    console.log("Something goes wrong, err is below");
    console.log("\n");
    console.log(er);
}
