function moveStraightAndPutBallEveryStep() {
    putBall();
    move();
    putBall();
    move();
    putBall();
    turnLeft();
}


for (var i = 0; i < 4; i++){
    moveStraightAndPutBallEveryStep();
}
