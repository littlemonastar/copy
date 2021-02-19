class Falling_burger {
  constructor(_x, _y) {
    this.pos = createVector(_x - 150, _y - 50);
    this.vel = createVector(0, 1);
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    return this;
  }

  display() {
    image(img_burger, this.pos.x, this.pos.y, img_burger.width * 0.5, img_burger.height * 0.5);
    return this;
  }

  fell() {
    if (this.pos.y >= height + img_burger.height * 0.5) {
      this.pos.y = 0 - img_burger.height * 0.5;
    }
    return this;
  }

  render() {
    return this.update().display().fell();
  }
}

class Falling_onigiri {
  constructor(_x, _y) {
    this.pos = createVector(_x + 50, _y + 100);
    this.vel = createVector(0, 1);
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    return this;
  }

  display() {
    image(img_onigiri, this.pos.x, this.pos.y, img_onigiri.width * 0.5, img_onigiri.height * 0.5);
    return this;
  }

  fell() {
    if (this.pos.y >= height + img_onigiri.height * 0.5) {
      this.pos.y = 0 - img_onigiri.height * 0.5;
    }
    return this;
  }

  render() {
    return this.update().display().fell();
  }
}

class Falling_ramen {
  constructor(_x, _y) {
    this.pos = createVector(_x + 150, _y);
    this.vel = createVector(0, 1);
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    return this;
  }

  display() {
    image(img_ramen, this.pos.x, this.pos.y, img_ramen.width * 0.5, img_ramen.height * 0.5);
    return this;
  }

  fell() {
    if (this.pos.y >= height + img_ramen.height * 0.5) {
      this.pos.y = 0 - img_ramen.height * 0.5;
    }
    return this;
  }

  render() {
    return this.update().display().fell();
  }
}

class Falling_pudding {
  constructor(_x, _y) {
    this.pos = createVector(_x - 250, _y + 150);
    this.vel = createVector(0, 1);
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    return this;
  }

  display() {
    image(img_pudding, this.pos.x, this.pos.y, img_pudding.width * 0.5, img_pudding.height * 0.5);
    return this;
  }

  fell() {
    if (this.pos.y >= height + img_pudding.height * 0.5) {
      this.pos.y = 0 - img_pudding.height * 0.5;
    }
    return this;
  }

  render() {
    return this.update().display().fell();
  }
}

class Falling_salmonSushi {
  constructor(_x, _y) {
    this.pos = createVector(_x + 270, _y + 300);
    this.vel = createVector(0, 1);
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    return this;
  }

  display() {
    image(img_salmonSushi, this.pos.x, this.pos.y, img_salmonSushi.width * 0.5, img_salmonSushi.height * 0.5);
    return this;
  }

  fell() {
    if (this.pos.y >= height + img_salmonSushi.height * 0.5) {
      this.pos.y = 0 - img_salmonSushi.height * 0.5;
    }
    return this;
  }

  render() {
    return this.update().display().fell();
  }
}
