var MonkeyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img>');
  this.setPosition($("body").height() * Math.random(),$("body").width() * Math.random());

  var that = this;
  $.ajax({
    type: "GET",
    url: 'http://api.giphy.com/v1/gifs/search?q=dance+monkey&api_key=dc6zaTOxFJmzC'
  })
    .done(function( msg ) {
    // msg.data[Math.floor(Math.random() * msg.data.length)]['images']['original']['url'];
    console.log(that instanceof MonkeyDancer);
    that.$node.attr('src', msg.data[Math.floor(Math.random() * msg.data.length)]['images']['original']['url']).addClass('monkey');
  });
};

MonkeyDancer.prototype = Object.create(Dancer.prototype);
MonkeyDancer.prototype.constructor = MonkeyDancer;

MonkeyDancer.prototype.step = function(){
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
