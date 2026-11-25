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
                    file: "Master 2/Spécification et vérification formelle/Cours/chap1.pdf"
                },
                {
                    name: "Cours 2",
                    file: "Master 2/Spécification et vérification formelle/Cours/chap2.pdf"
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

    pageLabel.textContent = "ESPACE PÉDAGOGIQUE";

    pageTitle.textContent = "Mes modules";

    pageDescription.textContent =
        "Sélectionnez un module pour découvrir ses ressources.";

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

        title.textContent = module.name;

        // Coefficient sous le titre
        const coefficient = document.createElement("p");

        coefficient.className = "module-coefficient";

        coefficient.textContent =
            "Coefficient : " + (module.coefficient ?? "Non renseigné");


        // Informations de l'enseignant à droite
        const info = document.createElement("div");

        info.className = "module-info";

        const teacher = document.createElement("p");

        teacher.textContent = module.enseignant || "Non renseigné";

        const email = document.createElement("a");

        email.textContent = module.email || "E-mail non renseigné";

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


    pageLabel.textContent = "MODULE SÉLECTIONNÉ";

    pageTitle.textContent = module.name;

    pageDescription.textContent =
        "Choisissez la catégorie de documents à consulter.";

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

        title.textContent = category;


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
        `${categoryName.toUpperCase()} • ${module.name}`;

    pageTitle.textContent = categoryName;

    pageDescription.textContent =
        "Retrouvez les documents disponibles dans cette catégorie.";

    backButton.hidden = false;

    content.className = "pdf-list";

    content.innerHTML = "";


    /* Catégorie vide */

    if (documents.length === 0) {

        const empty = document.createElement("div");

        empty.className = "empty-message";


        const title = document.createElement("strong");

        title.textContent =
            "Aucun document disponible pour le moment.";


        const message = document.createElement("span");

        message.textContent =
            "Les ressources de cette catégorie seront ajoutées prochainement.";


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

        download.title = "Télécharger " + pdf.name;

        download.setAttribute(
            "aria-label",
            "Télécharger " + pdf.name
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
