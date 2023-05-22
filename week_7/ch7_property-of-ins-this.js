//The code defines a class named "Dog" with a constructor method 
//that takes in four parameters: "dogName", "weight", "color", and "breed". 
//The constructor method initializes properties of the object using the "this" keyword.
class Dog {
        constructor(dogName, weight, color, breed) {
    //The this keyword refers to the object it belongs to the first property of the instance of ClassName. 
          this.dogName = dogName;
          this.weight = weight;
          this.color = color;
          this.breed = breed;
        }
      }
      //Then, the code creates an instance of the "Dog" class named "dog" using the "new" keyword 
      //and passing in arguments for the constructor.
      let dog = new Dog("Raul", 2.4, "brown", "chihuahua");
      //Finally, the code logs a message to the console using the properties of the "dog" object. 
      //The message displays the dog's name, breed, color, and weight.
      console.log(dog.dogName, "is a", dog.breed, ",", dog.color, "color", "and weighs", dog.weight, "kg.");
    