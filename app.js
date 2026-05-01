function greet(name) {
    if (name === null || name === undefined) {
        return "Hello Guest";
    }
    return "Hello " + name;
}

module.exports = greet;
