/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developers = arr.map((elem) => {
    if (elem.profession === "developer") {
      console.log(
        "id: " +
          elem.id +
          " name: " +
          elem.name +
          " age: " +
          elem.age +
          " profession: " +
          elem.profession
      );
    }
  });
  
}
// PrintDeveloperbyMap(arr);


function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   arr.forEach((elem) => {
    if (elem.profession === "developer") {
      
        console.log(
          "id: " +
            elem.id +
            " name: " +
            elem.name +
            " age: " +
            elem.age +
            " profession: " +
            elem.profession
        );
      
    }
  });
}



function addData() {
  //Write your code here, just console.log
  let employee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  arr.push(employee);
  for (let i = 0; i < arr.length; i++) {
    console.log(
      "id: " +
        arr[i].id +
        " name: " +
        arr[i].name +
        " age: " +
        arr[i].age +
        " profession: " +
        arr[i].profession
    );
  }
}

function removeAdmin() {
  //Write your code here, just console.log
  let new_arr = arr.filter((elem) => {
    if (elem.profession !== "admin") {
      return elem;
    }
  });

  arr = [...new_arr];

  for (let i = 0; i < arr.length; i++) {
    console.log(
      "id : " +
        new_arr[i].id +
        " name : " +
        new_arr[i].name +
        " profession : " +
        new_arr[i].profession
    );
  }
}

function concatenateArray() {
  //Write your code here, just console.log
  let new_arr = [
    { id: 1, name: "Susan", age: 23, profession: "Designer" },
    { id: 2, name: "Umesh", age: 22, profession: "Developer" },
    { id: 3, name: "Somu", age: 22, profession: "Engineer" },
  ];

  let merged_arr = arr.concat(new_arr);
  arr = [...merged_arr];

  for (let i = 0; i < arr.length; i++) {
    console.log(
      "id : " +
        arr[i].id +
        " name : " +
        arr[i].name +
        " profession : " +
        arr[i].profession
    );
  }
}
