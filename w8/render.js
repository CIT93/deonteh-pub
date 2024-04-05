const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form")
function renderTblHeading() {
  TBL.innerHTML = ''
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "HouseHold",
    "HouseSize",
    "Footprint",
    "Actions"
  ];

  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

function renderTblBtn(obj, index, data){
  const tdActions = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  tdActions.appendChild(btnEdit);
  tdActions.appendChild(btnDel);
  btnDel.addEventListener('click', function(e){
  
    data.splice(index, 1);
    renderTbl(data)
    
  })
  btnEdit.addEventListener("click", function(e){
    FORM[1].value= obj.firstname;
    FORM[2].value = obj.lastname;
    FORM[3].value = obj.household;
    FORM[4].value = obj.housesize;
    data.splice(index,1);
    renderTbl(data);
  } )
  return tdActions;
}

function renderTblBody(data){
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index)
    const tr = document.createElement("tr");
    for(const[key, value] of Object.entries(obj)){
     if(key !== "lastN" && key !== "houseMPTS" && key !== "houseSPTS"){
      console.log("built td")
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
      } 
   }
    const td = renderTblBtn(obj, index, data);
     tr.appendChild(td);
     tbody.appendChild(tr);
     
});
return tbody;
}

function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };