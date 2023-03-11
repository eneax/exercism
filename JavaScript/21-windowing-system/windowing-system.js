// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
  this.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  };
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
  this.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
  };
}

export function ProgramWindow() {
  this.screenSize = new Size(800, 600);
  this.size = new Size();
  this.position = new Position();
}
