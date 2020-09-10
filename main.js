let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

alert('Press space to delete 1 snow and r to add 1 snow');

let snow = [];
for (i=0; i<100; i++) {
  snow.push({
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    r: Math.random() * 6,
    speed: Math.random() * 6
  })
}

requestAnimationFrame(animate)

function animate() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.fillStyle = 'white';

  for (i=0; i<snow.length; i++) {
    ctx.beginPath();
    ctx.arc(snow[i].x, snow[i].y, snow[i].r, 0, 2 * Math.PI);
    ctx.fill();
    snow[i].y += snow[i].speed;
    if (snow[i].y > cnv.height - 5) {
      snow[i].y = 2;
    }
  }

  requestAnimationFrame(animate)
}

document.addEventListener('keypress', keypressed)

function keypressed(event) {
  let key = event.keyCode;
  if (key == 32) {
    snow.pop();
  } else if (key == 114) {
    snow.push({
      x: Math.random() * cnv.width,
      y: Math.random() * cnv.height,
      r: Math.random() * 6,
      speed: Math.random() * 6
    })
  }
}
