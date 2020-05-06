function showTime() {
    let date = new Date() ; 
    let h = date.getHours(); // 0-23
    let m = date.getMinutes(); // 0-59
    let s = date.getSeconds(); // 0-59
    let period = "AM";
    if(h==0){
        h=12 ; 
    } 
    if ( h > 12){
        h = h-12 ; 
        period="PM";
    }
    if(h< 10 ){
        h="0"+h ; 
    } 
    if(m<10){
        m = "0"+m ; 
    }
    if (s<10){
        s="0"+s ; 
    }
    let time = h + ":" + m +":"+s + " "+period ; 
   document.getElementById("clockDisplay").innerText = time ;
    // document.getElementById("clockDisplay").textContent = time;
    setTimeout(showTime,1000);
}
setInterval(showTime , 1000 );
