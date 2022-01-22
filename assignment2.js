//for loop
//var number =[1,2,3,4,5]
//for(let i =1; i<5;i++){
  //  console.log(i);
//}


//for in

//var student={
    //name:"moulishwaran",
    //age:27,
  //  address:"thanjavur,tamilnadu"
//};
//for(var i in student){
  //  console.log(i)
//}

//for each

//var names = ["jerry","tom","micky"];
//names.forEach(function1);
//function function1(currentvalue,index) {
  //  console.log("index inthe array is: "+index +" :: value is:"+currentvalue);
 
//}

//for of 

var p = {
    0: "value1",
    "b": "value2",
    key: "value3"
};

for (var key of Object.keys(p)) {
    console.log(key + " -> " + p[key])
}
