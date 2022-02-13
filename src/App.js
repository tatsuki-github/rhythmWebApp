import React from 'react';
import * as Tone from 'tone';

window.addEventListener("load", function(){
  colorChange();
  changeRhythm();
}, false)
document.getElementById('play').addEventListener('click', function() {
  play();
}, false);
document.getElementById('stop').addEventListener('click', function() {
  refresh();
  btnAble();
}, false);
  const tempo_category = document.getElementById('tempo_category');
  const rhythmCategory = [rhythm0,rhythm1,rhythm2,rhythm3,rhythm4,rhythm5,rhythm6,rhythm7,rhythm8,rhythm9,rhythm10,rhythm11,rhythm12,rhythm13,rhythm14,rhythm15,rhythm16,rhythm17,rhythm18,rhythm19,rhythm20,rhythm21,rhythm22,rhythm23,rhythm24,rhythm25,rhythm26,rhythm27,rhythm28,rhythm29,rhythm30,rhythm31,rhythm32,rhythm33,rhythm34,rhythm35,rhythm36,rhythm37,rhythm38,rhythm39,rhythm40,rhythm41,rhythm42,rhythm43];
  const selectRhythmCategory = [rhythm_0,rhythm_1,rhythm_2,rhythm_3];
  const play_mode = document.getElementById('play_mode');
  tempo_category.onchange = refresh;
  rhythm_0.onchange = changeRhythm;
  rhythm_1.onchange = changeRhythm;
  rhythm_2.onchange = changeRhythm;
  rhythm_3.onchange = changeRhythm;
  play_mode.onchange = refresh;
  play_mode.onchange = changeDisplay;

function refresh(){
Tone.Transport.stop();
Tone.Transport.cancel();
}

const rhythmLists = [
[{time: '0:0', duration: '2n'},{time: '0:2', duration: '2n'},{time: '1:0', duration: '1m'}],
[{time: '0:1', duration: '4n'},{time: '0:3', duration: '4n'},{time: '1:1', duration: '4n'},{time: '1:3', duration: '4n'}],
[{time: '0:0', duration: '4n'},{time: '0:1', duration: '8n'},{time: '0:1.5', duration: '8n'},{time: '0:2', duration: '4n'},{time: '1:0', duration: '4n'},{time: '1:1', duration: '8n'},{time: '1:1.5', duration: '8n'},{time: '1:2', duration: '4n'}],
[{time: '0:0', duration: '8n'},{time: '0:0.5', duration: '8n'},{time: '0:1', duration: '8n'},{time: '0:1.5', duration: '8n'},{time: '0:2', duration: '8n'},{time: '0:2.5', duration: '8n'},{time: '0:3', duration: '8n'},{time: '0:3.5', duration: '8n'},{time: '1:0', duration: '8n'},{time: '1:0.5', duration: '8n'},{time: '1:1', duration: '8n'},{time: '1:1.5', duration: '8n'},{time: '1:2', duration: '8n'},{time: '1:2.5', duration: '8n'},{time: '1:3', duration: '8n'},{time: '1:3.5', duration: '8n'}],
[{time: '0:0', duration: '3n'},{time: '0:1.5', duration: '8n'},{time: '0:2', duration: '4n'},{time: '1:0', duration: '3n'},{time: '1:1.5', duration: '8n'},{time: '1:2', duration: '4n'}],
[{time: '0:0', duration: '3n'},{time: '0:1.5', duration: '3n'},{time: '0:3', duration: '4n'},{time: '1:1', duration: '4n'},{time: '1:2', duration: '4n'}],
[{time: '0:0', duration: '4n'}],
[{note:'A4', time: '0:0', duration: '4n'},{note:'A4', time: '0:1', duration: '4n'},{note:'A4', time: '0:2', duration: '4n'},{note:'A5', time: '0:3', duration: '4n'}]
];

document.getElementById('rhythm-0').addEventListener('click', function() {
changeTempo();
const synth = new Tone.Synth().toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time);}
const melody = new Tone.Part(setPlay, rhythmLists[0]).start();
Tone.Transport.start();
}, false);

document.getElementById('rhythm-1').addEventListener('click', function() {
changeTempo();
const synth = new Tone.Synth().toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time);}
const melody = new Tone.Part(setPlay, rhythmLists[1]).start();
Tone.Transport.start();
}, false);

document.getElementById('rhythm-2').addEventListener('click', function() {
changeTempo();
const synth = new Tone.Synth().toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time);}
const melody = new Tone.Part(setPlay, rhythmLists[2]).start();
Tone.Transport.start();
}, false);

document.getElementById('rhythm-3').addEventListener('click', function() {
changeTempo();
const synth = new Tone.Synth().toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time);}
const melody = new Tone.Part(setPlay, rhythmLists[3]).start();
Tone.Transport.start();
}, false);

document.getElementById('rhythm-4').addEventListener('click', function() {
changeTempo();
const synth = new Tone.Synth().toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time);}
const melody = new Tone.Part(setPlay, rhythmLists[4]).start();
Tone.Transport.start();
}, false);

document.getElementById('rhythm-5').addEventListener('click', function() {
changeTempo();
const synth = new Tone.Synth().toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time);}
const melody = new Tone.Part(setPlay, rhythmLists[5]).start();
Tone.Transport.start();
}, false);

function btnDisable(){ 
  document.getElementById('play').disabled = true;
  document.getElementById('play').style.backgroundColor = '#C0C0C0';
  clearInterval(statusDis);
  }
function btnAble(){  
  document.getElementById('play').disabled = false;
  document.getElementById('play').style.backgroundColor = '#ff7e00';
  clearInterval(statusAble);
  refresh();
  }
function changeButtonStatus(){
  statusDis  = setInterval(btnDisable , 0); 
  switch (tempo_category.value){
  case 'tempo75':
  statusAble = setInterval(btnAble , 75000); 
      break;
  case 'tempo95':
  statusAble = setInterval(btnAble , 60000); 
      break;
  case 'tempo115':
  statusAble = setInterval(btnAble , 50000); 
      break;
  default:  
  statusAble = setInterval(btnAble , 60000); 
}  
}
function play(){
changeTempo();
changeRhythm();
changeButtonStatus();
metronome();
Tone.Transport.start();
switch (play_mode.value){
    case '3personMode':
      melody1();
      melody2();
      melody3();
      break;
    case '4personMode':
      melody1();
      melody2();
      melody3();
      melody4();
      break;
    case '1personMode1':
      melody1();
      break;
    case '1personMode2':
      melody2();
      break;
    case '1personMode3':
      melody3();
      break;
    case '1personMode4':
      melody4();
      break;
    default:
  }  
}

function changeTempo(){
  switch (tempo_category.value){
  case 'tempo75':
  Tone.Transport.bpm.value = 75;
      break;
  case 'tempo95':
  Tone.Transport.bpm.value = 95;
      break;
  case 'tempo115':
  Tone.Transport.bpm.value = 115;
      break;
  default:  
  Tone.Transport.bpm.value = 95;
}  
}

function changeDisplay(){
switch (play_mode.value){
  case '3personMode':
  allDisplayVisible();
  document.getElementById('forth').style.visibility = 'hidden';
      break;
  case '4personMode':
  allDisplayVisible();
      break;
  case '1personMode1':
  allDisplayHidden();
  document.getElementById('first').style.visibility = 'visible';
      break;
  case '1personMode2':
  allDisplayHidden();
  document.getElementById('second').style.visibility = 'visible';
      break;
  case '1personMode3':
  allDisplayHidden();
  document.getElementById('third').style.visibility = 'visible';
      break;
  case '1personMode4':
  allDisplayHidden();
  document.getElementById('forth').style.visibility = 'visible';
      break;
  default:
}  
}

function allDisplayVisible(){
document.getElementById('first').style.visibility = 'visible';
document.getElementById('second').style.visibility = 'visible';
document.getElementById('third').style.visibility = 'visible';
document.getElementById('forth').style.visibility = 'visible';
}

function allDisplayHidden(){
document.getElementById('first').style.visibility = 'hidden';
document.getElementById('second').style.visibility = 'hidden';
document.getElementById('third').style.visibility = 'hidden';
document.getElementById('forth').style.visibility = 'hidden';
}

allDisplayVisible();
document.getElementById('forth').style.visibility = 'hidden';
const melodyList = [];

for(i = 0; i < rhythmCategory.length; i++){
rhythmCategory[i] = document.getElementById(`rhythm${i}`);
}

for(i = 0; i < rhythmCategory.length; i++){
rhythmCategory[i].onchange = colorChange;
}

for(i = 0; i < selectRhythmCategory.length; i++){
selectRhythmCategory[i] = document.getElementById(`rhythm_${i}`);
}

function changeRhythm(){
for(i = 0; i < selectRhythmCategory.length; i++){
  switch (selectRhythmCategory[i].value){
      case 'rhythm0':
        melodyList[i] = rhythmLists[0];
        document.querySelector(`#rhythmImg${i}`).src = 'img/rhythm1.png';
      break;
      case 'rhythm1':
        melodyList[i] = rhythmLists[1];
        document.querySelector(`#rhythmImg${i}`).src = 'img/rhythm2.png';
      break;
      case 'rhythm2':
        melodyList[i] = rhythmLists[2];
        document.querySelector(`#rhythmImg${i}`).src = 'img/rhythm3.png';
      break;
      case 'rhythm3':
        melodyList[i] = rhythmLists[3];
        document.querySelector(`#rhythmImg${i}`).src = 'img/rhythm4.png';
      break;
      case 'rhythm4':
        melodyList[i] = rhythmLists[4];
        document.querySelector(`#rhythmImg${i}`).src = 'img/rhythm5.png';
      break;
      case 'rhythm5':
        melodyList[i] = rhythmLists[5];
        document.querySelector(`#rhythmImg${i}`).src = 'img/rhythm6.png';
      break;
      default:  
  }  
}
}

function colorChange(){
for(i = 0; i < rhythmCategory.length/4; i++){
rhythmCategory[i].value == 'on' ? rhythmCategory[i].style.backgroundColor = 'lightcoral':rhythmCategory[i].style.backgroundColor = 'white';
}
for(i = 11; i < rhythmCategory.length/4*2; i++){
rhythmCategory[i].value == 'on' ? rhythmCategory[i].style.backgroundColor = 'lightskyblue':rhythmCategory[i].style.backgroundColor = 'white';
}
for(i = 22; i < rhythmCategory.length/4*3; i++){
rhythmCategory[i].value == 'on' ? rhythmCategory[i].style.backgroundColor = '#ffbb00':rhythmCategory[i].style.backgroundColor = 'white';
}
for(i = 33; i < rhythmCategory.length/4*4; i++){
rhythmCategory[i].value == 'on' ? rhythmCategory[i].style.backgroundColor = 'lightgreen':rhythmCategory[i].style.backgroundColor = 'white';
}
}

const woodblock = 'https://tatsuki-github.github.io/rhythmApp/audio/woodblock.mp3';
function melody1(){
const synth = new Tone.Sampler({E4:woodblock}).toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time, 3);}
const melodies = new Array(11); 
for(i = 0; i < melodies.length; i++){
  rhythmCategory[i].value == 'on' ? melodies[i] = new Tone.Part(setPlay, melodyList[0]).start(`${2*i+1}m`):false
}
const lastRhythm = new Tone.Part(setPlay, rhythmLists[6]).start('23m');
}

const drum = 'https://tatsuki-github.github.io/rhythmApp/audio/drum.mp3';
function melody2(){
const synth = new Tone.Sampler({E4:drum}).toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('G4', note.duration, time, 1);}
const melodies = new Array(11); 
for(i = 0; i < melodies.length; i++){
  rhythmCategory[i+11].value == 'on' ? melodies[i] = new Tone.Part(setPlay, melodyList[1]).start(`${2*i+1}m`):false
}
const lastRhythm = new Tone.Part(setPlay, rhythmLists[6]).start('23m');
}

const clave = 'https://tatsuki-github.github.io/rhythmApp/audio/clave.wav';
function melody3(){
const synth = new Tone.Sampler({E4:clave}).toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time, 2.5);}
const melodies = new Array(11); 
for(i = 0; i < melodies.length; i++){
  rhythmCategory[i+22].value == 'on' ? melodies[i] = new Tone.Part(setPlay, melodyList[2]).start(`${2*i+1}m`):false
}
const lastRhythm = new Tone.Part(setPlay, rhythmLists[6]).start('23m');
}

const tambourine  = 'https://tatsuki-github.github.io/rhythmApp/audio/tambourine.mp3';
function melody4(){
const synth = new Tone.Sampler({E4:tambourine}).toDestination();
function setPlay(time, note) {synth.triggerAttackRelease('E4', note.duration, time, 2.5);}
const melodies = new Array(11); 
for(i = 0; i < melodies.length; i++){
  rhythmCategory[i+33].value == 'on' ? melodies[i] = new Tone.Part(setPlay, melodyList[3]).start(`${2*i+1}m`):false
}
const lastRhythm = new Tone.Part(setPlay, rhythmLists[6]).start('23m');
}



const bpm75 = new Tone.Player('https://tatsuki-github.github.io/rhythmApp/audio/75bpm.mp3').toDestination();
const bpm95 = new Tone.Player('https://tatsuki-github.github.io/rhythmApp/audio/95bpm.mp3').toDestination();
const bpm115 = new Tone.Player('https://tatsuki-github.github.io/rhythmApp/audio/115bpm.mp3').toDestination();
function metronome(){
    switch (tempo_category.value){
      case 'tempo75':
        bpm75.autostart = true;
        bpm75.start();
          break;
      case 'tempo115':
        bpm115.autostart = true;
        bpm115.start();
          break;
      default:  
        bpm95.autostart = true;
        bpm95.start();
    }  
}



class App extends React.Component {
render(){
        let viewText = "テストページ";
        return (
            <div>
                <h1>Hello! World.</h1>
                <p>このページは{viewText}です。</p>
            </div>
        )
    }
}

export default App;