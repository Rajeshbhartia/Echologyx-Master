var recentItems = window.theme.recentlyViewed.recent;

var pNode = document.createElement("div");
var cNode = document.createElement("div");

pNode.style.position= "relative";
pNode.style.overflow= "hidden";
pNode.style["max-width"]= "1000px";
pNode.style.height= "500px";
pNode.style["margin-left"]= "auto";
pNode.style["margin-right"]= "auto";

cNode.style.display ="flex";
cNode.style.position ="absolute";
cNode.style.top ="50px";
cNode.style.left ="0px";
cNode.style.transition ="left 1s ease";


var arrowNode = `<div>
<h3 style="text-align:center; font-size:24px">Recently Viewed</h3>
<i id="move-forward" style="position: absolute;top: 0;right: 70px; font-size:28px; cursor:pointer; z-index:1; background: #fff; padding: 0px; border-radius: 50%; color: #4e4e4e; border: 1px solid #4e4e4e ; display: flex;justify-content: center;align-items: center;height: 32px;width: 32px;" onclick="moveForward()">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"/></svg>
</i>
<i id="move-backward" style="position: absolute;top: 0;right: 24px; font-size:28px; cursor:pointer; z-index:1; background: #4e4e4e; padding: 0px; border-radius: 50%;display: flex;justify-content: center;align-items: center;height: 32px;width: 32px;" onclick="moveBackward()">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#ffffff"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg></i>
</div>`

var innerHtml = "";

function moveForward(){
    if(parseInt(cNode.style.left)){
        cNode.style.left = `${parseInt(cNode.style.left)+250}px`;
    }
}
function moveBackward(){
    let mtr = Object.keys(recentItems).length - 4;
    let cinx = Math.abs(parseInt(cNode.style.left)/250) +1;
    if(mtr>= cinx)
        cNode.style.left =  `${parseInt(cNode.style.left)-250}px`;    
}
if(recentItems){
    Object.entries(recentItems).forEach(([key,value],index) => {
        let imgUrl = value.featuredImage.replace("{width}","300")
        innerHtml = innerHtml + 
        `<div style="padding:20px; width:250px">
                <img src=${imgUrl} alt="product" style="display: block;height:auto;width:100%"/>
                <div style="text-align: center;">${key.replaceAll("-"," ")}</div> 
        </div>`
    });
}

cNode.innerHTML = innerHtml;
var list = document.getElementById("shopify-section-global-newsletter");

pNode.innerHTML = arrowNode;
pNode.appendChild(cNode);

list.insertBefore(pNode, list.childNodes[0]);