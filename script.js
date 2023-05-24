const translation = {
    pt: {
        linkHome: "início //",
        linkAbout: "quem é //",
        linkContact: "contato //",
        socialMedia: "In my spare time...",
        who: "Quem é Bruna?",
        experience1: "Estudante de Análise e Desenvolvimento de Sistemas",
        experience2: "Foi estagiária de desenvolvimento web na Buser, pelo programa Buser Tech",
        experience3: "Tem experiência com front-end com Vue, Vuetify, HTML, CSS e JavaScript, back-end com Python e Django e banco de dados Postgres, SQL. Atualmente estudando Java.",
        experience4: "Graduada em Design Gráfico. Na área, trabalhei em várias agências com foco em criação de interfaces para sites e apps.",
        experience5: "Apaixonada por literatura, cinema, filme de terror (principalmente os com efeitos práticos), viagens, arte e tecnologia. Dá pra conferir o que curto nas redes que deixei aqui do lado :)",
        potfolioTitle: "O que tenho feito",
        portfolioSubtitle: "Projetos além desta página :p",
        description1: "Encurtador de URLs feito em equipe, com Django e PostgreSQL.",
        description2: " Clone do jogo Wordle feito com JavaScript, jogável e funcional.",
        description3: "Reprodução da tela inicial do app mobile da Buser.",
        description4: "Página de app de música com HTML e CSS, desafio do site rontend Mentor.",
        description5: "Página de QR code, desafio do site Frontend Mentor, feito com HTML e CSS.",
        description6: "Página fictícia para UX/UI designer para fins de estudo de HTML/CSS.",
        description7: "Página fictícia para fins de estudo de HTML/CSS. Desafio do Buser Tech.",
        contactTitle: "Vamo tomar um café!",
        contactSubtitle: "Bora conversar sobre transição de carreira, programação, filme de terror com efeitos práticos ou só se acompanhar por aí.",
    },
    en: {
        linkHome: "home //",
        linkAbout: "about //",
        linkContact: "contact //",
        socialMedia: "In my spare time...",
        who: "Who is Bruna?",
        experience1: "Graduating in Systems Analysis and Development.",
        experience2: "Former full stack web development intern at Buser, through the Buser Tech internship program.",
        experience3: "Experienced in front-end development with Vue, Vuetify, HTML, CSS, and JavaScript, back-end development with Python and Django, and database management with PostgreSQL and SQL. Currently studying Java.",
        experience4: "Graduated in Graphic Design. In this field, I've worked in various agencies, focusing on creating interfaces for websites and apps.",
        experience5: "Passionate about literature, cinema, horror movies (especially practical effects), travel, art, and technology. You can check out my interests on the social media links I have provided on the side :)",
        potfolioTitle: "What I've been working on",
        portfolioSubtitle: "Projects besides this page",
        description1: "URL shortener. URL shortener project developed with Django and PostgreSQL.",
        description2: "Clone of the Wordle game made with JavaScript, playable and functional.",
        description3: "Reproduction of the mobile app homepage for Buser.",
        description4: "Summary page for a fictional music app subscription.",
        description5: "Music app page using HTML and CSS, a Frontend Mentor challenge.",
        description6: "Fictional UX/UI designer page for HTML/CSS study purposes.",
        description7: "Fictional HTML/CSS study page. Buser Tech challenge.",
        contactTitle: "Let's chat!",
        contactSubtitle: "Let's talk about tech oportunities, career transition, practical effects horror movies, or just keep up with each other.",
    }
  };
  
let currentLanguage = "en";

function switchLanguage() {
    currentLanguage = currentLanguage === "en" ? "pt" : "en";
    updateTexts();
    changeButton(currentLanguage);
}

function updateTexts() {
    const content = translation[currentLanguage];
    const textsToTranslate = [
        "linkHome", "linkAbout", "linkContact", 
        "socialMedia", "experience1", "experience2", 
        "experience3", "experience4", "experience5",
        "potfolioTitle", "portfolioSubtitle", "description1",
        "description2", "description3", "description4",
        "description5", "description6", "description7",
        "contactTitle", "contactSubtitle"
    ]
    
    textsToTranslate.forEach((elementID) => {
        document.getElementById(elementID).textContent = content[elementID];
    })

}

function changeButton(currentLanguage) {
    const langBtnContent = document.getElementById("languageSwitch");
    
    currentLanguage === "en"
    ? langBtnContent.textContent ="pt/br"
    : langBtnContent.textContent = "english";
}

document.getElementById("languageSwitch").addEventListener("click", switchLanguage);

updateTexts();
