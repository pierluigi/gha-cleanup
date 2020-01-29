#!/usr/bin/env node

var inquirer = require("inquirer");
const chalk = require("chalk");

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const test = async () => {
  var loader = ["/ Loading", "| Loading", "\\ Loading", "- Loading"];
  var i = 4;
  var ui = new inquirer.ui.BottomBar({ bottomBar: loader[i % 4] });

  let loadingInterval = setInterval(() => {
    ui.updateBottomBar(loader[i++ % 4]);
  }, 200);

  await timeout(500);

  ui.log.write(`${chalk.dim("[1/3]")} Get list of workflows`);

  loadingInterval = setInterval(() => {
    ui.updateBottomBar(loader[i++ % 4]);
  }, 200);
  await timeout(500);

  ui.updateBottomBar("2/2 Done");
  process.exit();
};

test();
