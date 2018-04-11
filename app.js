var player = document.getElementById('player');

var button = document.getElementsByTagName('button')[0];

    
function loadJSON(num) {   

    var xobj = new XMLHttpRequest(num);
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'parts.json', true); 
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            
            var x = JSON.parse(xobj.responseText);
            var embedURL = x.parts[num].url.replace('watch?v=', 'embed/');
            player.src = embedURL;
          }
    };
    xobj.send();  
 }

function loadRandomVid(){
    
    var num = Math.floor(Math.random()*278)
     loadJSON(num)
}

button.addEventListener('click', loadRandomVid)

loadRandomVid()




