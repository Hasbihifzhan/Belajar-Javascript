// Async Keyword
// 1. Fungsi async akan otomatis menjadi promise
// 2. Kalo fungsinya punya data, maka resolsolvenya akan mengirimkan data juga yang bisa diolah
// 3. Kalo di dalam function ada object throw error, maka akan menjalankan bagian reject

const hello = async () => {
  // throw 'Maaf gak kenal'
  return "hello world";
};

hello()
  .then((res) => {
    console.log("response", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

//   Await Keyword
// 1. Keyword await hanya bisa kita gunakan di dalam function dengan 'async
// 2. Await akan melakukan jeda proses selanjutnya di dalam function, menunggu promise yang dijalankan resolved

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function changColor() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("purple", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("black", 1000);
  return "All Done";
}

changColor().then((res) => alert(res));

// Mengelola kondisi error dengan async await (try and catch)

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

async function requestHandler() {
  try {
    let result = await requestPromise("movie.com");
    console.log(result);
  } catch (error) {
    console.log("Pesan Error", error);
  }
}

requestHandler();
