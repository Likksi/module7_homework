const myObj = newObject();

function newObject() {
    return Object.create(null);
}

console.log(myObj);

console.log(Object.getPrototypeOf(myObj));
