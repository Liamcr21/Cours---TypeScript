interface Person {
    name: string;
    age: number;
    city?: string;
  }

  let person: Person = {
    name: "Alice",
    age: 25,
    city: "Paris"
  };

  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Email: ${person.city || "N/A"}`);