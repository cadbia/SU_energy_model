function updateSizes(table1, table2, befBut, aftBut){
    if(window.innerWidth >= window.innerHeight*2){
        table1.style.fontSize = "2vmin";
        table2.style.fontSize = "2vmin";
        befBut.style.fontSize = "3vmin";
        aftBut.style.fontSize = "3vmin";
        befBut.style.height = "10vmin";
        aftBut.style.height = "10vmin";
    }
    else if(window.innerWidth <= window.innerHeight){
        table1.style.fontSize = "0.8vmin";
        table2.style.fontSize = "0.8vmin";
        befBut.style.fontSize = "2vmin";
        aftBut.style.fontSize = "2vmin";
        befBut.style.height = "5vmin";
        aftBut.style.height = "5vmin";
    }
    else{
        table1.style.fontSize = "1.2vmax";
        table2.style.fontSize = "1.2vmax";
        befBut.style.fontSize = "2vmax";
        aftBut.style.fontSize = "2vmax";
        befBut.style.height = "5.5vmax";
        aftBut.style.height = "5.5vmax";
    }
}
let isAfter = false;
function before(){
    var slides = document.getElementsByClassName("circle");
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
    var slides = document.getElementsByClassName("circle");
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

addEventListener('load', () => {
    const table1 = document.getElementById("table1");
    const table2 = document.getElementById("table2");
    const befBut = document.getElementById("bef_but");
    const aftBut = document.getElementById("aft_but");
    updateSizes(table1,table2,befBut,aftBut)
    setInterval(updateSizes(table1,table2,befBut,aftBut), 500);
});



