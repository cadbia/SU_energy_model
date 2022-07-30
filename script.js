function updateTableSize(){
    if(window.innerWidth >= window.innerHeight*2){
        document.getElementById("table1").style.fontSize = "2vmin";
        document.getElementById("table2").style.fontSize = "2vmin";
    }
    if(window.innerWidth <= window.innerHeight){
        document.getElementById("table1").style.fontSize = "0.8vmin";
        document.getElementById("table2").style.fontSize = "0.8vmin";
    }
}
addEventListener('load', (event) => {
    setInterval(updateTableSize, 500)
});


