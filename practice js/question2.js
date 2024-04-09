//Map the array to get an array of user names
let  obj1=[{
    id :1,
    username: "rahul",
    age: 24,
    email : "rahul@gmail.com",
    city: 'USA',},

{ 
    id :2,
    username: "mohan",
    age: 26,
    email : "mohan@gmail.com",
    city: 'dubai'
},
   
{ 
    id :3,
    username: "rohit",
    age: 23,
    email : "rohit@gmail.com",
    city: 'singapur'
},
   
{ 
    id :4,
    username: "mohit",
    age: 27,
    email : "mohit@gmail.com",
    city: 'newzealand'
},
   
{ 
    id :5,
    username: "rohan",
    age: 27,
    email : "rohan@gmail.com",
    city: 'nepal'
},
   
{ 
    id :6,
    username: "toshi",
    age: 22,
    email : "toshi@gmail.com",
    city: 'africa'
},
   
{ 
    id :7,
    username: "john",
    age: 28,
    email : "john@gmail.com",
    city: 'austrialia'
},
   
{ 
    id :8,
    username: "jack",
    age: 29,
    email : "jack@gmail.com",
    city: 'argentina'
},
   
{ 
    id :9,
    username: "riya",
    age: 24,
    email : "riya@gmail.com",
    city: 'japan'
},
   
{ 
    id :10,
    username: "priya",
    age: 26,
    email : "priya@gmail.com",
    city: 'india'
},
   ];
      
   let data=obj1.map((item)=>{
    return item.username;
   })
   console.log(data);