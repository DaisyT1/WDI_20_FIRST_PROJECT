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
              var balloon = $("#balloon");
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
          var animateInterval = setInterval(animate, 1);
          
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

    //================BALLOON FLOATING EFFECT======================//

     
        //   var balloon = $("#balloon")
        
        //     function runIt() {
        //     balloon.animate({top:'+=15'}, 1000);
        //     balloon.animate({top:'-=15'}, 1000, runt);
        // }

        // runIt();

//===============================GET X & Y COORDS===================================//

    $("body").click(function(e) {
         var offset = $(this).offset();
         console.log("X" + (e.pageX - offset.left));
         console.log("Y" + (e.pageY - offset.top));
     });
//=====================COLLISION DETECTION==============//

function collision(balloon, aDiv) {
      var x1 = (balloon).offset().left;
      var y1 = (balloon).offset().top;
      var h1 = (balloon).outerHeight(true);
      var w1 = (balloon).outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = (aDiv).offset().left;
      var y2 = (aDiv).offset().top;
      var h2 = (aDiv).outerHeight(true);
      var w2 = (aDiv).outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }

//============detection every 0.2 (200ms) seconds==================//
///////////////////sort base and add here!!!!!!!!!!!!!!!
var burstOptions =  [ $('#tall'), $('#wharf'), $('#pauls'), $('#pickle'), $('#pickle2'), $('#tower'), $('#eye'), $('#bridgeL'), $('#bridgeR'), $('#parliament'), $('#parliament2'), $('#parliament3'), $('#bb'), $('#shard'), $('#shard2'), $('#top'), $('#right'), $('#left'), $('.camera')];

window.setInterval(function() {
      $(burstOptions).each(function(index, element) {
          if(collision($('#balloon'),  element)) {
                 console.log("collided with" , element);
          }
      });
}, 200);

//==================insert points to collect================//
var player1Turn 
var player2Turn 
var player1Score = 0;
var player2Score = 0;



    $('.camera').delay(6000).queue(function (wait) {

     $(this).append("<img>").css({"display" : "inline"})
           setTimeout(function() {
             $('.camera').remove();
           }, 5000); 
    });
       



}