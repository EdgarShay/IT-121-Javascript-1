const people = {
    friends: []
  };
  
  const friend1 = {
    firstName: "Steven",
    lastName: "Salan",
    id: 1
  };
  
  const friend2 = {
    firstName: "Alan",
    lastName: "Dalin",
    id: 2
  };
  
  const friend3 = {
    firstName: "Kevin",
    lastName: "Dale",
    id: 3
  };
  
  people.friends.push(friend1, friend2, friend3);
  
  console.log(people.friends);