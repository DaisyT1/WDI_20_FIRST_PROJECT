$(init);

function init() {

    // Up: 38
    // Down: 40
    // Right: 39
    // Left: 37
//////////////BALLOON MOVEMENT///////////////////

        var playerMoving = false;
        var playerLeft = false;
        var playerUp = false;
        var playerRight = false;
        var playerDown = false;

          $(document).keydown(function(e) {

            if (e.keyCode === 37){
                playerLeft = true;
            } else if (e.keyCode === 38) {
                playerUp = true;
            } else if(e.keyCode === 39) {
                playerRight = true;
            } else if (e.keyCode === 40) {
                playerDown = true;
            }   
                  // console.log(e.keyCode)
          });


            while (playerDown === true) {
              var balloon = $( "#balloon" );
              var position = balloon.position();

                        console.log(position)
          }

          $(document).keyup(function(e) {

            if (e.keyCode === 37) {
                playerLeft = false;
            } else if (e.keyCode === 38) {
                playerUp = false;
            } else if(e.keyCode === 39) {
                playerRight = false;
            } else if (e.keyCode === 40) {
                playerDown = false;
            }   
          });

          // create the animation loop every 5ms
          // this sets the frame rate of your game
          var animateInterval = setInterval(animate, 10);
          
          function animate() {
              if(playerLeft === true) {
              $("#balloon").css({"left" : "-=1px"});
            } if (playerUp) {
              $("#balloon").css({"top" : "-=1px"});
            } if (playerRight) {
              $("#balloon").css({"left" : "+=1px"});
            } if (playerDown) {
              $("#balloon").css({"top" : "+=1px"});
            }
      
        }

//======================================           =============================================//

//get balloon coordinates
    $("body").click(function(e) {
         var offset = $(this).offset();
         console.log("X" + (e.pageX - offset.left));
         console.log("Y" + (e.pageY - offset.top));
     });
//=====================COLLISION DETECTION==============//

function collision(balloon, aDIV) {
      var x1 = (balloon).offset().left;
      var y1 = (balloon).offset().top;
      var h1 = (balloon).outerHeight(true);
      var w1 = (balloon).outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = (aDIV).offset().left;
      var y2 = (aDIV).offset().top;
      var h2 = (aDIV).outerHeight(true);
      var w2 = (aDIV).outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }

// ///////////////Collision detection every 0.2 (200ms) seconds////////////
// window.setInterval(function() {
//     console.log(collision($('#balloon'), burst.each));
// }, 200);

var burst = [$('#pauls'), $('#tall'), $('#wharf')];

window.setInterval(function() {
      $(burst).each(function(index, element) {
          if(collision($('#balloon'),  element)) {
                 console.log("you collided with" , element);
          }
      });
}, 200);


}
