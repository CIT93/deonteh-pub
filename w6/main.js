const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apartment") {
    houseSizePoints = 2;
  };
  return houseSizePoints;
};

function determineHouseHoldPts(numberInHousehold) {
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
  };
  return houseHoldPoints;
};

function displayOutput(obj) {
  for (obj of cfpData) {
    const newH1 = document.createElement("h1");
    newH1.textContent = `Hello ${obj.firstN} ${obj.lastN},`;
    const newH2 = document.createElement("h2");
    newH2.textContent = `Your Carbon Footprint total score is ${obj.cfpTotal}`;
    const newP = document.createElement("p");
    newP.textContent = `This Carbon Footprint total score is based on the ${obj.houseM} people in your household (score of ${obj.houseMPTS}) living in a(n) ${obj.houseS} sized home (score of ${obj.houseSPTS}).`;
    newP.textContent += ` The Carbon Footprint household and home size scores total to ${obj.cfpTotal}.`;
    OUTPUT.appendChild(newH1);
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newP);
  };
};

function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstN: firstName,
    lastN: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
};

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.household.value);
  const houseSize = FORM.housesize.value;
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
});