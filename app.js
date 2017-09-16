console.log(" GIT test");
let notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
let major =    [0, 2, 2, 1, 2, 2, 2, 1];
let natMinor = [0, 2, 1, 2, 2, 1, 2, 2];
let harMinor = [0, 2, 1, 2, 2, 1, 3, 1];
let scales = [major, natMinor, harMinor];

let ionian = {
  name: "Ionian",
  type: "Major",
  feel: "Happy, Bright",
  notes: ["", "", "", "", "", "", ""]
};

let dorian = {
  name: "Dorian",
  type: "Minor",
  feel: "Hip, sophisticated, jazzy",
  notes: ["", "", "", "", "", "", ""]
};

let phrygian = {
  name: "Phrygian",
  type: "Minor",
  feel: "Spanish/Flamenco",
  notes: ["", "", "", "", "", "", ""]
};

let lydian = {
  name: "Lydian",
  type: "Major",
  feel: "Surreal, Airy",
  notes: ["", "", "", "", "", "", ""]
};

let mixolydian = {
  name: "Mixolydian",
  type: "Major",
  feel: "Bluesy Rock",
  notes: ["", "", "", "", "", "", ""]
};

let aeolian = {
  name: "Aeolian",
  type: "Minor",
  feel: "Sentimental, Tragic",
  notes: ["", "", "", "", "", "", ""]
};

let locrian = {
  name: "Locrian",
  type: "Minor",
  feel: "Evil, Dark",
  notes: ["", "", "", "", "", "", ""]
};


let modes = [ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian];



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
  result.pop();//removes last note to be used with modes
  setModes(result);

}



function displayNotes(array) {
  $("#notes").html(array.toString());


}

function setModes(array) {

  //clearModes();
  for (var i = 0; i < modes.length; i++) {

    for (var j = 0; j < array.length; j++) {
      modes[i].notes[j] = array[(j + i) % array.length];
    }
  }


  // $("#modes").html("");
  // for (var i = 0; i < modes.length; i++) {
  //   $("#modes").append(modes[i].toString() + "</br>");
  // }
  displayModes();
  console.log(ionian);
  console.log(locrian);
}
function clearModes(){
  for (var i = 0; i < modes.length; i++) {
    for (var j = 0; j < modes[i].length; j++) {

      modes[i].shift();
    }
  }
}
function displayNotes(array) {
  $("#notes").html(array.toString());
}

function displayModes() {
  let notes = "";
  $("#modes").html("");
  let html = "<table><tr><th>Mode</th><th>Notes</th><th>Type</th><th>Feeling</th> <th>Backing Track Link</th</tr>";
  for (var i = 0; i < modes.length; i++) {
    html += "<tr><th>" + modes[i].name + "</th>";
    notes = "";
    for (var j = 0; j < modes[i].notes.length; j++) {
      notes += modes[i].notes[j] + " ";
      // html += "<td>" + modes[i].notes[j] + "</td>";
    }
    let m = modes[i].name;
    let r = modes[i].notes[0];
    let link = "https://www.youtube.com/results?search_query=" + escape(r) + " " + m  + " backing track";
    html += "<td><div class=\"notes\">" + notes + "</div></td>";
    html += "<td>" +modes[i].type + "</td><td>"+ modes[i].feel +"</td><td><a target=\"_blank\" href=\"" + link + "\">"+ r + " " + m + " Backing Track Video</a></td></tr>"
  }
  html +="</table>"
  console.log(html);
  $("#modes").html(html);


}
