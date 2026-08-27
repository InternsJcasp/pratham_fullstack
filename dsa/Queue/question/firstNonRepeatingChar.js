function firstNonRepeatingChar(stream) {
  const queue = [];
  const freq = {};

  let result = "";

  for (let character of stream) {
    // Increase Frequency
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
    // Add Character to queue
    queue.push(character);

    // remove repeating character
    while (queue.length > 0 && freq[queue[0]] > 1) {
      queue.shift();
    }

    // Find the non repeating character
    if (queue.length > 0) {
      result += queue[0];
    } else {
      result += "";
    }
  }
  return result;
}

console.log(firstNonRepeatingChar("abccab"));
