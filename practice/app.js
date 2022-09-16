// This code takes the stats of basketball players, determines who is the best and if they are good at defense.

//Display on page function
const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
 
  // Created an array consisting of the players name and stats.
  const players = [{
    name:'Lebron James',
    points: 29,
    rebounds:15,
    assist:8,
    steals:3,
    blocks:3,
    allTimeScoringLeader: 'Will definitly break scoring record!'
  },
  {
    name:'James Harden',
    points: 12,
    rebounds:5,
    assist:11,
    steals:2,
    blocks:0,
    allTimeScoringLeader: 'Is no where close to breaking scoring record.',
  },
  {
    name:'Stephen Curry',
     points: 25,
     rebounds:5,
     assist:9,
     steals:0,
     blocks:0,
     allTimeScoringLeader: 'Is  on track to break scoring record.',
  },
  {
    name:'Zach Lavine',
     points: 15,
     rebounds:12,
     assist:13,
     steals:1,
     blocks:3,
     allTimeScoringLeader: 'Is on track to break scoring record.',
  }]
 
  
 // Created a function to help get the player with the most points
 // Created a local variable called currentPoints that has a default set to the amount of points in the first object of the array.
 // Created a forEach loop to go through each of the players in our array
 // created an if statment to determine which player has the most points.
  const getTopPoints = function (players){
    let currentPoints = players[0].points
    players.forEach(function(item) {
        if (item.points > currentPoints){
            currentPoints = item.points
           }else {
            item++
        }
    })
        return currentPoints
        }
 
 
        
        
 // created a function that takes in the current points value from the above function and determines if the player is on track to break the scoring record.
 //created a local variable called pointQualify that is set to a empty string 
 // created an if statement to determine if the player is on track to break the scoring record.
 const scoringRecord = function(currentPoints){
    let pointQualify = ''
    if (currentPoints >= 45){
       pointQualify = 'Is on track to break the scoring record!'
    }else if (currentPoints < 45 && currentPoints> 30 ){
       pointQualify = 'Needs improvement if they want to break the scoring record.'
    }else {
       pointQualify = 'Is not close to breaking the scoring record.'
    }
    return pointQualify
 }
 
 // output to page
 let totalPoints = getTopPoints(players)
 let bestPoints = scoringRecord(totalPoints.allTimeScoringLeader)
 showOnPage(`The leading scorer has a total of ${getTopPoints(players)} points and ${scoringRecord(totalPoints.allTimeScoringLeader)} `)
 
 
 