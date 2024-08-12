const img = document.getElementById("rotate-img");
let isDragging = false;
let startAngle = 0;
let startX = 0;

function getRotationAngle(x) {
  return (x / window.innerWidth) * 360;
}

img.addEventListener("mousedown", (event) => {
  isDragging = true;
  startX = event.clientX;
  startAngle = parseFloat(getComputedStyle(img).transform.split(",")[1] || 0);
});

window.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  const deltaX = event.clientX - startX;
  const rotation = getRotationAngle(deltaX);
  img.style.transform = `rotate(${startAngle + rotation}deg)`;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});
