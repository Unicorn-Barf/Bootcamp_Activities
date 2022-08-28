// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// This makes the boxClick function available for importing in another JS file
export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
