function Key(_x, _key){
  let x = _x;

  let key = _key;
  let initColor;
  let selectedColor = {r: 0, g: 0, b: 50, a: 100};
  let color;
  let isSelected = false;
  let vertices = [];
  let keyToDraw;

  this.update = ()=>{
    if(isSelected){

      color = selectedColor;
    }
    else{
      color = initColor;
    }
  }
  this.draw = ()=>{

    functions[keyToDraw]();
}

  var functions = {

    key_C_F: function(){
      fill(color.r, color.g, color.b, color.a);
      beginShape();
      vertex(x, 0);
      vertex(x + whiteKeyWidth - (blackKeyWidth * 0.5), 0);
      vertex(x + whiteKeyWidth - (blackKeyWidth * 0.5), blackKeyHeight);
      vertex(x + whiteKeyWidth,  blackKeyHeight);
      vertex(x + whiteKeyWidth, whiteKeyHeight);
      vertex(x, whiteKeyHeight);
      endShape(CLOSE);
    },
    key_E_B: function(){
      fill(color.r, color.g, color.b, color.a);
      beginShape();
      vertex(x + (blackKeyWidth * 0.5), 0);
      vertex(x + whiteKeyWidth, 0);
      vertex(x + whiteKeyWidth, whiteKeyHeight);
      vertex(x, whiteKeyHeight);
      vertex(x , blackKeyHeight);
      vertex(x + (blackKeyWidth * 0.5), blackKeyHeight);
      endShape(CLOSE);

    },
    key_D_G_A: function(){
      fill(color.r, color.g, color.b, color.a);
      beginShape();
      vertex(x + (blackKeyWidth * 0.5), 0);
      vertex(x + whiteKeyWidth - (blackKeyWidth * 0.5), 0);
      vertex(x + whiteKeyWidth - (blackKeyWidth * 0.5), blackKeyHeight);
      vertex(x + whiteKeyWidth,  blackKeyHeight);
      vertex( x + whiteKeyWidth, whiteKeyHeight);
      vertex(x, whiteKeyHeight);
      vertex(x, blackKeyHeight);
      vertex(x + (blackKeyWidth * 0.5), blackKeyHeight);
      endShape(CLOSE);
    },
    key_sharps: function(){
      fill(color.r, color.g, color.b, color.a);
      beginShape();
      vertex(x, 0);
      vertex(x + blackKeyWidth, 0);
      vertex(x + blackKeyWidth, blackKeyHeight);
      vertex(x, blackKeyHeight);
      endShape(CLOSE);
    }

  };

  this.setSelected = (bool)=>{

    isSelected = bool;
  }

  switch (key) {
    case "C":
    case "F":
      initColor = {r: 255, g: 255, b: 255, a: 255};
      color = initColor;
      keyToDraw = "key_C_F";
      break;

    case "Db":
    case "Eb":
    case "Gb":
    case "Ab":
    case "Bb":
      initColor = {r: 0, g: 0, b: 0, a: 255};
      color = initColor;
      keyToDraw = "key_sharps";
      break;

    case "D":
    case "G":
    case "A":
      initColor = {r: 255, g: 255, b: 255, a: 255};
      color = initColor;
      keyToDraw = "key_D_G_A";
      break;

    case "E":
    case "B":
      initColor = {r: 255, g: 255, b: 255, a: 255};
      color = initColor;
      keyToDraw = "key_E_B"
      break;
    default:
    console.log("key error");
  }

  this.getKey = ()=>{
    return key;
  }
}
