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

function loadJSON() {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'parts.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            
            var x = JSON.parse(xobj.responseText);
            JSONdata = x;
            randomize();
        }
    };
    xobj.send();
}

function flip() {
    if (main.classList.contains('mirrored')) {
        main.classList.remove('mirrored');
    } else {
        main.classList.add('mirrored');
    }
}

loadJSON();

button.addEventListener('click', randomize);

switcher.addEventListener('click', flip);