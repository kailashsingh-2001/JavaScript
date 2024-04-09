//Filter users who have at least one order with a status of 'pending'.


let obj =[
    {
        id :1,
        username: "rahul",
        age: 24,
        email : "rahul@gmail.com",
        city: 'USA',
        order:{
            amount:30,
            status: "pending",

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
            status: "pending",

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
            status: "sucessful",

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
            status: "sucessful",

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
            status: "sucessful",

        },
        orderid:[ 1234 , 45454 , 56565 , 78478]
    },
       
   
    
]
let data=obj.filter((item)=>{
    return item.order.status=="pending";
})
console.log(data);