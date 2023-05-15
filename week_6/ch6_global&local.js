let x = "global";
function doingStuff() {
  let x = "local";
  console.log(x);
}
doingStuff();
console.log(x);
