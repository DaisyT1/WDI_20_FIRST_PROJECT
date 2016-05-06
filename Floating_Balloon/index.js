$(init);

function init() {

    $("body").keydown(function(e) {
        switch (e.which) {
        case 37:
            $('#balloon').animate({
                left: '-=100px'
            }); //left
            break;
        case 38:
            $('#balloon').animate({
                top: '-=5px'
            }); //up
            break;
        case 39:
            $('#balloon').animate({
                left: '+=100px'
            }); //right
            break;
        case 40:
            $('#balloon').animate({
                top: '+=5px'
            }); //bottom
            break;
        }
    })

    // Up: 38
    // Down: 40
    // Right: 39
    // Left: 37


    $(document).keydown(function(e) {
        console.log(e.keyCode);
    });


































}