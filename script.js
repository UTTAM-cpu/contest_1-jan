/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(printmap);
  function printmap(arrayElement){
    if(arrayElement.profession === "developer"){
      console.log(arrayElement);
    }
  }
}

function PrintDeveloperbyForEach() {
  arr.forEach(forEachPrint);

  function forEachPrint(arrayElement){
    if(arrayElement.profession === "developer"){
      console.log(arrayElement);
    }
  }
}

function addData() {
  let newObject= {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newObject);
  console.log(arr);
}

function removeAdmin() {
  let filteredArray=arr.filter(function(value){
    if(value.profession!="admin"){
      return value;
    }
  });
}
console.log(filteredArray);


function concatenateArray() {
  let array = [
    { id: 245, name: "buttler", age: "34", profession: "Engineer" },
    { id: 300, name: "Morish", age: "28", profession: "Doctor" },
    { id: 800, name: "Jeason", age: "40", profession: "professor" },
  ];

  let CombinedArray=arr.concat(array);
  console.log(CombinedArray);
}
