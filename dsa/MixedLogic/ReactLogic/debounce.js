function debounce(callback, delay) {
  let timer;

  return function (...args) {
    // Cancel previous timer
    clearTimeout(timer);

    // Create a new timer
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Function that we want to execute
function searchUser(query) {
  console.log("Searching for:", query);
}

// Create debounced function
const handleSearch = debounce(searchUser, 500);

handleSearch("R");
handleSearch("Re");
handleSearch("Rea");
handleSearch("Reac");
handleSearch("React");
