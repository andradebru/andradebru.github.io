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
    document.getElementById("linkHome").textContent = content.linkHome;
    document.getElementById("linkAbout").textContent = content.linkAbout;
    document.getElementById("linkAbout").textContent = content.linkAbout;
    document.getElementById("linkContact").textContent = content.linkContact;
    document.getElementById("socialMedia").textContent = content.socialMedia;
}

document.getElementById("languageSwitch").addEventListener("click", switchLanguage);

updateTexts();
