var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  let state = element.getAttribute("data-state");
  // TODO: Complete function
  if (element.matches(".box")){
    if (state === "hidden") {
      element.dataset.state = "shown";
      element.textContent = element.dataset.number;
    }
    else {
      element.dataset.state = "hidden";
      element.textContent = '';
    }
  }
})
