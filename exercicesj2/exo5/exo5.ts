abstract class Account {

    protected _amount : number;

    constructor(amount : number) {
        this._amount = amount;
    }


    abstract deposit(amount: number): void;

    abstract withdraw(amount: number): void;

    abstract getBalance(): number;


}

class SavingsAccount extends Account {
    private _interestRate: number;

    constructor(amount: number, interestRate: number) {
        super(amount);
        this._interestRate = interestRate;
    }

    deposit(amount: number): void {
        this._amount += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this._amount) {
            this._amount -= amount;
        } else {
            console.log("Insufficient funds.");
        }
    }

    getBalance(): number {
        return this._amount * (1 + this._interestRate);
    }
}


class CheckingAccount extends Account {
    constructor(amount: number) {
        super(amount);
    }

    deposit(amount: number): void {
        this._amount += amount;
    }

    withdraw(amount: number): void {
        this._amount -= amount;
    }

    getBalance(): number {
        return this._amount;
    }
}


const account = new CheckingAccount(10);
account.deposit(10);
console.log(account);
