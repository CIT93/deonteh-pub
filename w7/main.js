import { renderTbl } from "../render.js";

 const FORM = document.getElementById("form");
 const OUTPUT = document.getElementById("output");
 const cfpData = [];

 

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
   // displayOutput();
   renderTbl(cfpData);
   FORM.reset();
 });