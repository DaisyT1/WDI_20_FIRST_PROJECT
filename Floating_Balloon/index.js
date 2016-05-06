$(init);

function init() {

    // Up: 38
    // Down: 40
    // Right: 39
    // Left: 37


        $(function(){

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
          })

          $(document).keydown(function(e) {
              console.log(e.keyCode);

              // move the balloon by 1 pixel each frame
              // change this to make it move faster
              if(playerLeft) {
              $("#balloon").css({"left" : "-=1px"});
            } if (playerUp) {
              $("#balloon").css({"top" : "-=1px"});
            } if (playerRight) {
              $("#balloon").css({"left" : "+=1px"});
            } if (playerDown) {
              $("#balloon").css({"top" : "+=1px"});
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
    });
}
