#!/usr/bin/env node

// See https://github.com/actualbudget/actual/blob/master/docs/API.md

let serverURL = process.argv[2];
let budgetId = process.argv[3];
console.log(`serverURL: ${serverURL}`);
console.log(`budgetId: ${budgetId}`);

let actual = require('@actual-app/api');

await actual.init({
  config: {
    serverURL: serverURL
  }
});

await actual.internal.send('load-budget', { id: budgetId });

await actual.getAccounts();