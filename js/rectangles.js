
// Arrays start at 0,1,2,3
var names = ["James", "George", "Steve", "Austin"];
document.getElementById("app").innerHTML = names;

function myFunction() {
  // Sort the names in the array
  names.sort();
  // Reverse the order of the names:
  names.reverse();
  document.getElementById("app").innerHTML = names;
}




