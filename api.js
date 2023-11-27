const express = require('express');
const app = express();
const port = 8080;
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)
const Chance = require('chance');
const chance = new Chance();

// Store running tests
const runningTests = {};

app.use(express.json());
app.use('/playwright-report', express.static('playwright-report'));

// Endpoint to run the test
app.get('/run-form-test', (req, res) => {
  const command = 'npx playwright test form.spec.js';
  let spawnId = chance.guid();
  const testProcess = exec(command, (error, stdout, stderr) => {

    if (error) {
      runningTests[spawnId].status = 'error';
      runningTests[spawnId].output = stderr;
      return;
    }

    runningTests[spawnId].status = 'finished';
    runningTests[spawnId].output = stdout;
  });

  runningTests[spawnId] = {
    status: 'running',
    output: '',
    command: command
  };

  res.json({ message: 'Running test', spawnId: spawnId });
});

// Endpoint to check the status of the test
app.get('/status', (req, res) => {
  const spawnId = req.query.spawnId;
  // console.log(`spawnId in status ${spawnId}`);
  if (runningTests[spawnId]) {
    res.json({
      spawnId,
      status: runningTests[spawnId].status,
      reportLink: runningTests[spawnId].status === 'finished' ? "/playwright-report" : undefined
    });
  } else {
    res.status(404).json({ message: 'Test not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
