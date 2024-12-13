'use strict';

function gridGenerator() {
    document.body.innerHTML="";
    var body = "<p><h1>Bataille Navale JS</h1></p><p>Arnaud DA SILVA & Mariam MAIGA</p><div style='margin:auto;width: 400px' ><table border='1' style='text-align: center'><tr><td></td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td></tr>";
    for(var i=1;i<=10;i++)
    {
        var Lettre=["A","B","C","D","E","F","G","H","I","J"];
        body+='<tr>';
        body+='<td>'+i+'</td>';
        for(var k=1;k<=10;k++)
        {
            var id = Lettre[i-1]+k;
            var td = "<td id='"+id+"'>.</td>";
            body+=(td);

        }
        body+="</tr>";

    }
    body+="</div></table><p><strong>Cliquez sur Annuler à tout moment pour quitter le jeu</strong><button onclick=\'Jouer()\'>Rejouer une Partie</button></p>";
    document.body.innerHTML = body;
}

function editGrid(joueurVictime) {
    for (var i=0; i<casesTireEffectuer.length; i++){
        var coord = casesTireEffectuer[i];
        var rate = document.getElementById(coord);
        rate.innerHTML="O";
    }
    for (var bat=0; bat<joueurVictime.bateau.length; bat++){
        var navire = joueurVictime.bateau[bat];
        for (var touch = 0; touch<navire.casesDetruites.length; touch++){
            var toucher = document.getElementById(navire.casesDetruites[touch]);
            toucher.innerHTML="X";
        }
    }
}