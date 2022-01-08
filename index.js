let getodd=(arr)=>{
  let odd=[];
  for(let i in arr){
      if(arr[i]%2!==0){
          odd.push(arr[i]);
      }
  }
  return odd;
  }
  console.log(getodd([1,2,3,4,5]));

myName=data=> {
  data=data.toLowerCase().split(" ");
  for(var i=0;i<data.length;i++){
    data[i]=data[i].charAt(0).toUpperCase()+data[i].slice(1);
  }
return data.join(" ");
  }
let name="i am sravanthi";
console.log(myName(name));

sum=(arr)=>{
  let sum=0;
  for(var i=0;i<arr.length;i++){
    sum +=arr[i];
  }
  return sum;
}
console.log(sum([1,2,3,4,5]));

 prime=(arr)=>{
  let temp=[];
  for(var i=0;i<arr.length;i++){
    var flag=true;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j==0){
        flag=false;
        break;
      }
    }
    if(flag==true){
      temp.push(arr[i]);
    }
  }
  return temp.join(" ");
}
console.log(prime([3,4,5,6,7,8,9,10,11,12,13,14,15]));

palindrome=(arr) => {
  var temp=[];
  for(var i=0;i<arr.length;i++){
    var s=arr[i];
    var flag=true;
    var j=0;
    var k=s.length-1;
    while(j<k){
if(s[j++]==s[k--])
continue;
else{
  flag=false;
  break;
}
}
if(flag==true)
temp.push(arr[i]);
    }
    return temp;
  }
  console.log(palindrome(["car", "racecar", "12321"]));