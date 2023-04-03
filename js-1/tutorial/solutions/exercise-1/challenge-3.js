function moveStraightAndPutBall() {
    while (frontIsClear()) {
        move();
    }
    putBall();
    turnLeft();
}


for (var i = 0; i < 4; i++){
    moveStraightAndPutBall();
}