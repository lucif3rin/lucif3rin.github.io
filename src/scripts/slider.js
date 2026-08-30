var sliderCounter = 0;
var sliderContent = [
  "Student",
  "Developer",
  "Teacher"
];

function slide() {
    if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
    }

    // console.log(`${Date.now()}: ${slider}, ${sliderValue}`);
    sliderValue.innerHTML = "";

    sliderValue.classList.remove("holder-animation");
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation");

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
        letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
    }

    sliderCounter++;
}

onload = () => {
    var slider = document.querySelector("#slider");
    var sliderValue = document.querySelector("#sliderValue");
    setInterval(slide(), 3000)
}

onclick = () => {
    var slider = document.querySelector("#slider");
    var sliderValue = document.querySelector("#sliderValue");
    setInterval(slide(), 3000)
}