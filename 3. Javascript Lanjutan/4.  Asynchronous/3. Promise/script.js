// Callback version

const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connention Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

// Promise Version

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Error: Connection  Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

// Output promise version
// requestPromise("movie.com")
//   .then((response) => {
//     console.log("success", response);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// Cara menggunakan promise yang benar
requestPromise("movie.com")
  .then((result) => {
    console.log("page 1");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then(() => {
    console.log("page 2");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then(() => {
    console.log("page 3");
    console.log(result);
    return requestPromise("movie.com");
  })
  .catch((err) => {
    console.lo0g(err);
  });

// Output callback version

// requestCallback(
//   "movie.com",
//   function (response) {
//     console.log("succes", response);
//   },
//   function (error) {
//     console.log("error", error);
//   },
// );
