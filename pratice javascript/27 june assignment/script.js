// 1. create an object name fruits which should atleast 5 keys such that fruit name, fruit price.... it should have an array as key now 
// you have to pass this object in a function which will accept it in destructure format now print all the information and call a function which will going to pass the key array into another function and call one function that will pass the object as key into another 
    const fruits={
        fruitname:"apple",
        fruitprice:100,
        quality:"fresh",
        weight:"1kg",
        vitamins:["A","c","E"]
    }
    function fruitdetails({fruitname,fruitprice,quality,weight,vitamins}){
        console.log("Name:"+ fruitname);  
        console.log("price:"+fruitprice);  
        console.log("quality:"+quality);
        console.log("weight"+weight);
        vitamins(vitamins);
    }
    function vitamins(vitamins){
        vitamins.forEach(vitamin => {
            console.log("vitamin"+vitamin)
            
        });
    }



//   Create an object named user with at least 5 keys (e.g., userName, userAge, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.  

// Product Data
const product={
    fruitname:"apple",
    fruitprice:100,
    quality:"fresh",
    weight:"1kg",
    vitamins:["A","c","E"]
}
function fruitdetails({fruitname,fruitprice,quality,weight,vitamins}){
    console.log("Name:"+ fruitname);  
    console.log("price:"+fruitprice);  
    console.log("quality:"+quality);
    console.log("weight"+weight);
    vitamins(vitamins);
}
function vitamins(vitamins){
    vitamins.forEach(vitamin => {
        console.log("vitamin"+vitamin)
        
    });
}

// 3. Create an object named product with at least 5 keys (e.g., productName, productPrice, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

// Order Data

// 4. Create an object named order with at least 5 keys (e.g., orderId, orderDate, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.
// Employee Data

// 5. Create an object named employee with at least 5 keys (e.g., employeeName, employeeId, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

// Customer Data

// 6. Create an object named customer with at least 5 keys (e.g., customerName, customerAddress, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

// Inventory Data

// 7. Create an object named inventory with at least 5 keys (e.g., itemId, itemQuantity, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

// Vehicle Data

// 8. Create an object named vehicle with at least 5 keys (e.g., vehicleModel, vehiclePrice, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.