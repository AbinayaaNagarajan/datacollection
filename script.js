let data =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let rows = data.split("\n"); // Split the data into rows
let headers = rows[0].split(","); // Extract the headers from the first row
let numberOfColumns = headers.length; // Number of columns

console.log(numberOfColumns);

// Initialize the two-dimensional array with headers as the first row
let dataArr = [
  headers,
  rows[1].split(","),
  rows[2].split(","),
  rows[3].split(","),
];

console.log(dataArr);



// Part 3 Transformation of Data
let data1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let rows1 = data1.split("\n");
let headers1 = rows1[0].split(",");
let numberOfColumns1 = headers1.length;

// Initialize the two-dimensional array with headers as the first row
let data1Arr = [headers1];

// Populate the rest of the array dynamically
for (let i = 1; i < rows1.length; i++) {
  let rowData = rows1[i].split(",");
  let rowObject = {};

  // Create an object for each row with lowercase keys
  for (let j = 0; j < numberOfColumns1; j++) {
    rowObject[headers1[j].toLowerCase()] = rowData[j];
  }

  data1Arr.push(rowObject);
}

console.log("Initial Result:");
console.log(data1Arr.slice(1)); // Remove the header row from the result

//part 4

// Remove the last element from the sorted array
data1Arr.pop();

// Insert the object at index 1
let newObject = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
data1Arr.splice(1, 0, newObject);

// Add the object to the end of the array
let anotherObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
data1Arr.push(anotherObject);

console.log("Final Result:");
console.log(data1Arr.slice(1)); // Remove the header row from the final result

// Calculate the average age using a loop
let totalAge = 0;
for (let i = 1; i < data1Arr.length; i++) {
  totalAge += parseInt(data1Arr[i].age, 10);
}

let averageAge = totalAge / (data1Arr.length - 1);
console.log("Average Age:", averageAge);

//part 5

// Assuming you have the final array after the operations
let finalResult = data1Arr.slice(1); // Exclude the header row

// Function to convert an object to a CSV row
function objectToCsvRow(obj) {
  return Object.values(obj).join(",");
}

// Convert each object in the array to a CSV row
let csvRows = finalResult.map(objectToCsvRow);

// Add the header row to the CSV content
let csvContent = [headers1.join(",")].concat(csvRows).join("\n");

console.log("CSV Format:");
console.log(csvContent);
