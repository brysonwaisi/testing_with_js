// Asynchronous Programming - Asynchronous programming is a fundamental technique in Node.js for achieving concurrency.

// Using callbacks
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});

// Using promises
fs.promises.readFile('file.txt')
  .then(data => {
    console.log(data.toString());
  })
  .catch(err => {
    console.error(err);
  });

// Using async/await
async function readFileAsync() {
  try {
    const data = await fs.promises.readFile('file.txt');
    console.log(data.toString());
  } catch (err) {
    console.error(err);
  }
}

readFileAsync();

// Event-driven Architecture - Node.js follows an event-driven architecture, which allows multiple events to be handled concurrently. This technique leverages non-blocking I/O operations and event emitters to achieve concurrency in handling different events.

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on("event", () => {
  console.log("Event received");
});

emitter.emit("event");

// Streams - Node.js provides stream-based APIs that enable the processing of data in chunks rather than loading the entire data into memory. Streams allow for concurrent processing of data, making them suitable for handling large amounts of data or processing data in real-time.

const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);

readStream.on("end", () => {
  console.log("File read complete");
});

writeStream.on("finish", () => {
  console.log("File write complete");
});

// Worker Threads - Node.js provides the worker_threads module, which allows the creation of lightweight threads within a Node.js application. Worker threads can execute JavaScript code concurrently and independently, enabling concurrent processing and achieving parallelism.

const { Worker } = require("worker_threads");

function runWorkerThread(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData });

    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

async function runConcurrentTasks() {
  const tasks = ["Task 1", "Task 2", "Task 3"];
  const results = await Promise.all(tasks.map((task) => runWorkerThread(task)));
  console.log(results);
}

runConcurrentTasks();