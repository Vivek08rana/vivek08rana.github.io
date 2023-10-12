open = false;

function openNav() {
    if (open == true){
        closeNav();
        open = false;
    }
    else{
        document.getElementsByClassName("left")[0].style.width = "250px";
        document.getElementsByClassName("right")[0].style.marginLeft = "250px";
        open = true;
    }
}

function closeNav() {
    document.getElementsByClassName("left")[0].style.width = "0";
    document.getElementsByClassName("right")[0].style.marginLeft= "0";
}

//Clock
window.onload = function() {
    function showTime(){
        //Set Date
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'  
        }
        //Set Time
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("MyDateDisplay").innerText = date.toLocaleString('en-IN', options);
        document.getElementById("MyDateDisplay").textContent = date.toLocaleString('en-IN', options); 
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    showTime();
}