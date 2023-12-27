import inquirer from "inquirer";
function random_number(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let i = 0;
let correct_userid = 'shazil_2023';
let correct_pin = 4568;
let account_balance = random_number(100, 10000);
let atm = await inquirer.prompt([
    {
        type: 'input',
        name: 'user_id',
        message: 'Please enter your User ID: '
    },
    {
        type: "password",
        name: 'pin',
        mask: '*'
    }
]);
if (atm.user_id === correct_userid) {
    if (atm.pin == correct_pin) {
        console.log(`Welcome ${correct_userid}`);
        while (i == 0) {
            var atm_functions = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'options',
                    message: 'What would you like to do? ',
                    choices: ['Deposit', 'Withdraw', 'Check Account Balance']
                }
            ]);
            if (atm_functions.options == "Deposit") {
                let deposit_function = await inquirer.prompt([
                    {
                        type: 'number',
                        name: 'deposit',
                        message: 'Please Enter the amount you would like to Deposit: '
                    }
                ]);
                account_balance += deposit_function.deposit;
                console.log(`$${deposit_function.deposit} has been added to your account. Your account balance is: $${account_balance}`);
                let atm_continue_function = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'atm_continue',
                        message: "Would you like to continue? ",
                        choices: ['Yes', 'No']
                    }
                ]);
                if (atm_continue_function.atm_continue == "Yes") {
                    continue;
                }
                else if (atm_continue_function.atm_continue == "No") {
                    i++;
                    console.log("Closing Machine......");
                }
            }
            else if (atm_functions.options == 'Withdraw') {
                let withdraw_function = await inquirer.prompt([
                    {
                        type: 'number',
                        name: 'withdraw',
                        message: `Please Enter the amount you would like to Withdraw. Your current account balance is $${account_balance}`
                    }
                ]);
                if (withdraw_function.withdraw > account_balance || withdraw_function.withdraw == 0) {
                    console.log(`Invalid Amount!! `);
                    let atm_continue_function = await inquirer.prompt([
                        {
                            type: 'list',
                            name: 'atm_continue',
                            message: "Would you like to continue? ",
                            choices: ['Yes', 'No']
                        }
                    ]);
                    if (atm_continue_function.atm_continue == "Yes") {
                        continue;
                    }
                    else if (atm_continue_function.atm_continue == "No") {
                        i++;
                        console.log("Closing Machine......");
                    }
                }
                else {
                    account_balance -= withdraw_function.withdraw;
                    console.log(`$${withdraw_function.withdraw} has been sucessfully withdrawn from your account. Your current account balance is $${account_balance}`);
                    let atm_continue_function = await inquirer.prompt([
                        {
                            type: 'list',
                            name: 'atm_continue',
                            message: "Would you like to continue? ",
                            choices: ['Yes', 'No']
                        }
                    ]);
                    if (atm_continue_function.atm_continue == "Yes") {
                        continue;
                    }
                    else if (atm_continue_function.atm_continue == "No") {
                        i++;
                        console.log("Closing Machine......");
                    }
                }
            }
            else if (atm_functions.options == 'Check Account Balance') {
                console.log(`Your account balance is $${account_balance}`);
                let atm_continue_function = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'atm_continue',
                        message: "Would you like to continue? ",
                        choices: ['Yes', 'No']
                    }
                ]);
                if (atm_continue_function.atm_continue == "Yes") {
                    continue;
                }
                else if (atm_continue_function.atm_continue == "No") {
                    i++;
                    console.log("Closing Machine......");
                }
            }
        }
    }
    else {
        console.log(`Incorrect User ID or Password.....`);
    }
}
else {
    console.log("Incorrect User ID or Password...");
}
