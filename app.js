console.log(" GIT test");

let major = [2, 2, 1, 2, 2, 2, 1];
let notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
$(function(){

  $("#root").change(()=>{
    console.log("change");
    let scale = "";
    let scaleSize = major.length;


    let startingNote = notes.indexOf($("#root").val());

    scale += notes[startingNote] + " ";
    let currentNote = startingNote;
    for (var i = 0; i < scaleSize; i++) {
      currentNote += major[i];
      console.log(currentNote);

      scale += notes[currentNote % 12]  + " ";
    }
    console.log(scale);
  });
})
