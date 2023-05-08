let car = {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
      };
    
for (let i = 0; i < car.length; i++) {
    if (car[i].year >= 2020) {
      if (car[i].color === "black") {
        console.log("I have found my new car:", car[i]);
// We can also use break to stop looping //through the array of cars
//when we have found a car that matches our //demands, it will STOP/break.
        break;
      }
    }
  }
  console.log(car);