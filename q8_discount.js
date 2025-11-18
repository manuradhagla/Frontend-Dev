var cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];
var subtotal = 0;

for (var i = 0; i < cart.length; i++) {
    var product = cart[i];
    var discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10; // According to question 10% discount
    } else if (product.category === "fashion") {
        discountRate = 0.05; // According to question 5% discount
    }

    var discountedPrice = product.price - (product.price * discountRate);
    subtotal = subtotal + discountedPrice;

    console.log(product.item + " = ₹" + discountedPrice);
}

var finalTotal = subtotal;
if (subtotal > 50000) {
    finalTotal = subtotal - (subtotal * 0.05);
}

console.log("Subtotal: ₹" + subtotal);
console.log("Final Total: ₹" + finalTotal);
