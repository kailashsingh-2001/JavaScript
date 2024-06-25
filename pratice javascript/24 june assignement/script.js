//1. aapko arrow function ke madad se 4 input lena hai aur uska sum calculate karna hai'
// 2. using annoymous arrow function create a function which does factorial of 5 
     const factorialof5 =(n=>{
        const factorial =num => num<=1 ? 1 :num * factorial(num-1);
        return factorial(n);
     })(5)
     .console.log(factorialof5);
// 3. use the concept of hoisiting and call a factorial function without declaring it and then define after calling
// 4. use the concept of immediately invoked function to check whether a number is even or odd. 
// 5. using the concept of parameterised function constructor call factorial function