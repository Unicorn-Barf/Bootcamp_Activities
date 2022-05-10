var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// add canis major to beginning of constellations
constellations.unshift('Canis Major');
console.log(constellations);
// delete venus from planets array
planets.pop();
console.log(planets);
// join constellations and planets to create galaxy array
var galaxy = constellations.concat(planets);
console.log(galaxy);
// convert polaris to all caps and store in a new variable
var newStar = star.toUpperCase();
console.log(newStar);