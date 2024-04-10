//Filter orders with an amount greater than 50.

const complexData = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
      },
      orders: [
        { orderId: "A123", amount: 50.75, status: "completed" },
        { orderId: "B456", amount: 30.25, status: "pending" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      address: {
        street: "456 Oak St",
        city: "Othercity",
        country: "USA",
      },
      orders: [
        { orderId: "C789", amount: 100.5, status: "completed" },
        { orderId: "D012", amount: 75.2, status: "completed" },
      ],
    },
  ];

// let data = complexData.flatMap((item)=>{
//   return item.orders.filter((d)=>{
//      return d.amount >50;
//   })
 
  
// })
// console.log(data);

let d=complexData.flatMap((item) => item.orders.filter((data)=>data.amount>50));
console.log(d);
