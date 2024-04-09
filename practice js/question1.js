// Filter users who are aged 25 or younger.




let  obj1=[{
    id :1,
    name: "rahul",
    age: 24,
    email : "rahul@gmail.com",
    city: 'USA',},

{ 
    id :2,
    name: "mohan",
    age: 26,
    email : "mohan@gmail.com",
    city: 'dubai'
},
   
{ 
    id :3,
    name: "rohit",
    age: 23,
    email : "rohit@gmail.com",
    city: 'singapur'
},
   
{ 
    id :4,
    name: "mohit",
    age: 27,
    email : "mohit@gmail.com",
    city: 'newzealand'
},
   
{ 
    id :5,
    name: "rohan",
    age: 27,
    email : "rohan@gmail.com",
    city: 'nepal'
},
   
{ 
    id :6,
    name: "toshi",
    age: 22,
    email : "toshi@gmail.com",
    city: 'africa'
},
   
{ 
    id :7,
    name: "john",
    age: 28,
    email : "john@gmail.com",
    city: 'austrialia'
},
   
{ 
    id :8,
    name: "jack",
    age: 29,
    email : "jack@gmail.com",
    city: 'argentina'
},
   
{ 
    id :9,
    name: "riya",
    age: 24,
    email : "riya@gmail.com",
    city: 'japan'
},
   
{ 
    id :10,
    name: "priya",
    age: 26,
    email : "priya@gmail.com",
    city: 'india'
},
   ];
   let data=obj1.filter((item)=>{
     return item.age>25;
   })
   console.log(data);
