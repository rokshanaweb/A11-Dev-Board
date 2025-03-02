

document.querySelector(".col-span-2").addEventListener("click", function () {
    window.location.href = "main.html";
});




const card6 = document.getElementById('card6');
let convertedCard6 = parseInt(card6.innerText);


const cmButton = document.querySelectorAll(".cm-button");

for (const button of cmButton) {
         
    button.addEventListener("click", function () {
        alert ('Board Updated successfully')

        if (convertedCard6 > 0){
            convertedCard6 -= 1;
            card6.innerText = convertedCard6;
        }
        const card24 = document.getElementById('card24');
        let convertedCard24 = parseInt(card24.innerText);
        convertedCard24 += 1;
        card24.innerText = convertedCard24;

        if (convertedCard6 === 0) {
            alert('congrats! you completed all the current task')
        }

        const title = this.closest('.cards').querySelector('.title')
        const history = document.getElementById('history')

        const p = document.createElement('p')
        p.classList.add('mt-4', 'p-4', 'shadow-md', 'bg-slate-100')

        p.innerText = `You have completed the task ${title.innerText} ${new Date().toLocaleTimeString()}`
              history.appendChild(p)

              this.setAttribute('disabled', 'true')
              this.classList.remove('bg-blue-500')
              this.classList.add('bg-gray-400')
    })
}


function clearHistory() {
    let historyBox = document.getElementById("history");
    if (historyBox) {
        historyBox.innerHTML = "";
    } else {
        console.error("history invalid");
    }
 } 

   
 