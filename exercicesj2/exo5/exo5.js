var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(amount) {
        this._amount = amount;
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(amount, interestRate) {
        var _this = _super.call(this, amount) || this;
        _this._interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this._amount += amount;
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount <= this._amount) {
            this._amount -= amount;
        }
        else {
            console.log("Insufficient funds.");
        }
    };
    SavingsAccount.prototype.getBalance = function () {
        return this._amount * (1 + this._interestRate);
    };
    return SavingsAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(amount) {
        return _super.call(this, amount) || this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        this._amount += amount;
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        this._amount -= amount;
    };
    CheckingAccount.prototype.getBalance = function () {
        return this._amount;
    };
    return CheckingAccount;
}(Account));
var account = new CheckingAccount(10);
account.deposit(10);
console.log(account);
