var Bee = function() {
  Grub.call(this);
  this.species = 'bee';
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  console.log(this);
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

