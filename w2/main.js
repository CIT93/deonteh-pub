const houseMembers = 10
const homeSize = 2
const foodChoices = 8
const waterConsumption = 0
const yearlyPurchases = 10
const weeklyGarbage = 40
const recycleAmount = 24
const annualTransportation = 16

const total = houseMembers + homeSize + foodChoices + waterConsumption + yearlyPurchases + weeklyGarbage + recycleAmount + annualTransportation

const myHeading = document.querySelector("h2");
myHeading.textContent = total;