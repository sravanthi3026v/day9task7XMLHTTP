// console.log("hello everyone");
// console.log(4+5);
// var n=39;
// if(n%2===0)
// {
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
// let t3="abc"-3;
// if(Number.isNaN(t3))
// {
//    console.log("true");
// }
// else{
//     console.log("false");
// }

// function getSortedData(...array)
// {
// let sorted=array.sort((a,b)=>a-b);
// return sorted;
// }
// console.log(getSortedData(6,8,2,5,9,12,18,3));

// var person=[
//     {
//         id:"123",
//         firstname:"jhon",
//         lastname:"doe",
//         email:"jhondoe@gmail.com",
//         age:"30",
//         profession:"full stack developer",
//         city:"mumbai",
//         phone:9876543210,
//     },
//     {
//         id:"456",
//         firstname:"jack",
//         lastname:"m",
//         email:"jackm@gmail.com",
//         age:"35",
//         profession:"junior full stack developer",
//         city:"banglore",
//         phone:1234567890,  
//     },
//     {
//         id:"789",
//         firstname:"jane",
//         lastname:"roy",
//         email:"janeroy@gmail.com",
//         age:"32",
//         profession:"junior full stack developer",
//         city:"banglore",
//         phone:9871234561,  
//     },
//     {
//         id:"321",
//         firstname:"jessy",
//         lastname:"jill",
//         email:"jessyjill@gmail.com",
//         age:"40",
//         profession:"senior full stack developer",
//         city:"mumbai",
//         phone:1233214567,  
//     },
// ];
// for(var i=0;i<=person.length;i++){
//     console.log(person[i]);
// }
// person.forEach((Element)=>{
//     console.log(Element);
// });
// for(var key in person){
//     console.log(key);
// }
// for(var i of person){
//     console.log(`
//     ${i.city}
//     ${i.age}
//     `);
// }

// var obj=[
//     {
//         person:"Name1",
//         age:20,
//         company:"Guvi",
//     },
//     {
//         person:"Name2",
//         age:30,
//         company:"Guvi geek",  
//     },
//     {
//         person:"Name3",
//         age:40,
//         company:"Guvi geek network",  
//     },
// ];
// for(var i=0;i<=obj.length;i++){
//   console.log(obj[i]);
// };
// obj.forEach((data) => {
//   console.log(`
//      ${data.person}
//      ${data.age}
//      ${data.company}
//       `);
// });
// for(var key in obj){
//  console.log(`
//  ${obj[key].person}
//  ${obj[key].age}
//  ${obj[key].company}
//  `);
// }
// for(var i of obj){
//  console.log(`
//   ${i.company}
//   ${i.person}
//   ${i.age}
//     `);
// }

// let myResume={
//     "basics": {
//       "name": "Jhon",
//       "age":25,
//       "email": "jhon@gamil.com",
//       "phone": 9876543211,
//       "address": {
//         "city": "Chennai",
//         "state": "Tamilnadu",
//         "country": "India"
//       },
//     },
//     "education": [
//       {
//         institution: "APJ College Of Engineering",
//         department: "CSE",
//         studyType: "fulltime",
//         year: "2015-2019",
//         gpa: 7.5,
//       }
//     ],
//     "skills": [
//       {
//         "language": "python,javascript",
//         "level": "beginer",
//       }
//     ],
//     "languages": [
//       {
//         "language": "Tamil,Enlish",
//       }
//     ],
//   }
//   console.log(myResume);


// var obj1={
//   name:"person1",
//   age:5
// };
// var obj2={
//   age:5,
//   name:"person1"
// };

// let s1=JSON.stringify(obj1);
// let s2=JSON.stringify(obj2);
// console.log(s1===s2);


// var xhr=new XMLHttpRequest();
// xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// xhr.onload=function()
// {
//   let data=JSON.parse(this.response);
//    for(let i=0;i<data.length;i++)
//  {
//     let country=data[i];
       // console.log(country.flag);
//        console.log(country.name);
//        console.log(country.region);
//        console.log(country.subregion);
//        console.log(country.population);

//  }
// }
// xhr.send();


// (function(arr){
//        let odd=[];
//        for(let i in arr){
//               if(arr[i]%2!==0){
//                      odd.push(arr[i]);
//               }
//        }
//        console.log(odd);
// })([1,2,3,4,5,6,7,8,9,10]);

// let getodd=function(arr){
//        let odd=[];
//        for(let i in arr){
//               if(arr[i]%2!==0){
//                      odd.push(arr[i]);
//               }
//        }
//        return odd;
// }
// console.log(getodd([1,2,3,4,5,6,7,8,9,10]));

// (function rotate(arr,k){
//        var temp=[];
//        for(var i=arr.length-k;i<arr.length;i++){
//               temp.push(arr[i]);
//               }
//        for(i=0;i<arr.length-k;i++){
//               temp.push(arr[i]);
//               }
//        console.log(temp.join(" "));
// })([1,2,3,4,5,6,7,8,9,10],4);

// let rotatearray=function(arr,k){
//        var temp=[];
//        for(var i=arr.length-k;i<arr.length;i++){
//        temp.push(arr[i]);
//        }
//        for(i=0;i<arr.length-k;i++){
//         temp.push(arr[i]);
//        }
//        return temp.join(" ");
//        }
//        console.log(rotatearray([1,2,3,4,5,6,7,8,9,10],4));

// (function sum(arr){
//        let sum=0;
//        for(let i in arr){
//               sum += arr[i];
//        }
//        console.log(sum);
// })([1,2,3,4,5,6,7,8,9,10]);


// let sumarray=function(arr){
//        let sum=0;
//        for(let i in arr){
//               sum += arr[i];
//        }
//        return sum;
// }
// console.log(sumarray([1,2,3,4,5,6,7,8,9,10]));

// var num=3;
// var num1=6;
// for(var i=1;i<=num1;i++){
// console.log(num);
// }

// (function(city){
//        let unique_city=[new Set(city)];  
//        console.log(unique_city);
// })(["karimnagar","hyd","wrngl","karimnagar","hyd",13,14,13]);

// let removeDuplicates=function(city){
//        let unique_city=[new Set(city)];
//        return unique_city;
// }
// console.log(removeDuplicates(["karimnagar","hyd","wrngl","karimnagar","hyd",13,14,13]));

// (function palindrome(arr){
//        var temp=[];
//        for(i=0;i<arr.length;i++){
//        var s=arr[i];
//        var flag=true;
//        var k=0;
//        var j=s.length-1;
//        while(k<j){
//            if(s[k++]==s[j--])
//            continue;
//            else{
//                flag=false;
//                break;
//            }
//        }
//        if(flag==true)
//        temp.push(arr[i]);
//        }
//        console.log(temp);
//    })(["car","racecar","12321"]);

// (function palindrome(arr){
//        var temp=[];
//        for(i=0;i<arr.length;i++){
//        var s=arr[i];
//        var flag=true;
//        var k=0;
//        var j=s.length-1;
//        while(k<j){
//            if(s[k++]==s[j--])
//            continue;
//            else{
//                flag=false;
//                break;
//            }
//        }
//        if(flag==true)
//        temp.push(arr[i]);
//        }
//        console.log(temp);
//    })(["car","racecar","12321"]);

//    (function median(arr1,arr2){
//        var arr3=[];
//        arr3=arr3.concat(arr1);
//        arr3=arr3.concat(arr2);
//        arr3.sort(function(a,b){return a-b});
//        if(arr3.length%2==0){
//            console.log(arr3[arr3.length/2]+arr3[arr3.length/2-1]);
//        }
//        else{
//            console.log(math.floor(arr3[arr3.length/2]));
//        }
//        })([1,3,2,4,6],[5,8,7]);

// 1.) This function converts the data into Lower case first 
// 2.) Then it splits the data into arrays 
// 3.) The charAt() returns a particular character from string 
// 4.) The slice() takes a section and returns a new string 
// 5.) The join() joins all characters of the array into a string data
// function Suman_Camel_Case(data) { 
// data = data.toLowerCase().split(" "); 
// for (let i = 0; i < data.length; i++) { 
// data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
// }
//  return data.join(" ");
// } 
// let name_1 = "my name is sravanthi"; 
// console.log(name_1); 
// console.log(Suman_Camel_Case(name_1));

// class uber{
//        constructor(distance,price){
//               this.distance = distance;
//               this.price = price;
//        }
//        getprice(){
//               return this.distance*this.price;
//        }
// }
// let taxi=new uber(2,100);
// console.log(taxi.getprice());

class Person {
     static CompanyName = "Amazon"; //static member
       constructor(name, age, address) {
         //set the values for 3 properties
         this.name = name;
         this.age = age;
         this.address = address;
       }
       //instance method
       getData() {
         let personData = `
           Name: ${this.name}
           Age: ${this.age}
           Address: ${this.address} 
         `;
         console.log(personData);
       }
       //static method
       static getCompanyName() {
         console.log(Person.CompanyName);
       }
     }
     
     class Employee extends Person {
    //static companynew = "Google";
       constructor(name, age, address, Designation, salary) {
         super(name, age, address);
         this.Designation = Designation;
         this.salary = salary;
       }
       //Instance Method
       getData() {
         let employeeData = `
             Name: ${this.name}
             Age: ${this.age}
             Address: ${this.address}
             Designation: ${this.Designation}
             Salary: ${this.salary}
             `;
         console.log(employeeData);
       }
     
       //Static Method
       static getCompanyName() {
         console.log(Person.CompanyName);
        // console.log(Employee.companynew);
       }
     }
     
     //create an object for employee
     let employee1 = new Employee(
       "Jack",
       56,
       "Bangalore",
       "Mern Developer",
       "10000$"
     );
     employee1.getData(); //obj ref
     Employee.getCompanyName(); //class
     
     //create an object for Person
     // let person1 = new Person("John", "45", "Mumbai");
     // person1.getData(); //obj ref
     // Person.getCompanyName(); //class
     
     // From parent=>child
     // Parent->child
     