/* =================================
   UNIVERSITY LIBRARY
   HAITHEM SIAH
================================= */


/* =================================
   1. DONNÉES DES MODULES
================================= */

const modules = [

    {
        name: "Assurance qualité et tests de logiciels",
        enseignant: "Pr.Atil Fadila",
        email: "fadila.atil@univ-annaba.dz",
        coefficient: 3,
        categories: {
            Cours: [
                {
                    name: "Cours 1",
                    file: "Master 2/Assurance qualité et tests de logiciels/Cours/Cours 1.pdf"
                },
                {
                    name: "Cours 2",
                    file: "Master 2/Assurance qualité et tests de logiciels/Cours/Cours 2.pdf"
                }
            ],
            TD: [],
            TP: [
                {
                    name: "TP 1",
                    file: "Master 2/Assurance qualité et tests de logiciels/TP/TP 1.pdf"
                },
                {
                    name: "TP 2",
                    file: "Master 2/Assurance qualité et tests de logiciels/TP/TP 2.pdf"
                },
                {
                    name: "TP 3",
                    file: "Master 2/Assurance qualité et tests de logiciels/TP/TP 3.pdf"
                },
                {
                    name: "TP 4",
                    file: "Master 2/Assurance qualité et tests de logiciels/TP/TP 4.pdf"
                },
                {
                    name: "TP 5",
                    file: "Master 2/Assurance qualité et tests de logiciels/TP/TP 5.pdf"
                }
            ]
        }
    },

    {
        name: "DevOps et maintenance des logiciels",
        enseignant: "Pr.Bounour Nora",
        email: "nora.zeghida@univ-annaba.dz",
        coefficient: 3,
        categories: {
            Cours: [
                {
                    name: "Cours 1",
                    file: "Master 2/DevOps et maintenance des logiciels/Cours/Cours 1.pdf"
                },
                {
                    name: "Cours 2",
                    file: "Master 2/DevOps et maintenance des logiciels/Cours/Cours 2.pdf"
                },
                {
                    name: "Cours 3",
                    file: "Master 2/DevOps et maintenance des logiciels/Cours/Cours 3.pdf"
                },
                {
                    name: "Cours 4",
                    file: "Master 2/DevOps et maintenance des logiciels/Cours/Cours 4.pdf"
                },
                {
                    name: "Cours 5",
                    file: "Master 2/DevOps et maintenance des logiciels/Cours/Cours 5.pdf"
                }
            ],
            TD: [
                {
                    name: "TD 1",
                    file: "Master 2/DevOps et maintenance des logiciels/TD/TD 1.pdf"
                }
            ],
            TP: [
                {
                    name: "TP 0",
                    file: "Master 2/DevOps et maintenance des logiciels/TP/TP0.pdf"
                },
                {
                    name: "TP 1",
                    file: "Master 2/DevOps et maintenance des logiciels/TP/TP1.pdf"
                },
                {
                    name: "TP 2",
                    file: "Master 2/DevOps et maintenance des logiciels/TP/TP2.pdf"
                },
                {
                    name: "TP 3",
                    file: "Master 2/DevOps et maintenance des logiciels/TP/TP3.pdf"
                },
                {
                    name: "TP 4",
                    file: "Master 2/DevOps et maintenance des logiciels/TP/TP4.pdf"
                },
                {
                    name: "TP 5",
                    file: "Master 2/DevOps et maintenance des logiciels/TP/TP5.pdf"
                },
                {
                    name: "TP 5_SUITE",
                    file: "Master 2/DevOps et maintenance des logiciels/TP/TP5_SUITE.pdf"
                },
                {
                    name: "Liste_Exposé",
                    file: "Master 2/DevOps et maintenance des logiciels/TP/Liste_Exposé.pdf"
                }
            ]
        }
    },

    {
        name: "Ingénierie dirigée par les modèles",
        enseignant: "Dr.Layachi Soumia",
        email: "soumia.layachi@univ-annaba.dz",
        coefficient: 3,
        categories: {
            Cours: [
                {
                    name: "Cours 1",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/Cours 1.pdf"
                },
                {
                    name: "Cours 2",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/Cours 2.pdf"
                },
                {
                    name: "Cours 3",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/Cours 3.pdf"
                },
                {
                    name: "Cours 4",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/Cours 4.pdf"
                },
                {
                    name: "STANDARD OMG FINAL",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/STANDARD OMG FINAL.pdf"
                }
            ],
            TD: [
                {
                    name: "TD+Solution",
                    file: "Master 2/Ingénierie dirigée par les modèles/TD/TD+Solution.pdf"
                },
                {
                    name: "TD'",
                    file: "Master 2/Ingénierie dirigée par les modèles/TD/TD'.pdf"
                }
            ],
            TP: [
                {
                    name: "TP 1",
                    file: "Master 2/Ingénierie dirigée par les modèles/TP/TP1.pdf"
                },
                {
                    name: "TP 2",
                    file: "Master 2/Ingénierie dirigée par les modèles/TP/TP2.pdf"
                }
            ]
        }
    },

    {
        name: "Spécification et vérification formelle",
        enseignant: "Dr.Benouhiba Toufik",
        email: "toufik.benouhiba@univ-annaba.dz",
        coefficient: 3,
        categories: {
            Cours: [
                {
                    name: "Cours 1",
                    file: "Master 2/Spécification et vérification formelle/Cours/Cours 1.pdf"
                },
                {
                    name: "Cours 2",
                    file: "Master 2/Spécification et vérification formelle/Cours/Cours 2.pdf"
                },
                {
                    name: "Cours 3",
                    file: "Master 2/Spécification et vérification formelle/Cours/Cours 3.pdf"
                }
            ],
            TD: [
                {
                    name: "TD 1",
                    file: "Master 2/Spécification et vérification formelle/TD/TD 1.pdf"
                },
                {
                    name: "TD 2",
                    file: "Master 2/Spécification et vérification formelle/TD/TD 2.pdf"
                },
                {
                    name: "Solution_Exo5_TD2",
                    file: "Master 2/Spécification et vérification formelle/TD/Solution_Exo5_TD2.pdf"
                }
            ],
            TP: [
                {
                    name: "uppaal64-4.1.26.zip (Windows)",
                    file: "Master 2/Spécification et vérification formelle/uppaal64-4.1.26-1.zip"
                },
                {
                    name: "uppaal64-4.1.26.zip (Linux)",
                    file: "Master 2/Spécification et vérification formelle/uppaal64-4.1.26-2.zip"
                }
            ],
            Micro: [
                {
                    name: "Micro-Interrogation 1",
                    file: "Master 2/Spécification et vérification formelle/Micro/Micro.pdf"
                }
            ]

        }
    },

    {
        name: "Modélisation et évaluation des performances des systèmes",
        enseignant: "Pr.Tolba Cherif",
        email: "cherif.tolba@univ-annaba.dz",
        coefficient: 2,
        categories: {
            Cours: [
                {
                    name: "Cours 1",
                    file: "Master 2/Modélisation et évaluation des performances des systèmes/Cours/Cours 1.pdf"
                },
                {
                    name: "Cours 2",
                    file: "Master 2/Modélisation et évaluation des performances des systèmes/Cours/Cours 2.pdf"
                },
                {
                    name: "Cours 3",
                    file: "Master 2/Modélisation et évaluation des performances des systèmes/Cours/Cours 3.pdf"
                }
            ],
            TD: [],
            TP: []
        }
    },

    {
        name: "Analyse des données massives",
        enseignant: "Pr.Souici Labiba",
        email: "souici.labiba@gmail.com",
        coefficient: 2,
        categories: {
            Cours: [
                {
                    name: "Programme",
                    file: "Master 2/Analyse des données massives/Cours/Programme.pdf"
                },
                {
                    name: "Cours 1",
                    file: "Master 2/Analyse des données massives/Cours/Cours 1.pdf"
                },
                {
                    name: "Cours 2",
                    file: "Master 2/Analyse des données massives/Cours/Cours 2.pdf"
                }
            ],
            TD: [
                {
                    name: "Article_Survey",
                    file: "Master 2/Analyse des données massives/TD/Article_Survey.pdf"
                },
                {
                    name: "How to Read a Paper",
                    file: "Master 2/Analyse des données massives/TD/How to Read a Paper.pdf"
                },
                                {
                    name: "Travail",
                    file: "Master 2/Analyse des données massives/TD/Travail.pdf"
                }
            ],
            TP: [
                {
                    name: "Travaux_Pratiques",
                    file: "Master 2/Analyse des données massives/TP/Travaux_Pratiques.pdf"
                }
            ]
        }
    },

    {
        name: "Méthodologie de recherche",
        enseignant: "Pr.Mohamed Ben Ali Yamina",
        email: "benaliyam2@yahoo.fr",
        coefficient: 1,
        categories: {
            Cours: [
                {
                    name: "Cours",
                    file: "Master 2/Méthodologie de recherche/Cours.pdf"
                }
            ],
            Travail: [
                {
                    name: "Travail",
                    file: "Master 2/Méthodologie de recherche/Travail.pdf"
                }
            ]
        }
    },

    {
        name: "Informatique quantique",
        enseignant: "Pr.Ghoualmi Nacira",
        email: "nacira.ghoualmi@univ-annaba.dz",
        coefficient: 1,
        categories: {
            Cours: [],
        }
    }

];


/* =================================
   2. ÉLÉMENTS HTML
================================= */

const content = document.getElementById("content");

const pageTitle = document.getElementById("pageTitle");

const pageLabel = document.getElementById("pageLabel");

const pageDescription = document.getElementById("pageDescription");

const backButton = document.getElementById("backButton");


/* =================================
   3. VARIABLES DE NAVIGATION
================================= */

let currentModule = null;

let currentCategory = null;


/* =================================
   4. ICÔNE DE TÉLÉCHARGEMENT
================================= */

const downloadIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v12"></path>
        <path d="m7 10 5 5 5-5"></path>
        <path d="M5 20h14"></path>
    </svg>
`;


/* =================================
   5. AFFICHER LES MODULES
================================= */

function showModules() {

    currentModule = null;
    currentCategory = null;

    pageLabel.textContent = uiText("page-label");

    pageTitle.textContent = uiText("page-title");

    pageDescription.textContent =
        uiText("select-module");

    backButton.hidden = true;

    content.className = "content-grid";

    content.innerHTML = "";

    modules.forEach((module, index) => {

        const card = document.createElement("div");

        card.className = "module-card";

        // Numéro du module
        const number = document.createElement("span");

        number.className = "card-number";

        number.textContent =
            ` ${String(index + 1).padStart(2, "0")}`;

        // Nom du module
        const title = document.createElement("h3");

        title.className = "card-title";

        title.textContent = translateModule(module.name);

        // Coefficient sous le titre
        const coefficient = document.createElement("p");

        coefficient.className = "module-coefficient";

        coefficient.textContent =
            uiText("coefficient") + (module.coefficient ?? uiText("not-informed"));


        // Informations de l'enseignant à droite
        const info = document.createElement("div");

        info.className = "module-info";

        const teacher = document.createElement("p");

        teacher.textContent = module.enseignant || uiText("not-informed");

        const email = document.createElement("a");

        email.textContent = module.email || uiText("email-not-informed");

        if (module.email) {
            email.href = "mailto:" + module.email;
        }

        info.append(teacher, email);

        // Flèche
        const arrow = document.createElement("span");

        arrow.className = "card-arrow";

        arrow.textContent = "→";

        // Ajouter les éléments à la carte
        card.append(number, title, coefficient, info, arrow);

        // Événement de clic
        card.addEventListener("click", () => {

            showCategories(index);

        });

        // Ajouter la carte à la page
        content.appendChild(card);

    });

}


/* =================================
   6. AFFICHER LES CATÉGORIES
================================= */

function showCategories(index, addHistory = true) {

    currentModule = index;

    currentCategory = null;

    const module = modules[index];

    // Ajouter une entrée dans l'historique uniquement lors d'une navigation
    if (addHistory) {
        history.pushState({
            page: "categories",
            moduleIndex: index
        }, "");
    }


    pageLabel.textContent = uiText("selected-module");

    pageTitle.textContent = translateModule(module.name);

    pageDescription.textContent =
        uiText("choose-category");

    backButton.hidden = false;

    content.className = "content-grid";

    content.innerHTML = "";


    // Récupérer automatiquement toutes les catégories du module
    const categories = Object.keys(module.categories);


    categories.forEach((category, index) => {

        const card = document.createElement("div");

        card.className = "category-card";


        const number = document.createElement("span");

        number.className = "card-number";


        const title = document.createElement("h3");

        title.className = "card-title";

        title.textContent = translateCategory(category);


        const arrow = document.createElement("span");

        arrow.className = "card-arrow";

        arrow.textContent = "→";


        card.append(number, title, arrow);


        card.addEventListener("click", () => {

            showDocuments(category);

        });


        content.appendChild(card);

    });

}


/* =================================
   7. AFFICHER LES DOCUMENTS PDF
================================= */

function showDocuments(categoryName, addHistory = true) {

    currentCategory = categoryName;

    // Ajouter une entrée dans l'historique uniquement lors d'une navigation
    if (addHistory) {
        history.pushState({
            page: "documents",
            moduleIndex: currentModule,
            categoryName: categoryName
        }, "");
    }


    const module = modules[currentModule];

    const documents = module.categories[categoryName];


    pageLabel.textContent =
        `${translateCategory(categoryName).toUpperCase()} • ${translateModule(module.name)}`;

    pageTitle.textContent = translateCategory(categoryName);

    pageDescription.textContent =
        uiText("documents-description");

    backButton.hidden = false;

    content.className = "pdf-list";

    content.innerHTML = "";


    /* Catégorie vide */

    if (documents.length === 0) {

        const empty = document.createElement("div");

        empty.className = "empty-message";


        const title = document.createElement("strong");

        title.textContent =
            uiText("empty-title");


        const message = document.createElement("span");

        message.textContent =
            uiText("empty-message");


        empty.append(title, message);

        content.appendChild(empty);

        return;

    }


    /* Liste des PDF */

    documents.forEach((pdf) => {

        const item = document.createElement("div");

        item.className = "pdf-item";


        const nameContainer = document.createElement("div");

        nameContainer.className = "pdf-name";


        const symbol = document.createElement("div");

        symbol.className = "pdf-symbol";

        symbol.textContent = "PDF";


        const name = document.createElement("span");

        name.textContent = pdf.name;


        nameContainer.append(symbol, name);


        /* Bouton téléchargement */

        const download = document.createElement("a");

        download.className = "download-button";

        download.href = encodeURI(pdf.file);
        download.target = "_blank";
        download.rel = "noopener";

        download.title = uiText("download") + " " + pdf.name;

        download.setAttribute(
            "aria-label",
            uiText("download") + " " + pdf.name
        );

        download.innerHTML = downloadIcon;


        item.append(nameContainer, download);

        content.appendChild(item);

    });

}


/* =================================
   8. GESTION DU BOUTON RETOUR
================================= */

// Bouton Retour du site
backButton.addEventListener("click", () => {

    history.back();

});


// Bouton Retour du navigateur ou du téléphone
window.addEventListener("popstate", (event) => {

    const state = event.state;

    if (!state || state.page === "modules") {

        showModules();

    } else if (state.page === "categories") {

        showCategories(state.moduleIndex, false);

    } else if (state.page === "documents") {

        currentModule = state.moduleIndex;

        showDocuments(state.categoryName, false);

    }

});



/* =====================================
   SYSTÈME DE TRADUCTION (FR / EN)
   Traduction de l'interface et des contenus affichés
   ===================================== */

let currentLanguage = localStorage.getItem("language") || "fr";

const translations = {
    fr: {
        "university-name": "Université Badji Mokhtar - Annaba",
        "hero-label": "INFORMATIQUE",
        "footer-author": "Réalisé par",
        "hero-description": "Un espace pédagogique dédié aux étudiants de Master 2 Génie Logiciel, regroupant les ressources essentielles à leur apprentissage et à leur réussite universitaire.",
        "modules-description": "Explorez vos modules et accédez facilement à vos cours, TD, TP et documents universitaires.",
        "welcome-label": "BIENVENUE",
        "welcome-title": "Votre savoir, à portée de clic.",
        "page-label": "ESPACE PÉDAGOGIQUE",
        "page-title": "Mes modules",
        "select-module": "Sélectionnez un module pour découvrir ses ressources.",
        "selected-module": "MODULE SÉLECTIONNÉ",
        "choose-category": "Choisissez la catégorie de documents à consulter.",
        "documents-description": "Retrouvez les documents disponibles dans cette catégorie.",
        "empty-title": "Aucun document disponible pour le moment.",
        "empty-message": "Les ressources de cette catégorie seront ajoutées prochainement.",
        "back": "← Retour",
        "download": "Télécharger",
        "coefficient": "Coefficient : ",
        "not-informed": "Non renseigné",
        "email-not-informed": "E-mail non renseigné"
    },

    en: {
        "university-name": "Badji Mokhtar University - Annaba",
        "hero-label": "COMPUTER SCIENCE",
        "footer-author": "Created by",
        "hero-description": "An educational space dedicated to Master 2 Software Engineering students, bringing together essential resources to support their learning and academic success.",
        "modules-description": "Explore your modules and easily access your courses, tutorials, practical sessions and academic documents.",
        "welcome-label": "WELCOME",
        "welcome-title": "Knowledge, just a click away.",
        "page-label": "LEARNING SPACE",
        "page-title": "My Modules",
        "select-module": "Select a module to explore its resources.",
        "selected-module": "SELECTED MODULE",
        "choose-category": "Choose a document category to explore.",
        "documents-description": "Browse the documents available in this category.",
        "empty-title": "No documents available at the moment.",
        "empty-message": "Resources for this category will be added soon.",
        "back": "← Back",
        "download": "Download",
        "coefficient": "Coefficient: ",
        "not-informed": "Not specified",
        "email-not-informed": "Email not provided"
    }
};

const moduleNamesEN = {
    "Assurance qualité et tests de logiciels": "Software Quality Assurance and Testing",
    "DevOps et maintenance des logiciels": "DevOps and Software Maintenance",
    "Ingénierie dirigée par les modèles": "Model-Driven Engineering",
    "Spécification et vérification formelle": "Formal Specification and Verification",
    "Modélisation et évaluation des performances des systèmes": "System Performance Modeling and Evaluation",
    "Analyse des données massives": "Big Data Analytics",
    "Méthodologie de recherche": "Research Methodology",
    "Informatique quantique": "Quantum Computing"
};

function uiText(key) {
    return translations[currentLanguage][key] || translations.fr[key] || key;
}

function translateModule(name) {
    return currentLanguage === "en" ? (moduleNamesEN[name] || name) : name;
}

function translateCategory(category) {
    if (currentLanguage !== "en") return category;

    const categoryNames = {
        "Cours": "Courses",
        "TD": "Tut",
        "TP": "Prt",
        "Travail": "Assignment",
        "Micro": "Micro"
    };

    return categoryNames[category] || category;
}

function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    document.documentElement.lang = currentLanguage;
    document.getElementById("frBtn").classList.toggle("active", currentLanguage === "fr");
    document.getElementById("enBtn").classList.toggle("active", currentLanguage === "en");
}

function changeLanguage(lang) {
    if (!translations[lang]) return;

    currentLanguage = lang;
    localStorage.setItem("language", lang);
    applyStaticTranslations();

    // Actualiser le contenu affiché sans modifier l'historique de navigation.
    if (typeof currentModule === "number" && currentCategory !== null) {
        showDocuments(currentCategory, false);
    } else if (typeof currentModule === "number") {
        showCategories(currentModule, false);
    } else {
        showModules();
    }
}

document.getElementById("frBtn").addEventListener("click", () => changeLanguage("fr"));
document.getElementById("enBtn").addEventListener("click", () => changeLanguage("en"));


/* =================================
   9. INITIALISATION
================================= */

if (
    content &&
    pageTitle &&
    pageLabel &&
    pageDescription &&
    backButton
) {

    // Définir la page principale comme première étape de navigation
    history.replaceState({
        page: "modules"
    }, "", location.href);

    showModules();

    console.log(
        "University Library : navigation activée !"
    );

} else {

    console.error(
        "Erreur : un élément HTML nécessaire est introuvable."
    );

}