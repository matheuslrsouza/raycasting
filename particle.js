class Particle {

  constructor(pos) {
    this.pos = pos
    this.rays = []
    for (let i = 0; i < 360; i+=1) {
      let rad = radians(i)
      this.rays.push(new Ray(pos, createVector(cos(rad), sin(rad))))
    }
  }

  show() {
    push()

    translate(this.pos.x, this.pos.y)
    circle(0, 0, 30)

    pop()
    
    for (ray of this.rays) {
      ray.pos.x = this.pos.x
      ray.pos.y = this.pos.y
      ray.show()
    }
  }

  update(x, y) {
    this.pos.set(x, y)
  }

  check(walls) {
    for (ray of this.rays) {
      let closest
      let minDist = Infinity
      for (wall of walls) {
        let point = ray.intersects(wall)
        if (point) {
          const d = dist(this.pos.x, this.pos.y, point.x, point.y)
          if (d < minDist) {
            closest = point
            minDist = d
          }
        }
      }
      if (closest) {
        stroke(255, 100)
        line(this.pos.x, this.pos.y, closest.x, closest.y)
      }
    }
  }

}