const translation = {
    en: {
        linkHome: "home //",
        linkAbout: "about //",
        linkContact: "contact //",
        socialMedia: "In my spare time..."

    },
    pt: {
        linkHome: "início //",
        linkAbout: "quem é //",
        linkContact: "contato //",
        socialMedia: "In my spare time..."

    }
  };
  
let currentLanguage = "en";

function switchLanguage() {
    currentLanguage = currentLanguage === "en" ? "pt" : "en";
    updateTexts();
}

function updateTexts() {
    const content = translation[currentLanguage];
    const textsToTranslate = ["linkHome", "linkAbout", "linkContact", "socialMedia"]
    
    textsToTranslate.forEach((elementID) => {
        document.getElementById(elementID).textContent = content[elementID];
    })
}

document.getElementById("languageSwitch").addEventListener("click", switchLanguage);

updateTexts();
