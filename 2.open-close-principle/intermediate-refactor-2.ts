// Without OCP 

/**
    Scenario: Your e-commerce platform provides discounts to customers based on various criteria. 
    Initially, it only provides a loyalty discount to those who have been customers for more than 3 years.


    class Customer {
        registrationDate: Date;
        // ... other properties
    }

    class DiscountCalculator {
        getDiscount(customer: Customer): number {
            let discount = 0;
            const yearsRegistered = new Date().getFullYear() - customer.registrationDate.getFullYear();

            if (yearsRegistered > 3) {
                discount = 0.1; // 10% discount
            }

            return discount;
        }
    }

    Now, suppose you want to introduce a new discount for customers who have made more than 50 purchases. 
    Without OCP, you'd modify the DiscountCalculator:

    class Customer {
        registrationDate: Date;
        totalPurchases: number;
        // ... other properties
    }    

    class DiscountCalculator {
        getDiscount(customer: Customer): number {
            let discount = 0;
            const yearsRegistered = new Date().getFullYear() - customer.registrationDate.getFullYear();

            if (yearsRegistered > 3) {
                discount = 0.1; // 10% loyalty discount
            }

            if (customer.totalPurchases > 50) {
                discount += 0.05; // extra 5% discount
            }

            return discount;
        }
    }    
 */

class Customer {
   registrationDate: Date;
   totalPurchases: number;

   constructor(registrationDate: Date, totalPurchases: number) {
       this.registrationDate = registrationDate;
       this.totalPurchases = totalPurchases;
   }
}   

interface IDiscountRule {
    getDiscount(customer: Customer): number;
}

class LoyaltyDiscountRule implements IDiscountRule {
    getDiscount(customer: Customer): number {
        let discount = 0;
        const yearsRegistered = new Date().getFullYear() - customer.registrationDate.getFullYear();

        if (yearsRegistered > 3) {
            discount = 0.1; // 10% discount
        }
        return discount;
    }
}

class PurchaseDiscountRule implements IDiscountRule {
    getDiscount(customer: Customer): number {
        let discount = 0;

        if (customer.totalPurchases > 50) {
            discount = 0.05; // 5% discount
        }
        return discount;
    }
}

class TotalDiscountCalculator {
    static getDiscount(customer: Customer, calculator: IDiscountRule[]): number {
        return calculator.reduce((discount, calculator) => discount + calculator.getDiscount(customer), 0);
    }
}

const customer = new Customer(new Date(2017, 10, 1), 60);
const discountCalculator = TotalDiscountCalculator.getDiscount(customer, [new LoyaltyDiscountRule(), new PurchaseDiscountRule()]);

console.log(`total discount: ${discountCalculator}`);

