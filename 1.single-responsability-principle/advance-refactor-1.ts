// WITHOUT RSP

/**
 
  class Order {
    items: { product: string, price: number, quantity: number }[] = [];

    addProduct(product: string, price: number, quantity: number) {
        this.items.push({ product, price, quantity });
    }

    calculateTotal() {
        return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    applyDiscount(discountCode: string) {
        // Assuming for simplicity, 'DISCOUNT10' gives a 10% discount.
        if (discountCode === 'DISCOUNT10') {
            const total = this.calculateTotal();
            return total * 0.9;
        }
        return this.calculateTotal();
    }

    sendNotification() {
        // send a notification to the user about the order
        console.log('Order processed and notification sent.');
    }
}

const order = new Order();
order.addProduct('Laptop', 1000, 1);
order.addProduct('Mouse', 50, 2);
console.log(order.applyDiscount('DISCOUNT10')); 
order.sendNotification();

 */

class ProductManager {
  items: { product: string; price: number; quantity: number }[] = [];

  addItem(product: string, price: number, quantity: number) {
    this.items.push({ product, price, quantity });
  }

  getItems() {
    return this.items;
  }
}

class TotalPriceCalculator {
  static calculateTotal(products: ProductManager) {
    return products
      .getItems()
      .reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}

class DiscountCode {
    factor: number;

    constructor(factor: number) {
        this.factor = factor;
    }

    getFactor() {
        return this.factor;
    }
}

class DiscountCodeCalculator {
  static applyDiscount(total: number, discountCode: DiscountCode) {
    return total * discountCode.getFactor();
  }
}

class EmailSender {
    static sendEmail() {
        console.log("Order processed and notification sent.");
    }   
}

class OrderProcessor {

    static processOrder(products: ProductManager, discountCode: DiscountCode) {
        let total = TotalPriceCalculator.calculateTotal(products);
        
        if(discountCode){
            total =  DiscountCodeCalculator.applyDiscount(total, discountCode);
        }
        console.log(`Total price: ${total}`);
        EmailSender.sendEmail();
    }
}

class OrderService {
    static processOrder(products: ProductManager, discountCode: DiscountCode) {
        OrderProcessor.processOrder(products, discountCode);
    }
}

const products = new ProductManager();

products.addItem("Laptop", 1000, 1);
products.addItem("Mouse", 50, 2);
products.addItem("Keyboard", 150, 1);
products.addItem("Monitor", 200, 1);

const discountCode = new DiscountCode(0.9);

OrderService.processOrder(products, discountCode);