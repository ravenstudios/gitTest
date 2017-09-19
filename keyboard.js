function Keyboard(){

  let c1 = new Key(0, "C");
  let db1 = new Key(whiteKeyWidth - (blackKeyWidth * 0.5),  "Db");
  let d1 = new Key(whiteKeyWidth, "D");
  let eb1 = new Key((whiteKeyWidth * 2) - (blackKeyWidth * 0.5), "Eb");
  let e1 = new Key(whiteKeyWidth * 2, "E");
  let f1 = new Key(whiteKeyWidth * 3, "F");
  let gb1 = new Key((whiteKeyWidth * 4) - (blackKeyWidth * 0.5), "Gb");
  let g1 = new Key(whiteKeyWidth * 4, "G");
  let ab1 = new Key((whiteKeyWidth * 5) - (blackKeyWidth * 0.5), "Ab");
  let a1 = new Key(whiteKeyWidth * 5, "A");
  let bb1 = new Key((whiteKeyWidth * 6) - (blackKeyWidth * 0.5), "Bb");
  let b1 = new Key(whiteKeyWidth * 6, "B");
  let c2 = new Key(whiteKeyWidth * 7, "C");
  let db2 = new Key((whiteKeyWidth * 8) - (blackKeyWidth * 0.5), "Db");
  let d2 = new Key(whiteKeyWidth * 8, "D");
  let eb2 = new Key((whiteKeyWidth * 9) - (blackKeyWidth * 0.5), "Eb");
  let e2 = new Key(whiteKeyWidth * 9, "E");
  let f2 = new Key(whiteKeyWidth * 10, "F");
  let gb2 = new Key((whiteKeyWidth * 11) - (blackKeyWidth * 0.5), "Gb");
  let g2 = new Key(whiteKeyWidth * 11, "G");
  let ab2 = new Key((whiteKeyWidth * 12) - (blackKeyWidth * 0.5), "Ab");
  let a2 = new Key(whiteKeyWidth * 12, "A");
  let bb2 = new Key((whiteKeyWidth * 13) - (blackKeyWidth * 0.5), "Bb");
  let b2 = new Key(whiteKeyWidth * 13, "B");

  let keys = [
    c1, db1, d1, eb1, e1, f1, gb1, g1, ab1, a1, bb1, b1, c2, db2, d2, eb2, e2,
    f2, gb2, g2, ab2, a2, bb2, b2
  ]

  this.update = ()=>{

    for (var i = 0; i < keys.length; i++) {
      keys[i].update();
    }
  }

  this.draw = ()=>{
    for (var i = 0; i < keys.length; i++) {
      keys[i].draw()
    }
  }

  this.clearKeys = ()=>{


    for (var i = 0; i < keys.length; i++) {
      keys[i].setSelected(false);
    }
  }
this.setKey = (arr)=>{
  this.clearKeys();
  for (var i = 0; i < keys.length; i++) {

    for (var j = 0; j < arr.length; j++) {
      
      if(keys[i].getKey() === arr[j]){
        keys[i].setSelected(true);
      }

    }
  }




}





}
