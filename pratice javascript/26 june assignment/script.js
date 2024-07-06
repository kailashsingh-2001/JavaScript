// 1. create an object of user as created in mongodb and you have to pass that object in function and print all its values by destructing it.
          users={
          
            "id": "1",
            "username": "Prajjal Dhar",
            "useremail": "prajjal.dhar@gmail.com",
            "password": "Regex1234",
            "firstName": "Prajjal",
            
            "role": "admin",
            "gender": "Male",
            "age": 28,
            "city": "Goa",
            "salary": 300000,
            "skills": ["Java", "Python"]
          }
        function printdetails({id,username,useremail,password,firstName,role,gender,age,city,salary}){
            console.log(`id:${id} username:${username} email:${useremail} password:${password} firstName:${firstName} lastname:${lastName} role:${role} gender:${gender}`)

         }
         printdetails(users)
// 2. without destructing
     users=
            {
                "id": "1",
                "username": "Prajjal Dhar",
                "useremail": "prajjal.dhar@gmail.com",
                "password": "Regex1234",
                "firstName": "Prajjal",
                
                "role": "admin",
                "gender": "Male",
                "age": 28,
                "city": "Goa",
                "salary": 300000,
                "skills": ["Java", "Python"]
              }
            
   Details(){
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
  }



function Details(user) {
  user.printDetails();
}
Details(users)

// 3.you have to use the mongodb user dataset to pass object in function now from that function you have to pass the skills key pass as object to another function print all its skills.using foreach method
   const users={
                "id": "1",
                "username": "Prajjal Dhar",
                "useremail": "prajjal.dhar@gmail.com",
                "password": "Regex1234",
                "firstName": "Prajjal",
                
                "role": "admin",
                "gender": "Male",
                "age": 28,
                "city": "Goa",
                "salary": 300000,
                "skills": ["Java", "Python"]
              }
               function printskills(skills){
                skills.foreach(skill=>{
                  console.log("skill:"+skill);
                });
               }
                function anotherfunction(users){
                  const {skills}=users;
                  printskills(skills);

                }
                anotherfunction(users)


// function function2(skills) {
//   skills.forEach((skill) => {
//      console.log(skill);
//    });
//  }

    

// 4. you have to use the mongodb user dataset to pass object in function now from that function you have to pass the skills key pass as object to another function print all its skills using this method.
// hint:
// const skills = ["java", "cpp", "python"];
// const [a, b, c] = skills;
// console.log(a);
// console.log(b);
// console.log(c);
const users={
  "id": "1",
  "username": "Prajjal Dhar",
  "useremail": "prajjal.dhar@gmail.com",
  "password": "Regex1234",
  "firstName": "Prajjal",
  
  "role": "admin",
  "gender": "Male",
  "age": 28,
  "city": "Goa",
  "salary": 300000,
  "skills": ["Java", "Python","cpp","react"]
}
function details(skills){
  const [a,b,c,d]=skills;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  
  

}

