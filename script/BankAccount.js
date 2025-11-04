//exercise create bank account

const account = {
    accountHolderName: "Sonal Maheshwari",
    balance: 10000,
    getBalance() {
        console.log(`The total balance in your account is: ${this.balance}`);
    },
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`You have deposited : ${amount}`);
            this.getBalance();
        }
        else {
            this.accountError("Amount was less than zero or invalid amount");
        }
    },
    withdraw(withdrawAmount) {
        if (withdrawAmount > 0 && withdrawAmount < this.balance) {
            this.balance -= withdrawAmount;
            console.log(`You have withdrawn ${withdrawAmount}`);
            this.getBalance();
        }
        else if (withdrawAmount > this.balance) {
            this.accountError(`Insufficient balance`);
        }
        else {
            this.accountError(`Invalid withdraw amount`);
        }
    },
    getAccountName() {
        console.log(`The account holder name is: ${this.accountHolderName}`);

    },
    accountError(message) {
        console.log(`Error: ${message}`);
    },
    exit() {
        console.log(`Thank you for using atm services.`);
    }
};

function atm() {
    let active = true;

    while (active) {
        const userChoice = parseFloat(
            prompt(
                `Welcome, ${account.accountHolderName}
            Select a banking service:

            1.) See balance
            2.) Make a Deposit
            3.) Make a withdrawal
            4.) Get account name
            5.) Exit`
            )
        );

        switch (userChoice) {
            case 1:
                account.getBalance();
                break;
            case 2:
                const amount = prompt("Enter the deposit amount");
                account.deposit(parseFloat(amount));
                break;
            case 3:
                const withdrawAmt = prompt("Enter the withdraw amount");
                account.withdraw(parseFloat(withdrawAmt));
                break;
            case 4:
                account.getAccountName();              
                break;
            case 5:
                account.exit();
                active = false;
                break;
            default:
                account.accountError("Invalid selection. Please try again from the valid selections");
                break;
        }
    }

}

atm();