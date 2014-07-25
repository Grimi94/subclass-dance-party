var CustomDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img>');
  this.setPosition($("body").height() * Math.random(),$("body").width() * Math.random());
  this.userInput = $('.searchBox').val();
  console.log(this.userInput);
  var that = this;
  position(this.$node);
  $.ajax({
    type: "GET",
    url: 'http://api.giphy.com/v1/gifs/search?q=dance+'+this.userInput+'&api_key=dc6zaTOxFJmzC'
  })
    .done(function( msg ) {
    // msg.data[Math.floor(Math.random() * msg.data.length)]['images']['original']['url'];
    console.log(that instanceof CustomDancer);
    that.$node.attr('src', msg.data[Math.floor(Math.random() * msg.data.length)]['images']['original']['url']).addClass('custom').addClass(that.userInput);
  });
};

CustomDancer.prototype = Object.create(Dancer.prototype);
CustomDancer.prototype.constructor = CustomDancer;

CustomDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  //this.$node.toggle();
};
// connect the giphy API to our html file
// we're going to access the search and random endpoints
// create an ajax call within the MonkeyDancer functoin
// need to pass whatever we put into the input box INTO
// the argument for the AJAX
//

// Create Monkey + SpiderMan Dancers w/ styling and have them work
// inside of our function
var position = function($node) {
  var firstNum = Math.floor(Math.random() * 22.5);
  var secondNum = 22.5 - firstNum;
  var posNegArray = [-1, 1];
  firstNum *= posNegArray[Math.floor(Math.random() * 1)];
  secondNum *= posNegArray[Math.floor(Math.random() * 1)];

  $node.attr('firstNum',firstNum);
  $node.attr('secondNum',secondNum);

};
// when CustomDancer is created, assign point on danceCircle div.
// store num in array, cross reference currentNum with array[i] to makesure no double nums
