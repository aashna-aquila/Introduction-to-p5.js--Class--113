function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint1="";
}

function draw()
{
    image(video,0,5,640,480);
    tint(tint1);
}

function apply()
{
    tint1=document.getElementById("text1").value;
}

function take_snapshot()
{
    save('image.png');
}