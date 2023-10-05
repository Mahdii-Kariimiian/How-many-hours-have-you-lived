const button = document.getElementById("button");
const output = document.getElementById("calculate");

window.addEventListener( "keypress" , (e)=> {
    if(e.key === "Enter") {
        Hourcalculator()
    }
})
button.addEventListener("click", Hourcalculator)
function Hourcalculator () {
    const input = document.getElementById("date").value;
    if (!input) {
        output.innerHTML = "Insert your Birthdate"
        output.style.color = "#874E4C"
    } else {
        const birthTime = new Date (input);
        if(birthTime == "Invalid Date"){
            output.innerHTML = "Insert correct Birthdate"
            output.style.color = "#874E4C"
        } else {
            let timecalculate = birthTime.getTime();
            const now =  new Date();
            nowcalculate = now.getTime();
            if (birthTime > now) {
                output.innerText = `You haven't been born yet!`
                output.style.color = "#874E4C"
            } else {
                timecalculate = Math.floor(timecalculate / 1000 / 60 / 60  ); // to hours
                nowcalculate = Math.floor(nowcalculate / 1000 / 60 / 60 ) // to hours
                let result = nowcalculate - timecalculate
                output.innerHTML = `You have lived <br> <span class="hour-lived"> ${result} </span> <br> HOURS so far!`
                output.style.color = "#2a3c4d"
        }
            document.getElementById("date").value = "";
        }
    }
}