class Person {
        constructor(firstname, lastname) {
          this.firstname = firstname;
          this.lastname = lastname;
        }
        greet() {
          console.log("Hi there!");
        }
      }
      Person.prototype.introduce = function () {
        console.log("Hi, I'm", this.firstname);
      };
      Person.prototype.favoriteColor = "green";
    //And then you can call them from instances of //Person:
    let p = new Person("Maria", "Saga");
    console.log(p.favoriteColor);
    p.introduce();
    