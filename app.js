function greet(name) {
    if(name == null){   // code smell (== instead of ===)
        console.log("Hello Guest")
    } else {
        console.log("Hello " + name)
    }
}

greet()
