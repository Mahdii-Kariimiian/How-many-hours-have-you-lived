# Hours lived

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview
This app takes the birthdate,convert it to miliseconds and then substract it from Unix epoch. then convert the result from miliseconds to hours and show it to user.


### Screenshot
![hours lived  (1)](https://github.com/Mahdii-Kariimiian/How-many-hours-have-you-lived/assets/134393975/76f477cb-2946-4044-81de-4bea17a9dac3)

![hours lived  (2)](https://github.com/Mahdii-Kariimiian/How-many-hours-have-you-lived/assets/134393975/3dece01b-3467-40ff-b990-9fccb369f5af)

![hours lived  (3)](https://github.com/Mahdii-Kariimiian/How-many-hours-have-you-lived/assets/134393975/5e1c0758-e901-4469-b45d-db773da1b199)

### Links
-vercel: https://how-many-hours-have-you-lived.vercel.app/

## My process
### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I used

Here is a glimpse of what I used to build this mini project.
````

JavaScript

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

````
## Author
Mahdi Karimian
- linkedin (www.linkedin.com/in/mahdi-karimian-116643273)
- Frontend Mentor – @Mahdii-Kariimiian (https://www.frontendmentor.io/profile/Mahdii-Kariimiian)


