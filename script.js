//Function executed when all elements are loaded on page
addEventListener('load', () => {
    //Ensureses DOM is loaded
    //Then accesses DOM elements and stores as global variables for use in all functions
    hiddenEl = document.getElementById('popup');
    buildings = document.getElementsByClassName('rectangle');
    iaqBut = document.getElementById("IAQ_but");
    euiBut = document.getElementById("EUI_but");
    comfortBut = document.getElementById("comfort_but");
    aftBut = document.getElementById("aft_but");
    befBut = document.getElementById("bef_but");
    euiBar = document.getElementById("EUI_bar");
    comfortBar = document.getElementById("comfort_bar");
    iaqBar = document.getElementById("IAQ_bar");
    //Adds a "mouseover" event listener to each building to display data table (hiddenEl). 
    for (const building of buildings) {
        building.addEventListener('mouseover', function handleMouseOver(){
            hiddenEl.style.display = 'flex';
        });
        building.addEventListener('mouseout', function handleMouseOut(){
            hiddenEl.style.display = 'none';
        });
    }
    
//** Uncomment this code if **

    //you wish to only diplay table on hover of buildings where data was collected

    // const poly25 = document.getElementById('polygon25');
    // const poly26 = document.getElementById('polygon26');

    // poly25.addEventListener('mouseover', function handleMouseOver() {
    //     hiddenEl.style.display = 'flex';
    // });
    // poly26.addEventListener('mouseover', function handleMouseOver() {
    //     hiddenEl.style.display = 'flex';
    // });
    // poly25.addEventListener('mouseout', function handleMouseOut() {
    //     hiddenEl.style.display = 'none';
    // });
    // poly26.addEventListener('mouseout', function handleMouseOut() {
    //     hiddenEl.style.display = 'none';
    // });

//** Uncomment this code if **

    //You want to get the coodinates of your mouse click anywhere on the svg canvas
    //These coordinates will be logged in the console of the webpage
    //These points can then be used to redefine/add building olines for the svg polygons in index.html

    // var pt = document.getElementById("svgDoc").createSVGPoint();

    // function alert_coords(evt) {
    //     pt.x = evt.clientX;
    //     pt.y = evt.clientY;

    //     // The cursor point, translated into svg coordinates
    //     var cursorpt =  pt.matrixTransform(document.getElementById("svgDoc").getScreenCTM().inverse());
    //     console.log("(" + cursorpt.x.toFixed(1) + ", " + cursorpt.y.toFixed(1) + ")");
    // }

    // document.getElementById("svgDoc").addEventListener("mousedown", alert_coords, false);

});

//Global variable declartions
let mode = "EUI";
let isAfter = false;

//Funtion that runs onclick of before button
function before(){
    //Ensures that current state is after prior to executing rest
    if(isAfter === true){
        // changes after button text to black to signify unclicked
        aftBut.style.color = "black";
        //Bef button text color is set to backgorund color of after to show clicked
        befBut.style.color = aftBut.style.backgroundColor;
        //Now that bef has been clicked, isAfter must be set to false
        isAfter = false;
        //If mode is currently EUI, "before" EUI fills for buildings are displayed
        if(mode === "EUI"){
            for (var i = 0; i < buildings.length-16; i++) {
                buildings.item(i).setAttribute("fill", "url('#myGradientBefPoor')");
                }
            for (var i = 10; i < buildings.length; i++) {       
                buildings.item(i).setAttribute("fill", "url('#myGradientBefMild')");
            }
        }
        //If mode is currently comfort, "before" comfort fills for buildings are displayed
        if(mode === "comfort"){
            for (var i = 0; i < buildings.length; i++) {
                buildings.item(i).setAttribute("fill", "url('#comfortBefPoor')");
            }
        }
        //If mode is currently IAQ, "before" IAQ fills for buildings are displayed
        if(mode === "IAQ"){
            for (var i = 0; i < buildings.length-16; i++) {
                buildings.item(i).setAttribute("fill", "url('#iaqBefMild')");
                }
            for (var i = 10; i < buildings.length; i++) {       
                buildings.item(i).setAttribute("fill", "url('#iaqBefPoor')");
            }
        }
    } 
}

//Funtion that runs onclick of before button
function after(){
    //Ensures that current state is before prior to executing rest
    if(isAfter === false){
        // changes before button text to black to signify unclicked
        befBut.style.color = "black";
        //Aft button text color is set to backgorund color of bef to show clicked
        aftBut.style.color = befBut.style.backgroundColor;
        //Now that aft has been clicked, isAfter must be set to true
        isAfter = true;
        //If mode is currently EUI, "after" EUI fills for buildings are displayed
        if(mode === "EUI"){
            aftBut.style.color = "#C85C5C";
            for (var i = 0; i < buildings.length-16; i++) {
                buildings.item(i).setAttribute("fill", "url('#myGradientAftGood')");
                }
            for (var i = 10; i < buildings.length; i++) {       
                    buildings.item(i).setAttribute("fill", "url('#myGradientAftExcellent')");
            }
        }
        //If mode is currently comfort, "after" comfort fills for buildings are displayed
        if(mode === "comfort"){
            for (var i = 0; i < buildings.length; i++) {
                    buildings.item(i).setAttribute("fill", "url('#comfortAftExcellent')");
            }
        }
        //If mode is currently IAQ, "after" IAQ fills for buildings are displayed
        if(mode === "IAQ"){
            for (var i = 0; i < buildings.length-16; i++) {
                buildings.item(i).setAttribute("fill", "url('#iaqAftExcellent')");
                }
            for (var i = 10; i < buildings.length; i++) {       
                    buildings.item(i).setAttribute("fill", "url('#iaqAftGood')");
            }
        }
    }      
}

//Function executed onClick of euiBut
function eui(){
    //Changes "mode" button colors to show that EUI has been clicked
    iaqBut.style.color = "black";
    comfortBut.style.color = "black";
    euiBut.style.color = "white";
    //Ensures that current state is not equal to "EUI" prior to executing rest
    if (mode != "EUI"){
        //Sets mode to comfort now that it has been clicked
        mode = "EUI";
        //Changes visibility of vis keys to ensure euiBar is displayed
        iaqBar.style.display = "none";
        euiBar.style.display = "block";
        comfortBar.style.display = "none";
        //Sets background colors of before and after buttons to match "EUI" mode
        befBut.style.backgroundColor = "#C85C5C";
        aftBut.style.backgroundColor = "#B2EA70";
    }
    //If it isAfter is false. Then onclick of euiBut must dispaly before function.
    //However to ensure before function executes, isAfter must be set to true. 
    if(isAfter === false){
        isAfter = true; 
        before();
    }
    //If it isAfter is true. Then onclick of euiBut must display after function.
    //However to ensure after function executes, isAfter must be set to false.
    else{
        isAfter = false; 
        after();
    }
}

//Function executed onClick of iaqBut
function iaq(){
    //Changes "mode" button colors to show that IAQ has been clicked
    iaqBut.style.color = "white";
    comfortBut.style.color = "black";
    euiBut.style.color = "white";
    //Ensures that current state is not equal to "EUI" prior to executing rest
    if (mode != "IAQ"){
        //Sets mode to comfort now that it has been clicked
        mode = "IAQ";
        //Changes visibility of vis keys to ensure iaqBar is displayed
        iaqBar.style.display = "block";
        euiBar.style.display = "none";
        comfortBar.style.display = "none";
        //Sets background colors of before and after buttons to match "EUI" mode
        befBut.style.backgroundColor = "#ccc0bb";
        aftBut.style.backgroundColor = "#c2eaf6";
    }
    //If it isAfter is false. Then onclick of iaqBut must display before function.
    //However to ensure before function executes, isAfter must be set to true. 
    if(isAfter === false){
        isAfter = true; 
        before();
    }
    //If it isAfter is true. Then onclick of iaqBut must dispaly after function.
    //However to ensure after function executes, isAfter must be set to false.
    else{
        isAfter = false; 
        after();
    }  
}

//Function executed onClick of comfortBut
function comfort(){ 
    //Changes "mode" button colors to show that comfort has been clicked
    iaqBut.style.color = "black";
    comfortBut.style.color = "white";
    euiBut.style.color = "black";
    //Ensures that current state is not equal to "comfort" prior to executing rest
    if (mode != "comfort"){
        //Sets mode to comfort now that it has been clicked
        mode = "comfort";
        //Changes visibility of vis keys to ensure comfortBar is displayed
        iaqBar.style.display = "none";
        euiBar.style.display = "none";
        comfortBar.style.display = "block";
        //Sets background colors of before and after buttons to match "comfort" mode
        befBut.style.backgroundColor = "#ee817f";
        aftBut.style.backgroundColor = "#f4e9dd";
    }
    //If it isAfter is false. Then onclick of comfortBut must dispaly before function.
    //However to ensure before function executes, isAfter must be set to true. 
    if(isAfter === false){
        isAfter = true; 
        before();
    }
    //If it isAfter is true. Then onclick of comfortBut must display after function.
    //However to ensure after function executes, isAfter must be set to false.
    else{
        isAfter = false; 
        after();
    }
    
}