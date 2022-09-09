//Display on page function
const showOnPage = function (text) {
   let newParagraph = document.createElement("p")
   newParagraph.innerHTML = text
   let outputDiv = document.getElementById("output")
   outputDiv.append(newParagraph)
 }
  
  //creating an object called dayStatus that contains different effects on the day.
  // using a method to determine how these effects make the outcome of the day.
  
 // const  dayStatus = {
  //  effectOfDay: {
  //      wonderfulDay:'Today was perfect!',
  //      okayDay:'Today was okay, I was a little busy.',
  //      busyDay:'ughh today was busy and not so good.',
   //     BadDay: 'Today was horrible.',
   //  },
 //   getDayStatus: function (dayStatus){
 //       this.goodDay = dayStatus
  //  },
  //  howDayWent:'',

 //   determineDayType: function(wellRested, niceBreakfast, haveWork, schoolTimeTotal){
  //      if (wellRested === true && niceBreakfast === true && haveWork === false && schoolTimeTotal === 0){
   //         this.howDayWent = this.effectOfDay.wonderfulDay
   //       }else if (wellRested === true && niceBreakfast === true && haveWork === true && schoolTimeTotal === 0 ){
   //         this.howDayWent = this.effectOfDay.okayDay
   //       }else if (wellRested === true && niceBreakfast === true && haveWork === true && schoolTimeTotal > 0){
   //         this.howDayWent = this.effectOfDay.busyDay
   //       }else {
   //         this.howDayWent = this.effectOfDay.BadDay
  //            }
  //  },
 // }
 // dayStatus.determineDayType(true, true, false, 0)
 // showOnPage('As of now,' + dayStatus.howDayWent)

 // dayStatus.determineDayType(true, true, true, 0)
 // showOnPage('As of now,' + dayStatus.howDayWent)

 // dayStatus.determineDayType(true, true, false, 4)
 // showOnPage('As of now,' + dayStatus.howDayWent)

 // dayStatus.determineDayType(true, true, true, 6)
//  showOnPage('As of now,' + dayStatus.howDayWent)


//An Array that has the status of different types of days and what day of the week.
  const dayStatus=[ 
   { 
    Day:'Monday',
     TypeOfDay:'Today was perfect!',
    },
    {
    Day:'Tuesday',
    TypeOfDay:'Today was okay, I was a little busy.',
    },
    {
        Day:'Friday',
        TypeOfDay:'ughh today was busy and not so good.',
    },
      {
        Day:'Sunday',
        TypeOfDay: 'Today was horrible.',
    },
    ]

// created function to determine what type of day it is!
  let dayType = function (wellRested, niceBreakfast, haveWork, schoolTimeTotal) {
     let dayOutcome = ''
        if (wellRested === true && niceBreakfast === true && haveWork === false && schoolTimeTotal === 0) {
            dayOutcome = dayStatus.TypeOfDay
        } else if (wellRested === true && niceBreakfast === true && haveWork === true && schoolTimeTotal === 0) {
            dayOutcome = dayStatus.TypeOfDay
        } else if (wellRested === true && niceBreakfast === true && haveWork === true && schoolTimeTotal > 0) {
            dayOutcome = dayStatus.TypeOfDay
        } else {
            dayOutcome= dayStatus.TypeOfDay
        }
        return dayOutcome
    }


// created a for each loop that tells me my type of day
const myDayType = function (dayType){
    let myDayType = ''
    dayStatus.forEach(function(item) {
        if (dayType === item.dayType){
            myDayType = item;
        }else {
            item++
        }
    })
        return myDayType
    
}

//Output to page
let result = dayType(true, true, false, 0)
let dayResults = myDayType(result)
showOnPage('Today is ${dayStatus.Day} and so far ${dayStatus.TypeOfDay}')