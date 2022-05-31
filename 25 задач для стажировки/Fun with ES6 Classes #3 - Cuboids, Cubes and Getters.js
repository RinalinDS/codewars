class Cuboid {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }
  get surfaceArea () {
    return (2* this.length * this.width) + (2*  this.length * this.height) + (2 * this.height * this.width)
  }
  get volume () {
    return this.width * this.length * this.height
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}


// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length,
//   width, height and store these three values in
// this.length, this.width and this.height respectively.
//
//   The class Cuboid should then have a getter surfaceArea which returns the surface area of the
// cuboid and a getter volume which returns the volume of the cuboid.