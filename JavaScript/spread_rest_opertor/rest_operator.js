function sum(...number) {
  console.log(number);
}

sum(10, 20, 30);

// rest operator  -- collect the element


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30, 40));



function test(first, ...others) {
    console.log(first);
    console.log(others);
}

test(10, 20, 30, 40);