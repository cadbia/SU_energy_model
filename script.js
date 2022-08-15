// function updateSizes(table1, table2){
//     if(window.innerWidth >= window.innerHeight*2){
//         table1.style.fontSize = "1.7vmin";
//         table2.style.fontSize = "1.7vmin"
//     }
//     else if(window.innerWidth <= window.innerHeight){
//         table1.style.fontSize = "0.8vmin";
//         table2.style.fontSize = "0.8vmin";
//     }
//     else{
//         table1.style.fontSize = "1.1vmax";
//         table2.style.fontSize = "1.1vmax";
//     }
// }
let mode = "EUI";
let isAfter = false;
function before(){
    var slides = document.getElementsByClassName("rectangle");
    if(isAfter === true && mode === "EUI"){
        isAfter = false;
        for (var i = 0; i < slides.length; i++) {
            if(slides.item(i).getAttribute("fill") == "url('#myGradientAftExcellent')"){
                slides.item(i).setAttribute("fill", "url('#myGradientBefMild')");
            }
            else{
                slides.item(i).setAttribute("fill", "url('#myGradientBefPoor')");
            }
        }
    }
}
function after(){
    var slides = document.getElementsByClassName("rectangle");
    if(isAfter === false && mode === "EUI"){
        isAfter = true;
        for (var i = 0; i < slides.length; i++) {
            if(slides.item(i).getAttribute("fill") == "url('#myGradientBefMild')"){
                slides.item(i).setAttribute("fill", "url('#myGradientAftExcellent')");
            }
            else{
                slides.item(i).setAttribute("fill", "url('#myGradientAftGood')");
            }
        }
    }
}
function comfort(){
    var slides = document.getElementsByClassName("rectangle");
    var euiBar = document.getElementById("EUI_bar");
    var comfortBar = document.getElementById("comfort_bar");
    if (mode != "comfort"){
        mode = "comfort";
        euiBar.style.display = "none";
        comfortBar.style.display = "block";
        for (var i = 0; i < slides.length; i++) {
            slides.item(i).style.display = "none";   
        }
    }
}
function eui(){
    var slides = document.getElementsByClassName("rectangle");
    var euiBar = document.getElementById("EUI_bar");
    var comfortBar = document.getElementById("comfort_bar");
    if (mode != "EUI"){
        console.log("eui");
        mode = "EUI";
        euiBar.style.display = "block";
        comfortBar.style.display = "hidden";
        for (var i = 0; i < slides.length; i++) {
            slides.item(i).style.display = "block";   
        }
    }
}

addEventListener('load', () => {
    const hiddenEl = document.getElementById('popup');
    const table = document.getElementById('table');
    const poly26 = document.getElementById('polygon26');
    const poly27 = document.getElementById('polygon27');
    poly26.addEventListener('mouseover', function handleMouseOver() {
        hiddenEl.style.display = 'flex';
        table.style.display = 'visible';
    });
    poly27.addEventListener('mouseover', function handleMouseOver() {
        hiddenEl.style.display = 'flex';
    });
    poly26.addEventListener('mouseout', function handleMouseOut() {
        hiddenEl.style.display = 'none';
    });
    poly27.addEventListener('mouseout', function handleMouseOut() {
        hiddenEl.style.display = 'none';
    });
});

addEventListener('load', () => {
var pt = document.getElementById("svgDoc").createSVGPoint();

function alert_coords(evt) {
    pt.x = evt.clientX;
    pt.y = evt.clientY;

    // The cursor point, translated into svg coordinates
    var cursorpt =  pt.matrixTransform(document.getElementById("svgDoc").getScreenCTM().inverse());
    console.log("(" + cursorpt.x.toFixed(1) + ", " + cursorpt.y.toFixed(1) + ")");
}

document.getElementById("svgDoc").addEventListener("mousedown", alert_coords, false);

});

