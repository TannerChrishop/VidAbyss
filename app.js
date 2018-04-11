var player = document.getElementById('player');

var button = document.getElementsByTagName('button')[0];

var JSONdata;

function randomize() {
      
    var num = Math.floor(Math.random() * 278);
      
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

loadJSON();

button.addEventListener('click', randomize);