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
    var aftBut = document.getElementById("aft_but");
    var befBut = document.getElementById("bef_but")
    aftBut.style.color = "black";
    var slides = document.getElementsByClassName("rectangle");
    if(isAfter === true && mode === "EUI"){
        befBut.style.color = "#B2EA70";
        isAfter = false;
        for (var i = 0; i < slides.length-16; i++) {
            slides.item(i).setAttribute("fill", "url('#myGradientBefPoor')");
            }
        for (var i = 10; i < slides.length; i++) {       
                slides.item(i).setAttribute("fill", "url('#myGradientBefMild')");
        }
    }
    if(isAfter === true && mode === "comfort"){
        befBut.style.color = "#f4e9dd";
        isAfter = false;
        for (var i = 0; i < slides.length; i++) {
                slides.item(i).setAttribute("fill", "url('#comfortBefPoor')");
        }
    }
}
function after(){
    var aftBut = document.getElementById("aft_but");
    var befBut = document.getElementById("bef_but");
    befBut.style.color = "black";
    var slides = document.getElementsByClassName("rectangle");
    if(isAfter === false && mode === "EUI"){
        aftBut.style.color = "#C85C5C";
        isAfter = true;
        for (var i = 0; i < slides.length-16; i++) {
            slides.item(i).setAttribute("fill", "url('#myGradientAftGood')");
            }
        for (var i = 10; i < slides.length; i++) {       
                slides.item(i).setAttribute("fill", "url('#myGradientAftExcellent')");
        }
    }
    if(isAfter === false && mode === "comfort"){
        aftBut.style.color = "#C85C5C";
        isAfter = true;
        for (var i = 0; i < slides.length; i++) {
                slides.item(i).setAttribute("fill", "url('#comfortAftExcellent')");
        }
    }
    
}
function comfort(){
    var euiBut = document.getElementById("EUI_but");
    var comfortBut = document.getElementById("comfort_but");
    comfortBut.style.color = "white";
    euiBut.style.color = "black";
    var slides = document.getElementsByClassName("rectangle");
    var aftBut = document.getElementById("aft_but");
    var befBut = document.getElementById("bef_but");
    var euiBar = document.getElementById("EUI_bar");
    var comfortBar = document.getElementById("comfort_bar");
    if (mode != "comfort"){
        mode = "comfort";
        euiBar.style.display = "none";
        comfortBar.style.display = "block";
        befBut.style.backgroundColor = "#ee817f";
        aftBut.style.backgroundColor = "#f4e9dd";
    }
    if(isAfter === false){
        befBut.style.color = "#f4e9dd";
        for (var i = 0; i < slides.length; i++) {
            slides.item(i).setAttribute("fill", "url('#comfortBefPoor')");
        }
    }
    else{
        aftBut.style.color = "#C85C5C";
        for (var i = 0; i < slides.length; i++) {
            slides.item(i).setAttribute("fill", "url('#comfortAftExcellent')");
        }
    }
    
}
function eui(){
    var euiBut = document.getElementById("EUI_but");
    var comfortBut = document.getElementById("comfort_but");
    comfortBut.style.color = "black";
    euiBut.style.color = "white";
    var slides = document.getElementsByClassName("rectangle");
    var aftBut = document.getElementById("aft_but");
    var befBut = document.getElementById("bef_but");
    var euiBar = document.getElementById("EUI_bar");
    var comfortBar = document.getElementById("comfort_bar");
    if (mode != "EUI"){
        console.log("eui");
        mode = "EUI";
        euiBar.style.display = "block";
        comfortBar.style.display = "hidden";
        befBut.style.backgroundColor = "#C85C5C";
        aftBut.style.backgroundColor = "#B2EA70";
    }
    if(isAfter === false){
    befBut.style.color = "#B2EA70";
       for (var i = 0; i < slides.length-16; i++) {
            slides.item(i).setAttribute("fill", "url('#myGradientBefPoor')");
            }
        for (var i = 10; i < slides.length; i++) {       
                slides.item(i).setAttribute("fill", "url('#myGradientBefMild')");
        } 
    }
    else{
        aftBut.style.color = "#C85C5C";
        for (var i = 0; i < slides.length-16; i++) {
            slides.item(i).setAttribute("fill", "url('#myGradientAftGood')");
            }
        for (var i = 10; i < slides.length; i++) {       
                slides.item(i).setAttribute("fill", "url('#myGradientAftExcellent')");
        }
    }
}

addEventListener('load', () => {
    const hiddenEl = document.getElementById('popup');
    const table = document.getElementById('table');
    const poly25 = document.getElementById('polygon25');
    const poly26 = document.getElementById('polygon26');
    poly25.addEventListener('mouseover', function handleMouseOver() {
        hiddenEl.style.display = 'flex';
        table.style.display = 'visible';
    });
    poly26.addEventListener('mouseover', function handleMouseOver() {
        hiddenEl.style.display = 'flex';
    });
    poly25.addEventListener('mouseout', function handleMouseOut() {
        hiddenEl.style.display = 'none';
    });
    poly26.addEventListener('mouseout', function handleMouseOut() {
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

