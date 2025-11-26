class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(Percentage) {
        const discountAmount = (this.price * Percentage) / 100;
        this.price = this.price - discountAmount;
        return this.price;
    }
    getDetails() {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`;
    }

}
let product1 = [new Product(1, "Laptop", 1000, "Electronics"),
new Product(2, "Shirt", 5000, "Fashion"),
new Product(3, "Bag", 800, "Luggage")
]
// Applying discount to product
let pro = product1[0].applyDiscount(10); // 10% discount on Laptop
console.log(pro);

console.log(product1[0].getDetails());
let expense = product1.filter(p => p.price > 1000);
console.log("expensive products:", expense);