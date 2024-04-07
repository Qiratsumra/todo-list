#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.hex(`#a8323e`)("\t Welcome to CLI based TODO List\t"));
let list = [];
let condition = true;
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                choices: ["Add Task", "Delete Task", "Update Task", "View TODO List", "Exist"],
                message: "Select the one of the option"
            }
        ]);
        if (option.operation === "Add Task") {
            await add();
        }
        else if (option.operation === "Delete Task") {
            await deletes();
        }
        else if (option.operation === "Update Task") {
            await update();
        }
        else if (option.operation === "View TODO List") {
            await viewList();
        }
        else if (option.operation === "Exist") {
            condition = false;
        }
        else {
            console.log(`Try again!`);
        }
    }
};
// add function for "add task":
let add = async () => {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task"
        }
    ]);
    list.push(addTask.task);
    console.log(`\n ${addTask.task} is add successfully in your TODO List \n`);
};
// add function for "view todo list":
let viewList = async () => {
    console.log("\n Your TODO list is: \n");
    list.forEach((task, index) => console.log((`${index + 1} : ${task}`)));
};
// add function for "delete task":
let deletes = async () => {
    await viewList();
    let deleteTake = await inquirer.prompt([
        {
            name: "delete",
            type: "input",
            message: "Enter the number of task do you want to delete?"
        }
    ]);
    let deletedTask = list.splice(deleteTake - 1, 1);
    console.log(` ${deletedTask} is delete successfully from your TODO List `);
};
// add function for "updated todo list":
let update = async () => {
    await viewList();
    let updateTask = await inquirer.prompt([
        {
            name: "updatelist",
            type: "number",
            message: "Enter the number of task do you want to update?"
        },
        {
            name: "newUpdateList",
            type: "input",
            message: "Now enter your new task"
        }
    ]);
    list[updateTask.updatelist - 1] = updateTask.newUpdateList;
    console.log(`\n ${updateTask - 1} update your TODO List successfully`);
    console.log(`\n To check update list click  "View TODO List`);
};
main();
