var player = document.getElementById('player');

var button = document.getElementsByTagName('button')[0];

var JSON;

function loadJSON(data) {   

  JSON = data;
  randomize();
}
   
function randomize () {
      
    var num = Math.floor(Math.random()*278)
      
    var embedURL = JSON.parts[num].url.replace('watch?v=', 'embed/');
    player.src = embedURL;
      
}             

button.addEventListener('click', randomize)

var script = document.createElement('script');
script.src = 'https://codepen.io/tantor/pen/geExWL.js?callback=loadJSON'

document.getElementsByTagName('head')[0].appendChild(script);
