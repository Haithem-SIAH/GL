
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
            TP: []
        }
    },

    {
        name: "DevOps et maintenance des logiciels",
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
            TD: [],
            TP: []
        }
    },

    {
        name: "Ingénierie dirigée par les modèles",
        categories: {
            Cours: [
                {
                    name: "Chapitre 1",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/Chapitre 1.pdf"
                },
                {
                    name: "Chapitre 2",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/Chapitre 2.pdf"
                },
                {
                    name: "Chapitre 3",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/Chapitre 3.pdf"
                },
                {
                    name: "STANDARD OMG FINAL",
                    file: "Master 2/Ingénierie dirigée par les modèles/Cours/STANDARD OMG FINAL.pdf"
                }
            ],
            TD: [],
            TP: []
        }
    },

    {
        name: "Spécification et vérification formelle",
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
            TD: [],
            TP: []
        }
    },

    {
        name: "Modélisation et évaluation des performances des systèmes",
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
        categories: {
            Cours: [
                {
                    name: "Programme",
                    file: "Master 2/Analyse des données massives/Pgm Big data Analytics M2.pdf"
                }
            ],
            TD: [],
            TP: []
        }
    },

    {
        name: "Méthodologie de recherche",
        categories: {
            Cours: [
                {
                    name: "Cours",
                    file: "Master 2/Méthodologie de recherche/Cours.pdf"
                }
            ],
            TD: [],
            TP: []
        }
    },

    {
        name: "Informatique quantique",
        categories: {
            Cours: [],
            TD: [],
            TP: []
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


        const number = document.createElement("span");

        number.className = "card-number";

        number.textContent =
            `MODULE ${String(index + 1).padStart(2, "0")}`;


        const title = document.createElement("h3");

        title.className = "card-title";

        title.textContent = module.name;


        const description = document.createElement("p");

        description.className = "card-description";

        description.textContent = "Cours • TD • TP";


        const arrow = document.createElement("span");

        arrow.className = "card-arrow";

        arrow.textContent = "→";


        card.append(number, title, description, arrow);


        card.addEventListener("click", () => {

            showCategories(index);

        });


        content.appendChild(card);

    });

}


/* =================================
   6. AFFICHER LES CATÉGORIES
================================= */

function showCategories(index) {

    currentModule = index;

    currentCategory = null;

    const module = modules[index];


    pageLabel.textContent = "MODULE SÉLECTIONNÉ";

    pageTitle.textContent = module.name;

    pageDescription.textContent =
        "Choisissez la catégorie de documents à consulter.";

    backButton.hidden = false;

    content.className = "content-grid";

    content.innerHTML = "";


    const categories = [

        {
            name: "Cours",
            description: "Supports de cours et chapitres."
        },

        {
            name: "TD",
            description: "Travaux dirigés et exercices."
        },

        {
            name: "TP",
            description: "Travaux pratiques et applications."
        }

    ];


    categories.forEach((category, index) => {

        const card = document.createElement("div");

        card.className = "category-card";


        const number = document.createElement("span");

        number.className = "card-number";

        number.textContent = `RESSOURCES 0${index + 1}`;


        const title = document.createElement("h3");

        title.className = "card-title";

        title.textContent = category.name;


        const description = document.createElement("p");

        description.className = "card-description";

        description.textContent = category.description;


        const arrow = document.createElement("span");

        arrow.className = "card-arrow";

        arrow.textContent = "→";


        card.append(number, title, description, arrow);


        card.addEventListener("click", () => {

            showDocuments(category.name);

        });


        content.appendChild(card);

    });

}


/* =================================
   7. AFFICHER LES DOCUMENTS PDF
================================= */

function showDocuments(categoryName) {

    currentCategory = categoryName;

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

        download.download = "";

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
   8. BOUTON RETOUR
================================= */

backButton.addEventListener("click", () => {

    if (currentCategory !== null) {

        showCategories(currentModule);

    } else {

        showModules();

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

    showModules();

    console.log(
        "University Library : navigation activée !"
    );

} else {

    console.error(
        "Erreur : un élément HTML nécessaire est introuvable."
    );

}
