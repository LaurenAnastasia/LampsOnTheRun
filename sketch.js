
let lampsheet;
let lampdata;

let animation = [];

let lamps = [];

function preload() {
    lampdata = loadJSON('abstract/lampsheet.json');
    lampsheet = loadImage('abstract/lamp4.png');

}

function setup() {
  createCanvas(810, 650);
  let frames = lampdata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img =lampsheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 3; i++) {
  lamps[i] = new Sprite (animation, 0, i * 200, random(0.1, 1));
    console.log(animation);
  }
}

function draw() {
  background(43, 37, 37);

  for (let lamp of lamps) {
    lamp.show();
    lamp.animate();
  }

  //image(animation[frameCount % animation.length], 0, 0);
}
