function fetchData (callback) {
    setTimeout(() => {
        callback('peanut butter')
    }, 1000)
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

module.exports = { fetchData, fetchPromise}