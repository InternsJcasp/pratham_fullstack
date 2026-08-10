// Default parameter
function greeting(name = 'Pratham', company = 'JCASP') {
  const message = `Hello ${name} , Welcome to ${company}`;
  console.log(message);
}
greeting();

// multiple default parameter
function crateUser(name = 'pratham', age = 21, role = 'admin') {
  console.log(name);
  console.log(age);
  console.log(role);
}
