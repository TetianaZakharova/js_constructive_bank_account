'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(amount, transactionInfo) {
  this.amount += amount;
  this.history.push(`${transactionInfo}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(amount, transactionInfo) {
  this.amount -= amount;
  this.history.push(`${transactionInfo}: -${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
