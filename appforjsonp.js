var player = document.getElementById('player');

var button = document.getElementsByTagName('button')[0];

var switcher = document.getElementById('switch');

var main = document.getElementById('main');

var JSONdata;

function randomize() {
      
    var num = Math.floor(Math.random() * 411);
      
    var embedURL = JSONdata.parts[num].url.replace('watch?v=', 'embed/');
    player.src = embedURL;
}

function loadJSON(data) {

    JSONdata = data;
    randomize();
}

function flip() {
    if (main.classList.contains('mirrored')) {
        main.classList.remove('mirrored');
    } else {
        main.classList.add('mirrored');
    }
}

var script = document.createElement('script');
script.src = 'https://codepen.io/tantor/pen/geExWL.js?callback=loadJSON';

document.getElementsByTagName('head')[0].appendChild(script);

button.addEventListener('click', randomize);

switcher.addEventListener('click', flip);