class BankAccount {
    constructor(initialValue) {
        this.balance = initialValue;
    }
    
    getBalance () {
        console.log(`Поточна сума на рахунку - ${this.balance}`)
        return this.balance;
    }

    deposit (value) {
        this.balance += value;
        console.log(`Додаємо ${value} грн до рахунку`)
    }

    withdraw(value) {
        if (value > this.balance) { 
            console.log("Недостатньо коштів на рахунку");
        } else {
            this.balance -= value;
            console.log(`Було знято ${value} грн з рахунку`);
        }
    }
}
  
const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000
account1.deposit(500); // Вносимо 500
console.log(account1.getBalance()); // 1500
account1.withdraw(200); // Знімаємо 200
console.log(account1.getBalance()); // 1300
