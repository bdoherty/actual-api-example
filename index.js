#!/usr/bin/env node

// See https://github.com/actualbudget/actual/blob/master/docs/API.md

// node index.js https://your-server.fly.dev/ Your-Budget-Id

let serverURL = process.argv[2];
let budgetId = process.argv[3];
let dataDir = process.cwd();
console.log(`serverURL: ${serverURL}`);
console.log(`budgetId: ${budgetId}`);

let actual = require('@actual-app/api');

actual.init({
  config: {
    serverURL: serverURL,
    dataDir: dataDir
  }
});

//actual.internal.send('load-budget', { id: budgetId });
 actual.loadBudget(budgetId);

let p = actual.getPayees();
console.log(p);