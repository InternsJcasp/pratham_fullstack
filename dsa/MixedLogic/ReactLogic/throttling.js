function throttle(callback, delay) {
  let lastTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    // Check whether enough time has passed
    if (currentTime - lastTime >= delay) {
      // Execute function
      callback(...args);

      // Update last execution time
      lastTime = currentTime;
    }
  };
}

// Function that we want to execute
function handleScroll() {
  console.log("Scroll event executed");
}

// Create throttled function
const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);
