let signInContainer = document.getElementById("maincontent");
let buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("ml-buttonsContainer");
let signInTab = document.createElement("button");
let signUpTab = document.createElement("button");
signInTab.classList.add("ml-btn-tab");
signUpTab.classList.add("ml-btn-tab");
signInTab.textContent = "SIGN IN";
signUpTab.textContent = "SIGN UP";
signInTab.classList.add("active");
buttonsContainer.appendChild(signInTab);
buttonsContainer.appendChild(signUpTab);
signInContainer.prepend(buttonsContainer);
let tabsButtons = document.querySelectorAll(".ml-btn-tab");
let boxesContainer = document.querySelector("#maincontent .row");
let documentBoxes = document.querySelectorAll("#maincontent .row .col-sm-5");
documentBoxes[0].classList.add("active");
for (let i = 0; i < tabsButtons.length; i++) {
    tabsButtons[i].addEventListener("click", function() {
        buttonsContainer.querySelector(".active").classList.remove("active");
        tabsButtons[i].classList.add("active");
        boxesContainer.querySelector(".active").classList.remove("active");
        documentBoxes[i].classList.add("active")
    })
}