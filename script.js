function updateSizes(){
    if(window.innerWidth >= window.innerHeight*2){
        document.getElementById("table1").style.fontSize = "2vmin";
        document.getElementById("table2").style.fontSize = "2vmin";
        document.getElementById("bef_but").style.fontSize = "3vmin";
        document.getElementById("aft_but").style.fontSize = "3vmin";
        document.getElementById("bef_but").style.height = "10vmin";
        document.getElementById("aft_but").style.height = "10vmin";
    }
    else if(window.innerWidth <= window.innerHeight){
        document.getElementById("table1").style.fontSize = "0.8vmin";
        document.getElementById("table2").style.fontSize = "0.8vmin";
        document.getElementById("bef_but").style.fontSize = "2vmin";
        document.getElementById("aft_but").style.fontSize = "2vmin";
        document.getElementById("bef_but").style.height = "5vmin";
        document.getElementById("aft_but").style.height = "5vmin";
    }
    else{
        document.getElementById("table1").style.fontSize = "1.2vmax";
        document.getElementById("table2").style.fontSize = "1.2vmax";
        document.getElementById("bef_but").style.fontSize = "2vmax";
        document.getElementById("aft_but").style.fontSize = "2vmax";
        document.getElementById("bef_but").style.height = "5.5vmax";
        document.getElementById("aft_but").style.height = "5.5vmax";
    }
}
addEventListener('load', (event) => {
    updateSizes();
    setInterval(updateSizes, 500)
});


