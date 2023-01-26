for (let number = 1; number < 100; number++) {
  if (number % 5 === 0 && number % 3 === 0) {
    console.log("Fizz" + "Buzz" + number);
  } else if (number % 5 === 0) {
    console.log("Buzz" + number);
  } else if (number % 3 === 0) {
    console.log("Fizz" + number);
  } else {
    console.log();
  }
}
