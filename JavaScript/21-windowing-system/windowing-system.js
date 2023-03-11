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

  this.resize = function (newSize) {
    if (newSize.width < 1) {
      newSize.width = 1;
    }
    if (newSize.height < 1) {
      newSize.height = 1;
    }
    if (newSize.width > this.screenSize.width - this.position.x) {
      newSize.width = this.screenSize.width - this.position.x;
    }
    if (newSize.height > this.screenSize.height - this.position.y) {
      newSize.height = this.screenSize.height - this.position.y;
    }
    this.size = newSize;
  };

  this.move = function (newPosition) {
    if (newPosition.x < 0) {
      newPosition.x = 0;
    }
    if (newPosition.y < 0) {
      newPosition.y = 0;
    }
    if (newPosition.x > this.screenSize.width - this.size.width) {
      newPosition.x = this.screenSize.width - this.size.width;
    }
    if (newPosition.y > this.screenSize.height - this.size.height) {
      newPosition.y = this.screenSize.height - this.size.height;
    }
    this.position = newPosition;
  };
}

export function changeWindow(window) {
  window.resize(new Size(400, 300));
  window.move(new Position(100, 150));

  return window;
}
