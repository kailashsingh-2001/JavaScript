//Filter orders with an amount greater than 50.

let obj =[
    {
        id :1,
        username: "rahul",
        age: 24,
        email : "rahul@gmail.com",
        city: 'USA',
        order:{
            amount:30,

        }
    },
    
    { 
        id :2,
        username: "mohan",
        age: 26,
        email : "mohan@gmail.com",
        city: 'dubai',
        order:{
            amount:20,

        }
    },
       
    { 
        id :3,
        username: "rohit",
        age: 23,
        email : "rohit@gmail.com",
        city: 'singapur',
        order:{
            amount:60,

        }
    },
       
    { 
        id :4,
        username: "mohit",
        age: 27,
        email : "mohit@gmail.com",
        city: 'newzealand',
        order:{
            amount:70,

        }
    },
       
    { 
        id :5,
        username: "rohan",
        age: 27,
        email : "rohan@gmail.com",
        city: 'nepal',
        order:{
            amount:80,

        }
    },
       
   
    
]
let data=obj.filter((item)=>{
    return (item.order.amount>50);
})

console.log(data);



