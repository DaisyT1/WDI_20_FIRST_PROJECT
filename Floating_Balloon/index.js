$(init);

function init() {

    // Up: 38
    // Down: 40
    // Right: 39
    // Left: 37

//Globals
var livesLost = 0;
var playerTurn = true; //true = player1, false = player2
var currentScore = 0;
var player1Score = null;
var player2Score = null;
var floatInterval;
var animateInterval;
var balloon = $("#balloon");
var collisionInterval;
var interval;
var tooManyHits = false;
var difficulty = 7000;


//===================== OBJECTS OF IMAGES AND SPECIFICATIONS===============//

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
      "background-image": "url('http://pad2.whstatic.com/images/thumb/8/83/Draw-a-Plane-Step-9.jpg/aid1437665-728px-Draw-a-Plane-Step-9.jpg')",
              }, {
      "height": 300,
      "width": 300,
      "background-image": "url('http://www.wallquotes.com/sites/default/files/styles/uc_canvas/public/arts0018-80.png?itok=rIdlshah')",
      "bottom" : 0,
                }, {
      "height": 300,
      "width": 300,
      "background-image": "url('http://pad2.whstatic.com/images/thumb/8/83/Draw-a-Plane-Step-9.jpg/aid1437665-728px-Draw-a-Plane-Step-9.jpg')",
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


  //////////////BALLOON MOVEMENT///////////////////
  var playerMoving = false;
  var playerLeft = false;
  var playerUp = false;
  var playerRight = false;
  var playerDown = false;

  // start the game
  ////////append player turn to box and click play//////
  $(".box").one("click" , function(){
    
      startGame();

  });

  function createKeyListeners() {

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
     
  }    
 
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

//==================random displays================//

    // $('.camera').delay(2000).slideDown(500).queue(function (wait) {

    //  $(this).append("<img>").css({"display" : "inline"});
    //        setTimeout(function() {
    //          $('.camera').remove();
    //        }, 5000); 
    // });

//==============GET A RANDOM OBJECT OUT OF THE ARRAY - pass to createObstacle ================//

  function pickAnObstacle(){

    var obstacleNumber = Math.floor(Math.random() * obstacleTypes.length);
    var myObstacle = obstacleTypes[obstacleNumber];

    //obstacleTypes.splice(obstacleNumber , 1);

    //console.log(obstacleTypes.length);

    return myObstacle;

  }
  
//========================PUSH TO THE PAGE===========================//
////////obsticleType passed into createObtacless in get random//////

function createObstacle(obstacle){
    
        var newObstacle = $("<div></div>");

        newObstacle.css(obstacle);
        newObstacle.addClass("pop");

        $(".box").prepend(newObstacle);
        newObstacle.animate({left: -obstacle.width}, difficulty , function(){
        newObstacle.remove() }); 

}

// createObstacle(pickAnObstacle());

  function startGame() {
  
    playerTurn ? alert("Player 1 turn") : alert("Player 2 turn");

    reset();
    createKeyListeners();
    startRender();

  }

  function reset() {

    // reset the balloon
    $("#balloon").css({top:"80px" , "left" : "150px"});

    playerLeft = false;
    playerUp = false;
    playerDown = false;
    playerRight = false;

    // reset the score
    currentScore = 0;

    //reset lives lost
    livesLost = 0;

  }

    function startRender() {
              
     // create the animation loop every Xms for balloon movement
            
              animateInterval = setInterval(animate, 5);
                
              function animate() {
                  if(playerLeft === true) {
                  $("#balloon").css({"left" : "-=1px"});
                } if (playerUp) {
                  $("#balloon").css({"top" : "-=2px"});
                } if (playerRight) {
                  $("#balloon").css({"left" : "+=1px"});
                } if (playerDown) {
                  $("#balloon").css({"top" : "+=1px"});
                }    
            }

  //================BALLOON FLOATING EFFECT======================//

              floatInterval = setInterval(function() {
                balloon.css({ top:'+=1'}, 3)
              });
          
   //============collision detection every 0.2 (200ms) seconds==================//

          collisionInterval = window.setInterval(function() {

                  $(".pop").each(function(index, element) {
                      if(!$("#balloon").hasClass("hit") && collision($('#balloon'),  $(element))) {
                        livesLost++;
                        
                        balloon.addClass('hit');
                        setTimeout(function(){
                          balloon.removeClass('hit');
                        },2500);

                        // check for player game over
                        if (livesLost === 3) {
                          nextRound();
                        }
                      }
                  });
                  //console.log("the player score is " + playerScore);


            }, 200);

    //=======PUSH IMAGE PAGE EVERY X SECONDS PASSING IN createObstacle ======//
                 
          interval = setInterval(function(){
                // the player gets a point for every new obstacle
                currentScore++;
                console.log(currentScore);
                difficulty -= 100;
                createObstacle(pickAnObstacle())
          }, 2000);


}////////////END OF STARTRENDER////////////////


    function pauseGame() {

          clearInterval(animateInterval);
          clearInterval(floatInterval);
          clearInterval(collisionInterval);
          clearInterval(interval);
          $(document).off("keyup" , "**");
          $(document).off("keydown" , "**");
        
  }

    function nextRound() {

          pauseGame();
          $(".pop").remove();
          // alert(playerTurn);
          if (playerTurn === true) {
            playerTurn = !playerTurn; 
            player1Score = currentScore;
            startGame();
          } else {
            player2Score = currentScore;
            gameOver();
          }

        console.log("this is player 1 score :" + player1Score)
          // if player1 turn player1 score = currentscore
          // reset current score
          // change to player 2
          // update the screen 
          // start the next round

          // if player 2 same as above except now it's game over
          // show game over screen
      }

      // stuff to do when the game is over
      function gameOver() {
        //pauseGame();
        if (player1Score > player2Score) {
          alert("Player 1 wins")
        } else if (player2Score > player1Score) {
          alert("player 2 wins")
        } else { 
          alert("its a draw");
        }
      }


// END OF THE PROGRAM
}
