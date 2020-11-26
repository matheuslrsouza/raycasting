
let ray
let walls
let particle
let xoff = 0
let yoff = 1000

function setup() {

  createCanvas(800, 600)
  background(220)

  particle = new Particle(createVector(0, 0))
  ray = new Ray(createVector(0, 0))
  walls = []

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

  particle.show()
  particle.update(noise(xoff) * width, noise(yoff) * height)
  //particle.update(mouseX, mouseY)

  xoff += 0.01
  yoff += 0.01
  
  for(wall of walls) {
    wall.show()
  }
  particle.check(walls)
}

// let p1

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
