// map methods
const prices = [10, 30, 15, 25, 50, 40, 5];

// const salesPrices = prices.map(price => price / 2);
// console.log(salesPrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shell', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
];

const saleProduct = products.map( products => {
    if(products.price > 30){
        products.price = products.price  / 2;
        return products;
    }
    else{
        return products;
    }
});

console.log(saleProduct);