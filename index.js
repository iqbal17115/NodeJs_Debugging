// var a=5;
// var b=10;
// var c;
// var d=20;

// var x=a+b;
// var y=c+d;

// var z=y-x;

// console.log(z);

var axios=require('axios');

var URL="https://restcountries.eu/rest/v2/all";

axios.get(URL).then(function(response){
     
   let countryList = response.data;
   let statusCode = response.status;

   console.log(countryList);
   console.log(statusCode);

}).catch(function(error){
  console.log(error);
})