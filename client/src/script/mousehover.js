// Assuming your div has an id of 'mouse-box'
const mouseBox = document.querySelector("mouseHover");

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  console.log("hello");
  // Adjust the div's position to follow the mouse cursor
  mouseBox.style.position = "absolute";
  mouseBox.style.left = `${mouseX}px`;
  mouseBox.style.top = `${mouseY}px`;
});
