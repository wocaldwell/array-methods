var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
planets.forEach(addToDiv);
function addToDiv (planet) {
    el.innerHTML = el.innerHTML + "<p>" + planet + "</p><br>";
}

// Use the map method to create a new array where the first letter of each planet is capitalized

function capitalize (planet) {
    return " " + planet.charAt(0).toUpperCase() + planet.slice(1);
}
el.innerHTML = el.innerHTML + "<p>" + planets.map(capitalize) + "</p><br>";

// Use the filter method to create a new array that contains planets with the letter 'e'
function includesE(planet) {
    return  planet.includes("e");
}
el.innerHTML = el.innerHTML + planets.filter(includesE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];