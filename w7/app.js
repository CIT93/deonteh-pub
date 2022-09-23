//An Array that has the status of different types of days and what day of the week.
   let dayStatus = function(){ 
     day = 'Monday'
      TypeOfDay = 'Today was perfect'
     
      if(day = 'Monday'){
        TypeOfDay = 'Today is the start of the week, hopefully it goes good.'
     }else if(day = 'Tuesday'){
        TypeOfDay = 'Today should be better than yesterday.'
     }else if(day = 'Wednesday'){
        TypeOfDay = 'Today is the middle of the week, Lets get it!'
     }else if(day = 'Thursday'){
        TypeOfDay = 'Today is almost friday, I can make it through the week!'
     }else if (day = 'Friday'){
        TypeOfDay = 'Today is Friday!! Lets start the weekend.'
     }else if (day = 'Saturday'){
        TypeOfDay = 'Today is the weekend lets enjoy ourselves!'
     }else if (day = 'Sunday'){
        TypeOfDay = 'Today is church, Lets all have a blessed day and prepare for the upcoming week.'
     }

     return TypeOfDay
    }

    const showDay= document.createElement('h1')
    showDay.innerText = `${(dayStatus())}`
    document.body.appendChild(showDay)
    
    const totalWeek = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday','Saturday', 'Sunday' ]
   

    let toDoDisplay = document.createElement('button')
    toDoDisplay.innerHTML = 'Number of days total in the week'
    document.body.appendChild(toDoDisplay)

    toDoDisplay.addEventListener('click', function () {
        alert(`You currently have ${totalWeek.length} days in total for the week.`)
    })

