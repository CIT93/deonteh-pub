const  motocycleClothing = [
    {
       Name:'Special Ride',
       top:'Motorcycle armored jacket',
       bottoms:'Motorcycle armored pants',
       shoes:'Motorcycle special shoes',
       weather: 'Cool',
    },
    {
       Name:'Regular Ride',
       top:'Shirt',
       bottoms:'Shorts',
       shoes:'Vans',
       weather: 'Hot'
    },
    {
       Name:'Winter Ride ',
       top:'Sweater',
       bottoms:'Pants',
       shoes:'Boots',
       weather: 'Cold'
    },
 ]
 
 let whatToWear = []
 let rainWeather= false;
 
 const weather = function (){
    let weather = ''
    if (temp >= 90){
       weather = 'Hot'
    }else if (temp >= 70 && temp < 90){
       weather = 'Cool'
    }else {
       weather = 'Cold'
    }
    return weather
 }
 
 const outfit = function (weather){
    let outfit = ''
    motocycleClothing.forEach(function (motocycleClothing){
       if (weather === motocycleClothing.weather){
          outfit = motocycleClothing
       }else {
          motocycleClothing++
       }
    })
    return outfit
 }
 
 renderOutfit = function (){
    if (rainWeather === true){
       document.querySelector('#output').innerHTML ='It is raining, Maybe you should take your car!'
    }else {
       document.querySelector('#output').innerHTML = ''
       whatToWear.forEach(function(whatToWear){
          const div = document.createElement('div')
          div.textContent = `It is ${whatToWear.weather} outside. You should wear ${whatToWear.top} with ${whatToWear.bottoms} and ${whatToWear.shoes}. Enjoy your ride and remember ALWAYS STAY TWO WHEELS DOWN!!`
          document.getElementById('output').appendChild(div)
       })
    }
 }
 
 document.querySelector('#temp-input').addEventListener('submit', function(e){
    e.preventDefault()
    temp = e.target.elements.userInput.value
    let weatherVariable = weather(temp)
    let outfitVariable = outfit(weatherVariable)
    e.target.elements.userInput.value = ''
    whatToWear.push(outfitVariable)
    renderOutfit()
 })
 
 document.querySelector('#rainy-checkbox').addEventListener('change', function (e){
    rainWeather = e.target.checked
 })