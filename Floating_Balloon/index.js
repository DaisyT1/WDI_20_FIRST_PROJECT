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
              $("#balloon").css({"left" : "-=2px"});
            } if (playerUp) {
              $("#balloon").css({"top" : "-=2px"});
            } if (playerRight) {
              $("#balloon").css({"left" : "+=2px"});
            } if (playerDown) {
              $("#balloon").css({"top" : "+=2px"});
            }    
        }

    //================BALLOON FLOATING EFFECT======================//

     
          // var balloon = $("#balloon")

          // setInterval(function() {
          //   balloon.css({ top:'+=1'}, 2000)
          // })

//===============================GET X & Y COORDS===================================//

    // $("body").click(function(e) {
    //      var offset = $(this).offset();
    //      console.log("X" + (e.pageX - offset.left));
    //      console.log("Y" + (e.pageY - offset.top));
    //  });
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

window.setInterval(function() {
  var burstOptions =  [ $('#top'), $('#right'), $('#left'), $('#base'), $(".pop")];
      $(burstOptions).each(function(index, element) {
          if(collision($('#balloon'),  element)) {
                 console.log("hit" , element);
          }
      });
}, 100);

//==================insert points to collect================//
var player1Turn 
var player2Turn 
var player1Score = 0;
var player2Score = 0;



    $('.camera').delay(2000).slideDown(500).queue(function (wait) {

     $(this).append("<img>").css({"display" : "inline"});
           setTimeout(function() {
             $('.camera').remove();
           }, 5000); 
    });

    //=====================OBJECT OF IMAGES AND SPECIFICATIONS===============//
var obstacleTypes = [
{ "height": 400,
  "width": 300,
  "background-image": "url('http://preview.turbosquid.com/Preview/2014/07/10__11_04_03/1.jpg29a3bef4-bdc5-40d3-b98a-55ef46374923Original.jpg')"
},
{ "height": 300,
  "width": 300,
  "background-image": "url('http://www.wallquotes.com/sites/default/files/styles/uc_canvas/public/arts0018-80.png?itok=rIdlshah')",
}, {
  "height": 300,
  "width": 300,
  "background-image": "url('http://preview.turbosquid.com/Preview/2014/07/10__11_04_03/1.jpg29a3bef4-bdc5-40d3-b98a-55ef46374923Original.jpg')",
  }, {
  "height": 300,
  "width": 300,
  "background-image": "url('http://www.wallquotes.com/sites/default/files/styles/uc_canvas/public/arts0018-80.png?itok=rIdlshah')",
    }, {
  "height": 300,
  "width": 300,
  "background-image": "url('http://preview.turbosquid.com/Preview/2014/07/10__11_04_03/1.jpg29a3bef4-bdc5-40d3-b98a-55ef46374923Original.jpg')",
      }, {
  "height": 300,
  "width": 300,
  "background-image": "url('http://www.wallquotes.com/sites/default/files/styles/uc_canvas/public/arts0018-80.png?itok=rIdlshah')",
        }, {
  "height": 300,
  "width": 300,
  "background-image": "url('http://www.wallquotes.com/sites/default/files/styles/uc_canvas/public/arts0018-80.png?itok=rIdlshah')",
          }, {
  "height": 300,
  "width": 300,
  "background-image": "url('http://www.wallquotes.com/sites/default/files/styles/uc_canvas/public/arts0018-80.png?itok=rIdlshah')",
  "bottom" : 0,
            }, {
  "height": 300,
  "width": 300,
  "background-image": "url('http://www.wallquotes.com/sites/default/files/styles/uc_canvas/public/arts0018-80.png?itok=rIdlshah')",
  "bottom" : 0,
        }, {
  "height": 300,
  "width": 300,
  "background-image": "url('http://www.wallquotes.com/sites/default/files/styles/uc_canvas/public/arts0018-80.png?itok=rIdlshah')",
  "bottom" : 0,
        }, {
  "height": 100,
  "width": 150,
  "background-image": "url('http://pad2.whstatic.com/images/thumb/8/83/Draw-a-Plane-Step-9.jpg/aid1437665-728px-Draw-a-Plane-Step-9.jpg')",
  "top" : "50px",
                  }
  ]; //END OF ARRAY

  //==============GET A RANDOM OBJECT OUT OF THE ARRAY - pass to createObstacle ================//

  function pickAnObstacle(){

    var obstacleNumber = Math.floor(Math.random() * obstacleTypes.length);
    var myObstacle = obstacleTypes[obstacleNumber];

    return myObstacle;

    // myObstacle.splice(); -- remove this object so it cant be picked again?!

  }
  
//========================PUSH ONTO THE PAGE===========================//

function createObstacle(obstacle){
  
   // for (i = 0 ; i <= obstacleTypes.length; i++) {
    
        var newObstacle = $("<div></div>");

        newObstacle.css(obstacle);
        newObstacle.addClass("pop");

        $(".box").prepend(newObstacle);
        newObstacle.animate({left: -obstacle.width}, 7000 , function(){
        newObstacle.remove() });
     // }

}

// createObstacle(pickAnObstacle());


setInterval(function(){ 

  createObstacle(pickAnObstacle()) }, 3000);



// END OF THE PROGRAM
}