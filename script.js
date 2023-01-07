/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  
  arr.map((emp) => {
    if(emp.profession === "developer") {
      console.log(emp);
    }
  })
}

function PrintDeveloperbyForEach() {
  
  arr.forEach((emp)=> {
    if(emp.profession === "developer") {
      console.log(emp);
    }
  })
}

function addData() {
  
  let newEmp = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  
  let ans = arr.filter((emp) => {
    return emp.profession != "admin"
  })
  console.log(ans);
}

function concatenateArray() {
  
  let new_arr = [
      { id: 5, name: "Brad", age: "21", profession: "ux-designer" },
      { id: 6, name: "Pit", age: "23", profession: "data-scientist" },
      { id: 7, name: "Lawren", age: "19", profession: "product-manager" },
  ]
   let concateArray = arr.concat(new_arr);
  console.log(concateArray)
}
