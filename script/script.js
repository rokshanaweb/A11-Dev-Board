

document.querySelector(".col-span-2").addEventListener("click", function () {
    window.location.href = "main.html";
});





function updateNumbers(cardNumber) {
    let card6 = document.getElementById("card6");
    let card24 = document.getElementById("card24");
    let historyBox = document.getElementById("history");

    let num6 = parseInt(card6.textContent);
    let num24 = parseInt(card24.textContent);

    if (num6 > 0) {
        card6.textContent = num6 - 1;
        card24.textContent = num24 + 1;

       
        let log = document.createElement("p");
        log.className = "text-[20px] p-1 ";
        log.textContent = `you Have completed the task at 1:34:34 Am`;
        historyBox.appendChild(log);

        
     
        alert(`Board Updated successfully`);
    }
}




function clearHistory() {
    let historyBox = document.getElementById("history");
    if (historyBox) {
        historyBox.innerHTML = "";
    } else {
        console.error("history invalid");
    }
 } 

   
 