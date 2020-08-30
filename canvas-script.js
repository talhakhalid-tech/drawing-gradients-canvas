window.onload = function () {
  //definitions
  const canvas = document.querySelector("canvas");
  canvas.width = 900;
  canvas.height = 600;
  const context = canvas.getContext("2d");

  let d1x = 0.0;
  let d2x = 0.1;
  let d3x = 0.2;
  let d4x = 0.3;
  let d5x = 0.4;
  let d6x = 0.5;
  let d7x = 0.6;
  let d8x = 0.7;
  let d9x = 0.8;
  let d10x = 0.9;
  let d11x = 1.0;

  animateFunction = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const radialGradient = context.createRadialGradient(
      450,
      300,
      10,
      450,
      300,
      350
    );

    d1x += 0.01;
    d2x += 0.01;
    d3x += 0.01;
    d4x += 0.01;
    d5x += 0.01;
    d6x += 0.01;
    d7x += 0.01;
    d8x += 0.01;
    d9x += 0.01;
    d10x += 0.01;
    d11x += 0.01;
    if (d1x >= 1.0) {
      d1x = 0;
    } else if (d2x >= 1.0) {
      d2x = 0;
    } else if (d3x >= 1.0) {
      d3x = 0;
    } else if (d4x >= 1.0) {
      d4x = 0;
    } else if (d5x >= 1.0) {
      d5x = 0;
    } else if (d6x >= 1.0) {
      d6x = 0;
    } else if (d7x >= 1.0) {
      d7x = 0;
    } else if (d8x >= 1.0) {
      d8x = 0;
    } else if (d9x >= 1.0) {
      d9x = 0;
    } else if (d10x >= 1.0) {
      d10x = 0;
    } else if (d11x >= 1.0) {
      d11x = 0;
    }

    radialGradient.addColorStop(d1x, "black");
    radialGradient.addColorStop(d2x, "white");
    radialGradient.addColorStop(d3x, "black");
    radialGradient.addColorStop(d4x, "white");
    radialGradient.addColorStop(d5x, "black");
    radialGradient.addColorStop(d6x, "white");
    radialGradient.addColorStop(d7x, "black");
    radialGradient.addColorStop(d8x, "white");
    radialGradient.addColorStop(d9x, "black");
    radialGradient.addColorStop(d10x, "white");
    radialGradient.addColorStop(d11x, "black");

    const radian = Math.PI / 180;

    context.beginPath();
    context.fillStyle = radialGradient;
    context.strokeStyle = radialGradient;
    context.lineWidth = 5;
    context.arc(450, 300, 300, 0, radian * 360);
    context.fill();
    context.stroke();

    window.requestAnimationFrame(animateFunction);
  };

  window.requestAnimationFrame(animateFunction);
};
