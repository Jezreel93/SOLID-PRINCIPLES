// WITHOUT SRP

/**

class Order {
    items: any[];
    user: any;
    total: number;

    constructor(user, items) {
        this.user = user;
        this.items = items;
        this.total = this.calculateTotal();
    }

    calculateTotal(): number {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }

    isValid(): boolean {
        return this.items.length > 0 && this.total > 0;
    }

    processPayment() {
        console.log(`Processing payment of $${this.total} for ${this.user.name}.`);
        // Logic for processing payment
    }

    notifyUser() {
        console.log(`Notification sent to ${this.user.email} about order status.`);
        // Logic for sending a notification to the user
    }

    placeOrder() {
        if (this.isValid()) {
            this.processPayment();
            this.notifyUser();
        } else {
            console.log('Invalid order.');
        }
    }
}

const user = { name: 'Bob', email: 'bob@example.com' };
const items = [{ name: 'book', price: 10 }, { name: 'pen', price: 2 }];
const order = new Order(user, items);
order.placeOrder();

*/

class Order {
  items: any[];
  user: any;

  constructor(user, items) {
    this.user = user;
    this.items = items;
  }
}

class OrderCalculator {

  static calculateTotal(order: Order): number {
    return order.items.reduce((acc, item) => acc + item.price, 0);
  }
}

class OrderValidator {

  static isValid(order: Order): boolean {
    return order.items.length > 0 && OrderCalculator.calculateTotal(order) > 0;
  }
}

class PaymentProcessor {

  static processPayment(total:number, order: Order) {
    console.log(
      `Processing payment of $${ total } for ${order.user.name}.`
    );
    // Logic for processing payment
  }
}

class EmailSender {

  static sendEmail(order: Order) {
    console.log(`Notification sent to ${order.user.email} about order status.`);
    // Logic for sending a notification to the user
  }
}

class OrderProcessor {

  static placeOrder(order: Order) {
    if (OrderValidator.isValid(order)){
        const total = OrderCalculator.calculateTotal(order);
        PaymentProcessor.processPayment(total, order);
        EmailSender.sendEmail(order);
    }else {
        console.log("Invalid order.");
    }
  }
}

const user = { name: "Bob", email: "bob@example.com" };
const items = [
  { name: "book", price: 10 },
  { name: "pen", price: 2 },
];
const order = new Order(user, items);

OrderProcessor.placeOrder(order);