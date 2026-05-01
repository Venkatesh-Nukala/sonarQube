function greet(name) {
  if (!name) {
    return "Hello Guest";
  }
  return `Hello ${name}`;
}

module.exports = greet;
