//Display on page function
const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
  
  //creating an object called dayStatus that contains different effects on the day.
  // using a method to determine how these effects make the outcome of the day.
  
  const  dayStatus = {
    effectOfDay: {
        wonderfulDay:'Today was perfect!',
        okayDay:'Today was okay, I was a little busy.',
        busyDay:'ughh today was busy and not so good.',
        BadDay: 'Today was horrible.',
     },
    getDayStatus: function (dayStatus){
        this.goodDay = dayStatus
    },
    howDayWent:'',

    determineDayType: function(dayStatus){
        if (wellRested === true && niceBreakfast === true && haveWork === false && schoolTimeTotal === 0){
            this.howDayWent = this.effectOfDay.wonderfulDay
          }else if (wellRested === true && niceBreakfast === true && haveWork === true && schoolTimeTotal === 0 ){
            this.howDayWent = this.effectOfDay.okayDay
          }else if (wellRested === true && niceBreakfast === true && haveWork === true && schoolTimeTotal > 0){
            this.howDayWent = this.effectOfDay.busyDay
          }else {
            this.howDayWent = this.effectOfDay.BadDay
              }
    },
  }
  dayStatus.determineDayType(true, true, false, 0)
  showOnPage('As of now ${dayStatus.howDayWent}')

  dayStatus.determineDayType(true, true, true, 0)
  showOnPage('As of now ${dayStatus.howDayWent}')

  dayStatus.determineDayType(true, true, false, 4)
  showOnPage('As of now ${dayStatus.howDayWent}')

  dayStatus.determineDayType(true, true, true, 6)
  showOnPage('As of now ${dayStatus.howDayWent}')
