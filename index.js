//////let x =23;
////console.log(x);
////
//let num = "123";
//let result = Number(num);
//console.log(num, typeof num);
////console.log(result, typeof result);
//let marks = 72;
//let a = ("marks");
//console.log(a)




////        Arrays literals
//const myFirstArr = ["h" , "e", "1", "1", "o" ];
//console.log(myFirstArr);
//
//// new meyworkds
//
//const hobbiesArr = new Array("cycling", "reading", "swimming");
//console.log(hobbiesArr);
////       emty 
//const emtyArr = [];
//console.log(emtyArr);
//
//// array of numbers
//const countArr = [1, 2, 3, 4, 5, 6,];
//console.log(countArr);
// const mixedArr = ["exercies"  ,23,true, function greet(){console.log("hellow world")}];
// console.log(mixedArr);
// const nestedArrexample = ["walk", 58,["eat", true], 24,];

//const itmesListted = ()=>{};

//     Array methods
//const arrNum = [1,2,3,4,5,6,];
//const resultArr = arrNum.map((eachElement)=> eachElement*10);
//console.log(resultArr);
//const arrArr2 = [1,2,3,4,];

//const restultArr = arrNum2

// fillter metoods
// will create a new array that passes the condation 
//const arrNum = [1,2,3,4,5,6,];
////arrNum.filter();
//const resultArr = arrNum.filter((Element) => Element===2 || Element ===4);
//console.log(resultArr);
//==================


// five ocian value
//const ocean1 = "pacific";
//const atlanticOcean = "atlanticOcean";
//const indianOcean = "indianOcean";
//const Artctic = "Artctic";
//const Antaratic = "Antaratic";
//let oceans = ["pacific", "atlanticOcean", "indianOcean", "Artctic", "Antaratic"];
//console.log(oceans);
//console.log(oceans[0]);
//console.log(oceans[3]);
//const arrNum = [10,20,30,40,50];
//console.log(arrNum.every(num)=>30);
//const arrNumric[10,20,30,40,50];
//const result = arrNumric = reduce((total,current)=>total+current);
//console.log(result);
//
//arr.reduce((total,current)=>total+current);
//console.log(arrNumric);
//
//arrNumric= [10, 70,60,40,50,30,20];
//console.log(arrNumric.find((num)=> num > 40));
//
//let animals = ["lion","tiger", "bear", "elephant",
//"dear","Rabbit"];
//let herbivorousAnimals = animals.slice(3,6);
//console.log(animals);
//
//console.log(herbivorousAnimals);
//let arr = [1,2,3,4,5];
//arr.reverse();
//console.log(arr);
////
//let froutArr =["apple",
//"peach","orange"];
//console.log(froutArr.filter((element) => element!=="apple"));
//
//froutArr.push("orange");
//console.log(froutArr.pop());
//console.log(froutArr);
//
//const arrNum =[1,2,3,4,5];
//let sum = 0;
//arrNum.forEach((element) => {
//    sum += element;
//    return sum;
//});
//console.log(sum);
//join method in array
//let arrName = ["h","a","r","r","y"];
//console.log(arrName);
//let name = arrName.join("/ ");
//
//console.log(name);
//
//let studentd = ["roy", 24, ]
//const studentDetails = {
//    name:"hazrat",
//    age:25,
//    hobbies: ["cycling", "reading"],
//
//};
//console.log(studentDetails.name,studentDetails.age, studentDetails.hobbies);
//
//const obj ={
//    number:'digit',
//Name:"start with numbers",
//$name:"inclodes $ sign",
//};
//
//console.log(obj.number);

//let ratingList = document.getElementsByName("serviceRatting");
//console.log(ratingList);function footballPoints(wins, draws, losses) {
//	const footballPoints  win === 3,
//    
//if footbalPoints ===3;
//	consol.log("win");
//	if else footbalPoints >= 1;
//	consol.log("draws");
//	else 
//		consol.log("loses");
//	
//}
//

//onst footballPoints = (wins, draws, losses) => {
//	const pointSystem = {
//		wins: 3,
//		draws: 1,
//		losses: 0
//	};
//	return (pointSystem.wins * wins) + (pointSystem.draws * draws) + (pointSystem.losses * losses);
//;



//
//let element = document.querySelector("*");
//
//
////let allElementlist = document.querySelectorAll("*");
//console.log(document);
setTimeout(()=>{console.log("place order")},2000);
setTimeout(()=>{console.log("cut the fruit")},4000);

setTimeout(()=>{console.log("add water and ice")},1000);

setTimeout(()=>{console.log("start the machine")},1000);

setTimeout(()=>{console.log("select toppings")},3000);

setTimeout(()=>{console.log("serve ice cream")},1000);
// call back methode
//function one(call_steptwo){
//    console.log("step one complated,initiate step two");
//    call_steptwo();
//}
//function two(){
//    console.log("step two complated");
//}
//one();
//two();
let stocks = {
    fruits:["starabary", "grapes", "banana", "apple"],
    liquites:['water',"ice"],
    holter:["cone","cup", "stick"],
    toppings:["choco chips","peanuts"]
}
let order = (call_production) =>{
    console.log("order recevied");
    call_production();
};
//let order = (fruits, call_production)=> {
//    console.log('customer ordered' ${stocks.fruits)
//}


let production = () => {
    console.log("production started")
};
order(production);









