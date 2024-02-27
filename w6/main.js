const FORM = document.getElementById("form")
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
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPts = 0;
  if (numberInHousehold === 1) {
    houseHoldPts = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPts = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPts = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPts = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPts = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPts = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPts = 2;
  }
  return houseHoldPts;
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });
}

function displayOutput() {
  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint Total of ${obj.cfpTotal}`;
    const newP = document.createElement("p");
    newP.textContent = `Members of household of ${obj.houseM} (Score: ${obj.houseMPTS}),`;
    newP.textContent += ` and a ${obj.houseS} size home (Score:${obj.houseSPTS}).`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP)
  }
}

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firsname.value
  const lastName = FORM.lastname.value
  const houseMembers = parseInt(FORM.housemembers.value)
  const houseSize = FORM.housesize.value
  start(houseHoldMembers, houseSize)
  OUTPUT.innerHTML = "";
  displayOutput()
  FORM.reset()
})

// The apartment is not correct because ot needs to be the same in both files

// Users dont always give good data!