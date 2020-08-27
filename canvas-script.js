window.onload = function () {
  //definitions
  const canvas = document.querySelector("canvas");
  canvas.width = 900;
  canvas.height = 450;
  const context = canvas.getContext("2d");

  //Linear Gradient

  // const linearGradient = context.createLinearGradient(100, 50, 800, 400);
  // linearGradient.addColorStop(0, "blue");
  // linearGradient.addColorStop(0.25, "orange");
  // linearGradient.addColorStop(0.5, "white");
  // linearGradient.addColorStop(0.75, "purple");
  // linearGradient.addColorStop(1, "green");

  //Radial Gradient

  const radialGradient = context.createRadialGradient(
    450,
    225,
    100,
    450,
    225,
    350
  );
  radialGradient.addColorStop(0, "blue");
  radialGradient.addColorStop(0.25, "orange");
  radialGradient.addColorStop(0.5, "white");
  radialGradient.addColorStop(0.75, "purple");
  radialGradient.addColorStop(1, "green");

  // context.fillStyle = linearGradient;
  context.fillStyle = radialGradient;
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.rect(100, 50, 700, 350);
  context.fill();
  context.stroke();
};
