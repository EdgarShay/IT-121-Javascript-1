var myImages = [
  "brazil.jpg",
  "canada.jpg",
  "mexico.gif",
  "usa.jpg"
];

function changeImg(event) {
  console.log("changeImg function triggered");
  var imgElement = event.target;
  imgElement.src = getRandomImage();
}

function resetTable() {
  console.log("resetTable function triggered");
  var imgElement1 = document.getElementById("image1");
  var imgElement2 = document.getElementById("image2");
  imgElement1.src = "brazil.jpg";
  imgElement2.src = "usa.jpg";
}

function getRandomImage() {
  var randomIndex = Math.floor(Math.random() * myImages.length);
  return myImages[randomIndex];
}

console.log("JavaScript code executed");