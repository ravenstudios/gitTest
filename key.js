function Key(_x, _y){
  let x = _x;
  let y = _y;


  this.draw = ()=>{
    beginShape();
vertex(x, y);
vertex(x + whiteKeyWidth - (blackKeyWidth / 2), y);
vertex(x + whiteKeyWidth - (blackKeyWidth / 2), y + blackKeyHeight);
vertex(x + whiteKeyWidth,  y + blackKeyHeight);
vertex( x + whiteKeyWidth, y + whiteKeyHeight);
vertex(x, y + whiteKeyHeight);

endShape(CLOSE);
  }

}
