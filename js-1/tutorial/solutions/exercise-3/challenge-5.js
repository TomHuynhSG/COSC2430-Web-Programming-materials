while (frontIsClear()) {
  putBall();
  turnLeft();
  move();
  turnRight();
  if (frontIsClear()) {
    move();
  }
}
putBall();


function turnRight() {
  turnLeft();
  turnLeft();
  turnLeft();
}