// Define the Dog class
class Dog {
    constructor(dogName, weight, color, breed) {
      this.dogName = dogName;
      this.weight = weight;
      this.color = color;
      this.breed = breed;
    }
  }
  
  // Create an instance of the Dog class
  let dog = new Dog("Jacky", 30, "brown", "labrador");
  
  // Log the dog's information
  console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");