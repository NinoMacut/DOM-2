/**
 * Created by Ucenik on 4.5.2017..
 */

function showHideDiv(){
    var div = document.getElementById("div");
    if (div.style.display === "none"){
        div.style.display = "block";
    }
    else {
        div.style.display = "none";
    }
}

function addElement(){
    var tekst1 = document.getElementById("tekst").value;
    var para = document.createElement("p");
    var node = document.createTextNode(tekst1);
    para.appendChild(node);
    var element = document.getElementById("tekstdiv");
    element.appendChild(para);
}

function changeColour(){
    document.getElementById("tekstdiv").style.backgroundColor = document.getElementById("boja").value;
}

function checkDimension(){
    document.getElementById("sirina").innerHTML = "Sirina je: " + window.innerWidth;
    document.getElementById("visina").innerHTML = "Visina je: " + window.innerHeight;
}

function openEdmodo(){
    window.open("https://www.edmodo.com/","_blank","width = 400, height = 400")
}

document.getElementById("showhide").addEventListener("click", showHideDiv);
document.getElementById("addelement").addEventListener("click", addElement);
document.getElementById("changecolour").addEventListener("click", changeColour);
document.getElementById("checkdimension").addEventListener("click", checkDimension);
document.getElementById("openedmodo").addEventListener("click", openEdmodo);
