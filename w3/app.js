// Question to be answered: Is it the weekend or a weekday, and how did today go?

const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }


// created function to determine if it is the weekend or a week day!
  let whatDay = function(day = "Monday"){
    if (day === "Monday" || day ==="Tuesday"){
       return showOnPage('It is a weekday.')
    }else if (day === "Wednesday" || day === "Thursday"){
        return showOnPage('It is a Weekday.')
    }else if (day === "Friday"){
        return showOnPage('It is Weekends Eve!')
    }else {
        return showOnPage('It is the Weekend!!')
    }
  }

  let wellRested = false
  let niceBreakfast = true
  let haveWork = false
  let schoolTimeTotal = 4

  //created fuction to determine how my day went.
  let goodDay = function(wellRested, niceBreakfast, haveWork, schoolTimeTotal){
    if (wellRested === true && niceBreakfast === true && haveWork === false && schoolTimeTotal === 0){
      goodDayStatus= true
        return showOnPage('Today was a wonderful day from the start!')
    }else if (wellRested === true && niceBreakfast === true && haveWork === true && schoolTimeTotal === 0 ){
        goodDayStatus = true
        return showOnPage('Today was good although I did have work.')
    }else if (wellRested === true && niceBreakfast === true && haveWork === true && schoolTimeTotal > 0){
        goodDayStatus = false
        return showOnPage('Ughh I have work and school, hopefully today goes good.')
    }else {
       goodDayStatus = false
        return showOnPage('Im already having a bad start, today is going to be awful.')
    
    }
    
  }


showOnPage('<b>This output is based on the following global variable data:<b/>')
showOnPage('Did I sleep well? ----->' + wellRested)
showOnPage('Did I have a nice breakfast yet?----->' + niceBreakfast)
showOnPage('Do I have work today or am I off?----->' + haveWork)
showOnPage('How long do I have school?----->' + schoolTimeTotal)
showOnPage('<b><----- End of global variale data -----> <b/>')
whatDay("Friday");
goodDay(true, true, false, 0);