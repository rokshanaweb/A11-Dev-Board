const bgColors = ["bg-red-200", "bg-green-200", "bg-blue-200", "bg-yellow-200", "bg-purple-200"];
        
 let bgIndex = 0;
 const body = document.getElementById("mainBody");
 const colorButton = document.getElementById("colorButton");

 colorButton.addEventListener("click", function () {
    
     body.classList.remove(...bgColors);

  
     body.classList.add(bgColors[bgIndex]);

    
     bgIndex = (bgIndex + 1) % bgColors.length;
    });