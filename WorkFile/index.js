
var pNode = document.getElementById("navbar")
pNode.style.display= "none";

var cNode = document.createElement("div");

cNode.innerHTML = "hello"

var tNode = document.getElementsByClassName("nav-wrapper");
tNode[0].appendChild(cNode)
console.log(tNode)
