//  Nullish Coalescing Operator
// If the value is null or undefined, use a backup/default value. Otherwise, keep the original value.
// let username = null;
// let result = username ?? 'Guest';
// console.log(result);

// let a = 10;

// let data = a ?? 20;
// console.log(data);

// undefined also uses the default

let username;

let result = username ?? 'Guest';

console.log(result);

// ??= Operator

// There is also:

// ??=

// It means:

// If the current value is null or undefined, assign a default value.

let usernames;

usernames ??= 'Guest';

console.log(usernames);
