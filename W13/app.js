
const shoppingPurchase = document.getElementById('Shopping-Purchase')
const salesButton = document.getElementById('Purchase')
const salesElement = document.getElementById('Shopping-Total')

const Sales = function() {
    this.total = []
}

dailySales = new Sales ()

const Purchase = function(customerName, itemsPurchased) {
    this.customerName = customerName,
    this.itemsPurchased = itemsPurchased
}

Purchase.prototype.purchaseTotal = function () {
    let amount = 0
    this.itemsPurchased.forEach(item => {
        amount += item[1]
    })
    this.purchaseAmount = amount
    dailySales.total.push(amount)
}

Purchase.prototype.showPurchase = function(){
    const h3 = document.createElement('h3')
    let items = ''
    this.itemsPurchased.forEach(item => {
        items += `${item[0]} for ${item[1]}`
    })
    h3.textContent = `${this.customerName} has purchased a ${items}: total purchase amount was ${this.purchaseAmount}`
    shoppingPurchase.appendChild(h3)
    const line = document.createElement('hr')
    shoppingPurchase.appendChild(line)
}

const randomPurchase = (max) => {
    return Math.floor(Math.random() * max)
}

const showTotalPurchases = () => {
    const reducer = (accumulator, curr) => accumulator + curr
    const totalSales = dailySales.total.reduce(reducer)
    salesElement.innerHTML = ''
    const p = document.createElement('p')
    p.textContent = `Purchase total = ${totalSales}`
    salesElement.appendChild(p)
}

salesButton.addEventListener('click', (e) => {
    e.preventDefault()
    let customers = ['Deonte', 'Amy', 'Anthony', 'Cedric', 'Joseph']
    let randomCustomer = randomPurchase(4)
    let randomShirtPrice = randomPurchase(15)
    let randomSweatsPrice = randomPurchase(30)
    let purchase = new Purchase(customers[randomCustomer], [
        ["shirt", randomShirtPrice],
        ["sweats", randomSweatsPrice],
    ])
    purchase.purchaseTotal()
    purchase.showPurchase()
    showTotalPurchases()
})
