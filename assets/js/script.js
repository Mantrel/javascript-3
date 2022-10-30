function pintar(ele, color = 'green'){
    console.log(ele);
        ele.style.backgroundColor = color;
    }
       
    //
   const ele = document.getElementById("ele1");
    //
   ele.addEventListener("click", function(){
    pintar(ele, 'yellow')
   });