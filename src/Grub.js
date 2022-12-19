var Grub = function() {
  this.species = 'grub'
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function () {
  if (!!this.food) {
    console.log(this.species + ' has eaten ' + this.food);
    this.food = undefined;
  } else {
    console.log(this.species + ' has no food.');
  }
}

