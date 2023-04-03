for (let i = 0; i < 9; i++) {
    smallStairCase();
}
putBall();

function smallStairCase(){
    putBall();
    turnLeft();
    move();
    putBall();
    turnRight();
    move();
}

function turnRight(){
    turnLeft();    
    turnLeft();
    turnLeft();
}