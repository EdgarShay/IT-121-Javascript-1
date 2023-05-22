//The code defines a class named "Person" //with a constructor method that takes in two //parameters: "firstname" and "lastname".

class Person {
    //The constructor method initializes properties //of the object using the "this" keyword.
      constructor(firstname, lastname) {
    //The class also has a method named "greet" //which logs a //message to the console using the //object's "firstname" //and "lastname" //properties.
          this.firstname = firstname;
          this.lastname = lastname;
        }
        greet() {
          console.log("Hi there! I'm", this.firstname, this.lastname);
        }
      }
    //Then, the code creates an instance of the "Person" class named "p" using the //"new" keyword and passing in arguments for the constructor.
      let p = new Person("Maaike", "van Putten");  
     //Next, the code calls the "greet" method on the "p" object using the dot //notation. This logs a message to the console using the object's "firstname" and //"lastname" properties.
    p.greet();
      console.log(p.greet, p);
    