// Cluster Module - The cluster module in Node.js allows applications to create child processes (worker processes) that can share the server ports to handle incoming requests. Each worker process runs on a separate CPU core, enabling parallel processing and efficient utilization of multiple cores.

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello World\n");
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}

// Worker Threads - Node.js also provides the worker_threads module, allowing the creation of lightweight threads within a Node.js application. These threads can run JavaScript code concurrently, leveraging multiple CPU cores for parallel processing.
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

async function runParallelTasks() {
  const tasks = ["Task 1", "Task 2", "Task 3"];
  const results = await Promise.all(tasks.map((task) => runWorkerThread(task)));
  console.log(results);
}

runParallelTasks();

// Parallel Stream Processing - Streams in Node.js can be used for parallel processing of data by splitting the data into multiple streams and processing them simultaneously. This technique allows for efficient parallel processing of large datasets.
const fs = require("fs");
const { Transform } = require("stream");

const inputStream = fs.createReadStream("input.txt");
const outputStream = fs.createWriteStream("output.txt");

const transformStream1 = new Transform({
  transform(chunk, encoding, callback) {
    // Process chunk of data
    this.push(chunk);
    callback();
  },
});

const transformStream2 = new Transform({
  transform(chunk, encoding, callback) {
    // Process chunk of data
    this.push(chunk);
    callback();
  },
});

inputStream.pipe(transformStream1).pipe(outputStream);
inputStream.pipe(transformStream2).pipe(outputStream);

//  Parallel Task Execution with Promise.all() - JavaScript's Promise.all() method can be used in Node.js to execute multiple tasks in parallel. By wrapping the tasks in promises and passing them to Promise.all(), the tasks can be executed concurrently, and the results can be collected when all the promises are resolved.

async function performTask(task) {
  // Perform the task
  return taskResult;
}

async function runParallelTasks(tasks) {
  const promises = tasks.map((task) => performTask(task));
  const results = await Promise.all(promises);
  console.log(results);
}

const tasks = ["Task 1", "Task 2", "Task 3"];
runParallelTasks(tasks);