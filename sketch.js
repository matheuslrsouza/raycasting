
let ray
let walls
let particle
let xoff = 0
let yoff = 1000

function setup() {

  createCanvas(600, 400)
  background(220)

  particle = new Particle(createVector(0, 0))
  ray = new Ray(createVector(0, 0))
  walls = []
  // for (let i = 0; i < 10; i++) {
  //   let x1 = random(0, width)
  //   let y1 = random(0, height)
  //   let x2 = random(0, width)
  //   let y2 = random(0, height)
  //   walls.push(new Wall(createVector(x1, y1), createVector(x2, y2)))
  // }

  for (map of map) {
    walls.push(new Wall(createVector(map.a.x, map.a.y), createVector(map.b.x, map.b.y)))
  }

  walls.push(new Wall(createVector(0, 0), createVector(0, height)))
  walls.push(new Wall(createVector(0, 0), createVector(width, 0)))
  walls.push(new Wall(createVector(width, 0), createVector(width, height)))
  walls.push(new Wall(createVector(0, height), createVector(width, height)))

}

function draw() {

  background(0)

  //translate(width / 2, height / 2)

  particle.show()
  particle.update(noise(xoff) * width, noise(yoff) * height)
  //particle.update(mouseX, mouseY)

  xoff += 0.01
  yoff += 0.01
  
  //ray.show()
  for(wall of walls) {
    wall.show()
  }
  particle.check(walls)

  // let point = ray.intersects(wall)

  // if (point) {
  //   circle(point.x, point.y, 5)
  // }
}

let p1

// function to map wall
// function mousePressed() {

//   if (!p1) {
//     p1 = createVector(mouseX, mouseY)
//   } else {
//     let p2 = createVector(mouseX, mouseY)
//     walls.push(new Wall(p1, p2))
//     p1 = undefined
//   }

// }

// function keyPressed() {
//   console.log(walls)
// }
