console.log(" GIT test");
let notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
let major =    [0, 2, 2, 1, 2, 2, 2, 1];
let natMinor = [0, 2, 1, 2, 2, 1, 2, 2];
let harMinor = [0, 2, 1, 2, 2, 1, 3, 1];
let scales = [major, natMinor, harMinor];

// let ionian = [];
// let dorian = [];
// let phrygian = [];
// let lydian = [];
// let mixolydian = [];
// let aeolian = [];
// let locrian = [];
// let modes = [ionian, dorian, , phrygian, lydian, mixolydian, aeolian, locrian];


// Ionian	I	T-T-s-T-T-T-s	C-D-E-F-G-A-B-C
// Dorian	II	T-s-T-T-T-s-T	D-E-F-G-A-B-C-D
// Phrygian	III	s-T-T-T-s-T-T	E-F-G-A-B-C-D-E
// Lydian	IV	T-T-T-s-T-T-s	F-G-A-B-C-D-E-F
// Mixolydian	V	T-T-s-T-T-s-T	G-A-B-C-D-E-F-G
// Aeolian	VI	T-s-T-T-s-T-T	A-B-C-D-E-F-G-A
// Locrian	VII	s-T-T-s-T-T-T	B-C-D-E-F-G-A-B



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
  setModes(result);
}

// function setModes(array) {
//   console.log(currentNote);
//   for (var i = 0; i < modes.length; i++) {
//
//     for (var j = 0; j < modes[i].length; j++) {
//
//     }
//   }
// }

function displayNotes(array) {
  $("#notes").html(array.toString());
}
