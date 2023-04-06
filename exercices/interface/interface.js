var person = {
    name: "Alice",
    age: 25,
    city: "Paris"
};
console.log("Name: ".concat(person.name));
console.log("Age: ".concat(person.age));
console.log("Email: ".concat(person.city || "N/A"));
