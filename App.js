import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/4e6f13f254c3349da3545c0301b74b1806afea50/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        //Variables for lincoln
var lincoln = new WebImage("https://i.pinimg.com/736x/fc/68/88/fc68880e389510786cced74b1e7b045c--special-effects-art-sculptures.jpg");
    var lincolnW = 640 / 4;
    var lincolnH = 852 / 4;
    var lincolnX = getWidth()-(lincolnW);
    var lincolnY = (getHeight()-(lincolnH))/2;

//Creates the titular Lincoln
function createLincoln()
{
    var lincoln = new WebImage("https://i.pinimg.com/736x/fc/68/88/fc68880e389510786cced74b1e7b045c--special-effects-art-sculptures.jpg");
    var lincolnW = 640 / 4;
    var lincolnH = 852 / 4;
    lincoln.setSize((lincolnW), (lincolnH));
    lincoln.setPosition(lincolnX,lincolnY);
    add(lincoln);
}
//Variables for the player's size, appearance, and starting position
var playerw = (3879 / 60);
var playerh = (4254 /60);
var player = new WebImage("data:image/jpeg;base64,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");
var playerx = (getWidth()/2 - playerw);
var playery = (getHeight()/2 - (playerh / 2));
function makePlayer()
{
    player.setSize((playerw), (playerh));
    player.setPosition(playerx, playery);
    add(player);
}

//Food Images, Locations, and Sizes
var grapes = new WebImage("https://5.imimg.com/data5/CU/PW/MY-5137401/purple-grapes-500x500.jpg");
grapes.setSize(65,65);
grapes.setPosition(30,50);
var oranges = new WebImage("http://rbemis.com/orange/orange.jpg");
oranges.setSize(65,65);
oranges.setPosition(30,200);
var lemons = new WebImage("data:image/jpeg;base64,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");
lemons.setSize(65,65);
lemons.setPosition(30,350);

//Basket locations, and Sizes
var food1b = new Rectangle(75,75);
food1b.setPosition(25,50);
var food1w = new Rectangle(65,70);
food1w.setPosition(30,50);
food1w.setColor(Color.WHITE);
var food2b = new Rectangle(75,75);
food2b.setPosition(25,200);
var food2w = new Rectangle(65,70);
food2w.setPosition(30,200);
food2w.setColor(Color.WHITE);
var food3b = new Rectangle(75,75);
food3b.setPosition(25,350);
var food3w = new Rectangle(65,70);
food3w.setPosition(30,350);
food3w.setColor(Color.WHITE);

//food counter
var foodcountn = 0;
var foodcounts = new Text("Consecutive feedings: " + foodcountn, "10pt Arial");
foodcounts.setPosition(0, 20);

function World()
{
    add(food1b);
    add(food1w);
    add(grapes);
    add(food2b);
    add(food2w);
    add(oranges);
    add(food3b);
    add(food3w);
    add(lemons);
    add(foodcounts);
}

//Right side of all the food bins
var foodzx2 = 100;
//Left side of all the food bins
var foodzx1 = 25;
//Y zones for all the foods (2 for bottom, 1 for top)
var grape2 = 125;
var grape1 = 50;
var orange2 = 275;
var orange1 = 200;
var lemon2 = 425;
var lemon1 = 350;
var lincoln2 = lincolnY + lincolnH;
var lincoln1 = lincolnY;

//fuctions for testing if the player is in the x range of the baskets
function locatePlayerX()
{
    var playerL = player.getX();
    var playerR = player.getX() + playerw;
    if(((playerL <= foodzx2) && (playerL >= foodzx1)) || ((playerR >= foodzx1) && (playerR <= foodzx2)))
    {
        return(1);
    }else if((playerR >= lincolnX) && (playerR <= lincolnX + lincolnW) || (playerL >= lincolnX) && (playerL <= lincolnX + lincolnW))
    {
        return(2);
    }
}

//function for testing which food basket the player is at
function locateplayerY()
{
    var playerT = player.getY();
    var playerB = player.getY() + playerh;
    if(locatePlayerX() == 1)
    {
        if(((playerB <= grape2) && (playerB >= grape1)) || ((playerT >= grape1) && (playerT <= grape2)))
        {
            return 1;
        }else if(((playerB <= orange2) && (playerB >= orange1)) || ((playerT >= orange1) && (playerT <= orange2)))
        {
            return 2;
        }else if(((playerB <= lemon2) && (playerB >= lemon1)) || ((playerT >= lemon1) && (playerT <= lemon2)))
        {
            return 3;
        }
    }else if(locatePlayerX() == 2)
    {
        if(((playerB <= lincoln2) && (playerB >= lincoln1)) || ((playerT >= lincoln1) && (playerT <= lincoln2)))
        {
            return 4;
        }
    }
}

//variables involved in moving and food
var pmovex = 0;
var pmovey = 0;
var sprintmulti = 1;
var food = 0;
var lincolnWant = 0;
var lincolnFood = "";
var Sentence = new Text("", "15pt Arial");
add(Sentence);

//function for choosing what food lincoln wants
function lincolnChoice()
{
    lincolnWant = Randomizer.nextInt(1,3);
    switch(lincolnWant)
    {
        case 1: lincolnFood = "I want Grapes"; break;
        case 2: lincolnFood = "I want Oranges"; break;
        case 3: lincolnFood = "I want Lemons"; break;
    }
    Sentence.setPosition(lincolnX,lincolnY - 10);
    Sentence.setText(lincolnFood);
}

//variables for food indicator
var inventory = new Text("", "10pt Arial");
inventory.setPosition(playerx, playery);

//function for picking up food
function takeFood()
{
    if(locatePlayerX() == 1)
    {
        switch(locateplayerY())
        {
            case 1: food = 1; inventory.setText("grapes"); break;
            case 2: food = 2; inventory.setText("oranges"); break;
            case 3: food = 3; inventory.setText("Lemons"); break;
        }
    }
}

//function for giving lincoln food
function giveFood()
{
    if((locatePlayerX() == 2) && (locateplayerY() == 4))
    {
        if(food == lincolnWant)
        {
            Sentence.setText("Yum!");
            setTimeout(lincolnChoice, 1000);
            food = 0;
            inventory.setText("");
            foodcountn += 1;
            foodcounts.setText("Consecutive feedings: " + foodcountn);
            
        }else 
        {
            switch(lincolnWant)
            {
                case 1: Sentence.setText("I wanted Grapes!");
                setTimeout(lincolnChoice, 1000);
                food = 0;
                inventory.setText("");
                break;
                case 2: Sentence.setText("I wanted Oranges!");
                setTimeout(lincolnChoice, 1000);
                food = 0;
                inventory.setText("");
                break;
                case 3: Sentence.setText("I wanted Lemons!");
                setTimeout(lincolnChoice, 1000);
                food = 0;
                inventory.setText("");
            }
            foodcountn = 0;
            foodcounts.setText("Consecutive feedings: " + foodcountn);
        }
    }
}

//Functions for moving and fooding
function KeyDown(e)
{
    switch(e.which)
    {
        case 40: pmovey = 2; break;
        case 38: pmovey = -2; break;
        case 37: pmovex = -2; break;
        case 39: pmovex = 2; break;
        case 16: sprintmulti = 2; break;
    }
    if(e.which == 32)
    {
        if(food == 0)
        {
            takeFood();
        }else
        {
            giveFood();
        }
    }
    if(e.which == 17)
    {
        food = 0;
        inventory.setText("");
    }
}
function KeyUp(e)
{
    switch(e.which)
    {
        case  38: pmovey = 0; break;
        case  40: pmovey = 0; break;
        case  37: pmovex = 0; break;
        case  39: pmovex = 0; break;
        case 16: sprintmulti = 1; break;
    }
}
function move()
{
    player.move(pmovex * sprintmulti, pmovey * sprintmulti);
    inventory.move(pmovex * sprintmulti,pmovey * sprintmulti);
}
function start()
{
    createLincoln();
    World();
    makePlayer();
    add(inventory);
    lincolnChoice();
    keyDownMethod(KeyDown);
    keyUpMethod(KeyUp);
    setTimer(move, 10);
    println("Controls:");
    println("Arrow keys: Move");
    println("Space: Pick up food");
    println("Ctrl: Drop food")
}


        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!false) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (false) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (false) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
