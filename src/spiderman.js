var SpidermanDancer = function(top, left, timeBetweenSteps){
  // calling Dancer.call to import variables from Dancer
  Dancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass('spiderman');
};

//Object.create() so that spiderman can delegate to Dancer
SpidermanDancer.prototype = Object.create(Dancer.prototype);
// Resetting the constructor property to SpiderMan for new instances
SpidermanDancer.prototype.constructor = SpidermanDancer;

SpidermanDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.toggle();
};
