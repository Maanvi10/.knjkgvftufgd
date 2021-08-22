canvas=document.getElementById("valet");

 ctx=canvas.getContext("2d"); 

 carwidth=100;

 carheight=100;

 backgroundImg= "parkingLot.jpg"; 
carImg = "car2.png";

x=5;

y=225;

function add() {
 backgroundTag = new Image();
 backgroundTag.onload = uploadbackground;
 backgroundTag.src =  backgroundImg;

 carTag = new Image();
 carTag.onload = uploadcar;
 carTag.src =  carImg;
}

function uploadbackground() {
	
	ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar() {
	
	ctx.drawImage(carTag, x, y,carwidth,carheight);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(y >= 0)

    {
        y-=10;
        console.log("When up arrow is pressed = " + x + "-" +y);
        uploadbackground();
        uploadcar();
    }
}

function down()
{
	if(y <= 400)

    {
        y+=10;
        console.log("When down arrow is pressed, = " + x + "-" +y);
        uploadbackground();
        uploadcar();
    }
}

function left()
{
	if(x >= 0)

    {
        x-=10;
        console.log("When left arrow is pressed = " + x + "-" +y);
        uploadbackground();
        uploadcar();
    }
}

function right()
{
	if(x <= 600)

    {
        x+=10;
        console.log("When right arrow is pressed = " + x + "-" +y);
        uploadbackground();
        uploadcar();
    }
}
