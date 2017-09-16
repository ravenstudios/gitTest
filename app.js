console.log(" GIT test");
let notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
let major =    [0, 2, 2, 1, 2, 2, 2, 1];
let natMinor = [0, 2, 1, 2, 2, 1, 2, 2];
let harMinor = [0, 2, 1, 2, 2, 1, 3, 1];
let scales = [major, natMinor, harMinor];




$(function(){
  getNotes();
  $("#root").change(()=>{

    getNotes();
  });
  $("#scale").change(() => {
    getNotes();
  });

})


function getNotes() {
  let result = [];
  let root = notes.indexOf($("#root").val());;
  let scale = scales[$("#scale").val()];
  let numOfSteps = scale.length;
  let currentNote = root;
  for (var i = 0; i < numOfSteps; i++) {
    currentNote += scale[i];
    result.push(notes[currentNote % 12])
  }
  displayNotes(result);
  
}



function displayNotes(array) {
  $("#notes").html(array.toString());
}
