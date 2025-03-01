const bgColors = ["bg-red-200", "bg-green-200", "bg-blue-200", "bg-yellow-200", "bg-purple-200"];
        
 let bgIndex = 0;
 const body = document.getElementById("mainBody");
 const colorButton = document.getElementById("colorButton");

 colorButton.addEventListener("click", function () {
    
     body.classList.remove(...bgColors);

  
     body.classList.add(bgColors[bgIndex]);

    
     bgIndex = (bgIndex + 1) % bgColors.length;
    });


    function disableButton(button) {
       
        button.disabled = true;
        button.style.backgroundColor = 'white';
        button.style.color = 'gray';
        button.style.cursor = 'not-allowed';
    }

    function showTodayDate() {
        const today = new Date(); 
        const options = { weekday: 'short' }; 
        const day = today.toLocaleDateString('en-US', options); 
        
       
        const formattedDate = today.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    
       
        document.getElementById("day").textContent = day;
        document.getElementById("date").textContent = formattedDate;
    }
    
  
    showTodayDate();