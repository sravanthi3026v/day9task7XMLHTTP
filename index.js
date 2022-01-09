//Get all the countries from Asia continent/region using filter function
const xhr = new XMLHttpRequest(); 
xhr.open("GET","https://restcountries.com/v3.1/all") 
    xhr.send();  
xhr.responseType = "json";      
xhr.onload = ()=>{ 
    var countries = xhr.response;  
    console.log(countries)

 var temp=countries.filter((country)=>{
       if(country.region=="Asia")
           return country;
         });
console.log(temp);
        }

//get all the countries with a population of less than 2lakhs using filter function
const xhr = new XMLHttpRequest(); 
xhr.open("GET","https://restcountries.com/v3.1/all") 
    xhr.send();  
xhr.responseType = "json";      
xhr.onload = ()=>{ 
    var countries = xhr.response;  
    console.log(countries)

 var temp=countries.filter((country)=>{
       if(country.population<200000)
           return country;
         });
         console.log(temp);
        }

//print the fallowing detailes name,capital,flag using forEach function.

const xhr = new XMLHttpRequest(); 
xhr.open("GET","https://restcountries.com/v3.1/all") 
    xhr.send();  
xhr.responseType = "json";      
xhr.onload = ()=>{ 
    var countries = xhr.response;  
    console.log(countries)

 var temp=countries.filter((country)=>{
   countries.forEach((country)=>{
   console.log(`${country.name.common}`);
      console.log(`${country.capital}`);
      console.log(`${country.flag}`);
   });
       });
       }

//print the total population of countries using reduce function
const xhr = new XMLHttpRequest(); 
xhr.open("GET","https://restcountries.com/v3.1/all") 
    xhr.send();  
xhr.responseType = "json";      
xhr.onload = ()=>{ 
    var countries = xhr.response;  
    console.log(countries)
    let sum = countries.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.population;
    }, 0)     
    console.log(sum)
    }

// print the country which uses us dollars as currency
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function () {

  if (xhr.status >=0 && xhr.status < 300) {
    let countries = JSON.parse(this.response);

    let filtered = countries.filter(function (country) {
      return country.currencies?.hasOwnProperty('USD')
    });
    console.log(filtered)
    filtered.map(country => {
      console.log('country name', country.name.common)
    })
  }
};

xhr.send()











