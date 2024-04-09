//Map the array to get an array of order IDs.
let obj =[
    {
        id :1,
        username: "rahul",
        age: 24,
        email : "rahul@gmail.com",
        city: 'USA',
        order:{
            amount:30,

        },
        orderid:[ 1234 , 45454 , 56565 , 78478]
    },
    
    { 
        id :2,
        username: "mohan",
        age: 26,
        email : "mohan@gmail.com",
        city: 'dubai',
        order:{
            amount:20,

        },
        orderid:[ 1234 , 45454 , 56565 , 78478]

        
    },
       
    { 
        id :3,
        username: "rohit",
        age: 23,
        email : "rohit@gmail.com",
        city: 'singapur',
        order:{
            amount:60,

        },
        orderid:[ 1234 , 45454 , 56565 , 78478]
    },
       
    { 
        id :4,
        username: "mohit",
        age: 27,
        email : "mohit@gmail.com",
        city: 'newzealand',
        order:{
            amount:70,

        },
        orderid:[ 1234 , 45454 , 56565 , 78478]
    },
       
    { 
        id :5,
        username: "rohan",
        age: 27,
        email : "rohan@gmail.com",
        city: 'nepal',
        order:{
            amount:80,

        },
        orderid:[ 1234 , 45454 , 56565 , 78478]
    },
       
   
    
]
let data=obj.map((item)=>{
    return item.orderid;
})
console.log(data);