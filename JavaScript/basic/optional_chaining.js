// 🔹 What is Optional Chaining ?.?

// Optional chaining allows you to safely access a property without getting an error if something is null or undefined.

const product = {
  name: 'Lenovo G3',
  price: 213243,
  address: {
    state: 'Gujarat',
    city: 'Ahmedabad',
    pincode: 350005,
  },
};

// console.log(product.address?.area);
console.log(product.address?.city);
