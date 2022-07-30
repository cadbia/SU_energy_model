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
    const circle1 = document.getElementById("circle1");
        if(isAfter === true){
            isAfter = false;
            circle1.setAttribute("fill", "#F9975D");
        }
}
function after(){
    const circle1 = document.getElementById("circle1");
    if(isAfter === false){
        isAfter = true;
        circle1.setAttribute("fill", "#B2EA70");
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


