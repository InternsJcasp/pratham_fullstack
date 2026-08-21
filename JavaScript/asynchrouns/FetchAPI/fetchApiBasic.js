// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });
// with promise

// with async and await mostly used

// async function getWeather() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Something is wrong  from the server");
//     }
//     const resData = await response.json();
//     console.log(resData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getWeather();

async function getData() {
  try {
    // 1. Send request
    const response = await fetch("https://dummyjson.com/products");

    // 2. Check HTTP status
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // 3. Parse JSON
    const data = await response.json();

    // 4. Use data
    console.log(data);
  } catch (error) {
    // 5. Handle error
    console.error(error.message);
  }
}

getData()   ;
