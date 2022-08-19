// Question to be answered: will today be a good day?

const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }


  //let goodDay = true
  let currentTime = 7
  let wellRested = false
  let niceBreakfast = true
  let haveWork = false
  let work = 0
  let englishClassTime = 2
  let aframClassTime = 2
  let schoolTimeTotal = aframClassTime + englishClassTime
  

showOnPage('This output is based on the following global variable data')
showOnPage(' what time is it?' + currentTime)
showOnPage('Did I have a nice breakfast yet?----->' + niceBreakfast)
showOnPage('Do I have work today or am I off?----->' + haveWork)
showOnPage('How long do I have school?----->') + schoolTimeTotal
showOnPage('<----- End of global variale data ----->')


if (wellRested === true && niceBreakfast === true){
    showOnPage('Today is a good start of a good day and I hade a wonderful breakfast.')
}else if (wellRested === false && niceBreakfast === true){
    showOnPage('I am still tired today is not going good, but at least I had a good breakfast.')
}else if (wellRested === true && niceBreakfast === false){
    showOnPage('I slept good but do not have time to eat, so we will see how today goes.')
}else {
    showOnPage('I did not sleep good and I am starving today is going to be awful.')

}


if (aframClassTime > 0 || englishClassTime > 0 ){
    showOnPage('I have class today so it will be a productive day')
}else if(aframClassTime === 0 && englishClassTime === 0){
    showOnPage('No class lets kick back and relax unless we have work.')
}else {
    showOnPage('lets not speak on that.')
}
if (work > 0 || haveWork === true){
    let badDay = haveWork
   showOnPage('ughhh I have work today is so bad.')
}else if ( work === 0 && haveWork === false){
    showOnPage('No work lets have a wonderful and restful day.')
}else {
   showOnPage('What is this work you speak of?')
}