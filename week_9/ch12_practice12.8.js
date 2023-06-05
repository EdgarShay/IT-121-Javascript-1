//The given program is written in JavaScript and uses JSON data to create an array of objects.
// It also defines a function called reloader that iterates over the array //and logs the name and status of each object to the console.
let myList = [{
    ///Declares a variable called ”mylist” and assigns it an array value.
    //two properties: “Name”, and “Status” with value of false
    
            "name": "Learn JavaScript",
            "status": true
        },
        {
            "name": "Try JSON",
            "status": false
        }
    ];
    reloader();
    function reloader() {
    //inside the functions, the “mylist.forEach() methods is used to //iterate over each elelment (el) in the myList array
        myList.forEach((el) => {
        console.log(`${el.name} = ${el.status}`);
        });
    }
    console.log(reloader);
    