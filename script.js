const translation = {
    en: {
        linkHome: "home //",
        linkAbout: "about her //",
    },
    pt: {
        linkHome: "início //",
        linkAbout: "quem é //",
    }
  };
  
let currentLanguage = "en";

function switchLanguage() {
currentLanguage = currentLanguage === "en" ? "pt" : "en";
updateTexts();
}

function updateTexts() {
const content = translation[currentLanguage];
document.getElementById("linkHome").textContent = content.linkHome;
document.getElementById("linkAbout").textContent = content.linkAbout;
}

document.getElementById("languageSwitch").addEventListener("click", switchLanguage);

updateTexts();
