function addition(x: number, y: number): number {
    return x + y;
  }
  
  function soustraction(x: number, y: number): number {
    return x - y;
  }
  
  function multiplication(x: number, y: number): number {
    return x * y;
  }
  
  function division(x: number, y: number): number {
    return x / y;
  }
  
  let x: number = 10;
  let y: number = 5;
  
  console.log("x =", x, "et y =", y);
  console.log("Addition: x + y =", addition(x, y));
  console.log("Soustraction: x - y =", soustraction(x, y));
  console.log("Multiplication: x * y =", multiplication(x, y));
  console.log("Division: x / y =", division(x, y));
  