
    
    //      let a=[];
    //     document.querySelector("#btn1").addEventListener('click',function(){
    //         let b=document.querySelector('#enter').value;
    //         a.push(b);//push it insert the value
    //         document.getElementById('display').innerHTML=a;

    //     }) 
    //     document.querySelector("#btn2").addEventListener('click',function(){
    //         let b=document.querySelector('#enter').value;
    //         a.pop(b);//delete the inserted value
    //         document.getElementById('display').innerHTML=a;

    //     }) 
    //     -->

   
//     <!-- // Array methods
//     // .push();it add a new index to an array;

//     // .pop();it remove the last element in the array;
//     // .unshift(); it adds a value in the 0 index of the element;\
//     // .shift(); it removes the first element in the array;

//     // .join() it converts the element into string;
//     // .slice() return a copy of a section of an array. [1,2,3,4,5,6] .silce(1,3)
//     // 1,2

//     //.splice()it move the section of the array .[1,2,3,4,5,6] .splice(1,3)
//     //1, 2 ,3 
//     //original array [ 0,4, 5,6 ];

//     //.filter();
//     // const arr=[0, 1, 2, 3, 4 ,  5, 6, 7 ];
//     // console.log(arr[0]);
//     // console.log(arr.includes(9));
//     // console.log(arr.indexof(3));
    
//  -->
// let arr=[95, 93, 95,67,56];
// console.log(arr[0]);

// let heroes =['ironman','spiderman','superman','thor','shaktiman'];
// for(let i=0;i<heroes.length;i++ ){
//     console.log(heroes[i]);
// }
// for(let i of heroes){
//     console.log(i.toUpperCase());
// }

// for a given array with marks of students [ 85, 97,44,37,76,60]find the average marks of the entire class.


// let marks =[ 85, 97,44, 37, 76, 60];
// let sum=0;
// for(let val of marks ){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`${avg}`);
// q3 for a given array with prcws of 5 items -> [250, 645 ,300, 900, 50]
// all items have an offer of 10% off on them change the array to store final price after applying offer.
 let arr=[250, 645, 300,900, 50];
 for( let i of arr     ){
    offer =i/10;

   i=i-offer;
 } 
 console.log(i);
 












