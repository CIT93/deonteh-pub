console.log("Top of file");
const cfpData = [];
function determineSizePts(houseSize) {
  console.log("inside block scope");
  let houseStyle = 0;
  if (houseSize === "large") {
    houseStyle = 10;
  } else if (houseSize === "medium") {
    houseStyle = 7;
  } else if (houseSize === "small") {
    houseStyle = 4;
  } else if (houseSize === "apartment") {
    houseStyle = 2;
  }
  
  return houseStyle;
}
function determineHouseHoldPts(numberInHousehold) {
  console.log("inside block scope");
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }

  return houseHoldPoints;
}


console.log("global scope");


function start(houseHoldMembers, houseArea) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSchemantics = determineSizePts(houseArea);
  const total = houseHoldPTS + houseSchemantics;
  cfpData.push([
    houseHoldMembers,
    houseArea,
    houseHoldPTS,
    houseSchemantics,
    total]
  );
 
 
}

function displayOutput(){
  for (arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output")
    const newP = document.createElement("p")
    newP.textContent = `Cardon Footprint total is ${arr[4]} the number of household members is ${arr[0]}, the score for house members is 
    ${arr[2]}, the house hold size is ${arr[1]}, the score for house size is ${arr[3]}`;
    output.appendChild(newP)
  }
  } 

start(1,"small");
start(1,"medium");
start(1,"large");
start(1,"apartment");
start(2,"small");
start(2,"medium");
start(2,"large");
start(2,"apartment");
start(3,"small");
start(3,"medium");
start(3,"large");
start(3,"apartment");
start(4,"small");
start(4,"medium");
start(4,"large");
start(4,"apartment");
start(5,"small");
start(5,"medium");
start(5,"large");
start(5,"apartment");
start(6,"small");
start(6,"medium");
start(6,"large");
start(6,"apartment");


displayOutput ()