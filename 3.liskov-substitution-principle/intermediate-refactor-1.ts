/**
    class BankAccount {
        protected balance: number = 0;

        deposit(amount: number): void {
            this.balance += amount;
        }

        withdraw(amount: number): boolean {
            if (this.balance >= amount) {
                this.balance -= amount;
                return true;
            }
            return false;
        }

        getBalance(): number {
            return this.balance;
        }
    }

    Subclass: FixedTermDepositAccount
    Now, let's say there's a type of account called FixedTermDepositAccount. 
    Such accounts don't allow withdrawals before a fixed term (e.g., one year). 
    A naive subclass might look like this:

    class FixedTermDepositAccount extends BankAccount {
        termEndDate: Date;
    
        constructor(termLengthInMonths: number) {
            super();
            const currentDate = new Date();
            this.termEndDate = new Date(currentDate.setMonth(currentDate.getMonth() + termLengthInMonths));
        }
    
        withdraw(amount: number): boolean {
            const currentDate = new Date();
            if (currentDate < this.termEndDate) {
                throw new Error("Withdrawal not allowed before term end date.");
            }
            return super.withdraw(amount);
        }
    }

    Consider a function to automate a monthly withdrawal:

    function monthlyWithdrawal(account: BankAccount, amount: number): void {
        if (!account.withdraw(amount)) {
            console.log("Insufficient funds or withdrawal not allowed!");
        }
    }

    If we use the monthlyWithdrawal function with a FixedTermDepositAccount object, it might throw an error if the term hasn't ended. 
    This violates the LSP because the behavior changes unexpectedly:
    
    const fixedTermAccount = new FixedTermDepositAccount(12); // 12 months term
    monthlyWithdrawal(fixedTermAccount, 100); // Throws an error before 12 months



 */

    interface Withdrawable {
        withdraw(amount: number): boolean;
    }
    
    interface Depositiable {
        deposit(amount: number): void;
    }
    
    class BankAccount implements Withdrawable, Depositiable {
        // ... same as before ...
    }
    
    class FixedTermDepositAccount implements Depositiable {
        // ... same as before, but without the withdraw method ...
    
        // Instead, you might have a method to end the term early or something similar
    }
    