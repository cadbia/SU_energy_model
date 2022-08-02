function updateSizes(table1, table2){
    if(window.innerWidth >= window.innerHeight*2){
        table1.style.fontSize = "2vmin";
        table2.style.fontSize = "2vmin"
    }
    else if(window.innerWidth <= window.innerHeight){
        table1.style.fontSize = "0.8vmin";
        table2.style.fontSize = "0.8vmin";
    }
    else{
        table1.style.fontSize = "1.2vmax";
        table2.style.fontSize = "1.2vmax";
    }
}
let isAfter = false;
function before(){
    var slides = document.getElementsByClassName("rectangle");
    if(isAfter === true){
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
    if(isAfter === false){
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

// addEventListener('load', () => {
//     const table1 = document.getElementById("table1");
//     const table2 = document.getElementById("table2");
//     updateSizes(table1,table2)
//     setInterval(updateSizes(table1,table2), 500);
// });
// addEventListener('load', () => {
// var pt = document.getElementById("svgDoc").createSVGPoint();

// function alert_coords(evt) {
//     pt.x = evt.clientX;
//     pt.y = evt.clientY;

//     // The cursor point, translated into svg coordinates
//     var cursorpt =  pt.matrixTransform(document.getElementById("svgDoc").getScreenCTM().inverse());
//     console.log("(" + cursorpt.x.toFixed(1) + ", " + cursorpt.y.toFixed(1) + ")");
// }

// document.getElementById("svgDoc").addEventListener("mousedown", alert_coords, false);

// });



