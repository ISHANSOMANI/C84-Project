canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;

car2_width = 100;
car2_height = 90;



background_image = "racing.jpg";

car1_image = "car1.png";

car1_x = 10;
car1_y = 10;

car2_image = "car2.png";

car2_x = -10;
car2_y = 500;

function add() {
    background_imagetag = new Image();
    background_imagetag.onload = uploadBackground;
    background_imagetag.src = background_image;

    car1_imagetag = new Image();
    car1_imagetag.onload = uploadCar1;
    car1_imagetag.src = "car1.png";

    car2_imagetag = new Image();
    car2_imagetag.onload = uploadCar2;
    car2_imagetag.src = "car2.png";
}


function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1_imagetag,car1_x,car1_x,car1_width,car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imagetag,car2_x,car2_x,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if(keyPressed == '38'){
        up();
        console.log("up Press");
    }

    if(keyPressed == '37'){
    left();
        console.log("left Press")

    }if(keyPressed == '40'){
        down();
        console.log("down Press")

    }if(keyPressed == '39'){
        right();
        console.log("right Press")
    }
}

