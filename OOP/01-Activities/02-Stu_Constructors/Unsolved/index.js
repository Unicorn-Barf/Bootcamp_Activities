// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
const Developer = function(name, favoriteTech) {
    this.name = name;
    this.favoriteTech = favoriteTech;
    this.introduction = () => {
        console.log(`Hi I'm ${this.name} and my favorite tech is ${this.favoriteTech}.`);
    }
}
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor
const joe = new Developer('Joe', 'wheel');
// TODO: Call the 'introduction()' method on the new object
joe.introduction();