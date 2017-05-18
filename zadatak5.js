function dodavanje() {
    var stanko = document.getElementById("unos").value;
    lista = stanko.split(" ",10);
    if (isNaN(Math.max.apply( Math, lista ))){
        document.getElementById("rjesenje").innerHTML = "Ne valja";
    }
    else{
        document.getElementById("rjesenje").innerHTML = Math.max.apply( Math, lista );
    }

}

function godine(){
    var ime = document.getElementById("ime").value;
    var godine = document.getElementById("godine").value;
    if (ime.length > 10){
        document.getElementById("imeP").innerHTML = ime;
    }
    else{
        document.getElementById("imeP").innerHTML = "prekratko ime";
    }
    if (godine >= 18 && godine < 99){
        document.getElementById("godineP").innerHTML = godine;
    }
    else{
        document.getElementById("godineP").innerHTML = "Krive godine";
    }
}

function promjenaBoje(){
    var broj = Math.floor((Math.random() * 1000) + 1);
    if (broj < 200){
        document.getElementById("divcina").style.backgroundColor = "Blue";
    }
    else if (broj > 200 && broj < 400){
        document.getElementById("divcina").style.backgroundColor = "Red";
    }
    else if(broj > 600 && broj < 800){
        document.getElementById("divcina").style.backgroundColor = "Green";
    }
    else if(broj > 800 && broj <= 1000){
        document.getElementById("divcina").style.backgroundColor = "Yellow";
    }
}
function myFunction() {
    var txt = "";
    if (document.getElementById("id1").value == "") {
        txt = "Ne valja";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
}