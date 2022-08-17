// TODO: Refactor the class to a factory function.
class Lesson {
  constructor() {
    this.title = 'Module 17 - Computer Science';
    this.description = 'CS for JS';
  }
  information() {
    console.log(this.title, this.description);
  }
}

const csForJS = new Lesson();
csForJS.information();





const tellMe = (state) => ({
  information: () => console.log(state.title, state.description),
});

const lessonFactory = (title, description) => {
  const state = {
    title,
    description,
  };

  return { ...tellMe(state) };
};

const myInfo = lessonFactory('Werk', 'Death Drops 101');
myInfo.information();
