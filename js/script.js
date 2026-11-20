
const modules = [

    {
        name: "Assurance qualité et tests de logiciels",
        pdfs: [
            {
                name: "Cours 1",
                file: "Master 2/Assurance qualité et tests de logiciels/Cours/Cours 1.pdf"
            },
            {
                name: "Cours 2",
                file: "Master 2/Assurance qualité et tests de logiciels/Cours/Cours 2.pdf"
            }
        ]
    },

    {
        name: "DevOps et maintenance des logiciels",
        pdfs: [
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
        ]
    },

    {
        name: "Ingénierie dirigée par les modèles",
        pdfs: [
            {
                name: "Cours 1",
                file: "Master 2/Ingénierie dirigée par les modèles/Cours/Chapitre 1.pdf"
            },
            {
                name: "Cours 2",
                file: "Master 2/Ingénierie dirigée par les modèles/Cours/Chapitre 2.pdf"
            },
            {
                name: "Cours 3",
                file: "Master 2/Ingénierie dirigée par les modèles/Cours/Chapitre 3.pdf"
            },
            {
                name: "STANDARD OMG FINAL",
                file: "Master 2/Ingénierie dirigée par les modèles/Cours/STANDARD OMG FINAL.pdf"
            }
        ]
    },

    {
        name: "Spécification et vérification formelle",
        pdfs: [
            {
                name: "Cours 1",
                file: "Master 2/Spécification et vérification formelle/Cours/chap1.pdf"
            },
            {
                name: "Cours 2",
                file: "Master 2/Spécification et vérification formelle/Cours/chap2.pdf"
            }
        ]
    },

    {
        name: "Modélisation et évaluation des performances des systèmes",
        pdfs: [
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
        ]
    },

    {
        name: "Analyse des données massives",
        pdfs: [
            {
                name: "Programme",
                file: "Master 2/Analyse des données massives/Pgm Big data Analytics M2 GL.pdf"
            }
        ]
    },

    {
        name: "Méthodologie de recherche",
        pdfs: [
            {
                name: "Cours",
                file: "Master 2/Méthodologie de recherche/Cours.pdf"
            }
        ]
    },

    {
        name: "Informatique quantique",
        pdfs: []
    }

];


// AFFICHAGE DES MODULES

const container = document.getElementById("modules");

container.innerHTML = "";

modules.forEach((module, index) => {

    const card = document.createElement("div");
    card.className = "module";

    const title = document.createElement("h3");

    title.textContent =
        `${String(index + 1).padStart(2, "0")} — ${module.name}`;

    card.appendChild(title);


    // SI AUCUN DOCUMENT

    if (module.pdfs.length === 0) {

        const empty = document.createElement("p");

        empty.textContent = "Documents bientôt disponibles.";

        empty.style.color = "#9aa9c4";
        empty.style.fontSize = "13px";
        empty.style.marginTop = "10px";

        card.appendChild(empty);
    }


    // AFFICHAGE DES PDF

    module.pdfs.forEach(pdf => {

        const item = document.createElement("div");
        item.className = "pdf";

        const name = document.createElement("span");
        name.textContent = pdf.name;

        // UN SEUL BOUTON CONSULTER

        const view = document.createElement("a");

        view.textContent = "Consulter";

        view.href = encodeURI(pdf.file);

        view.target = "_blank";

        view.rel = "noopener";

        // AJOUT

        item.appendChild(name);
        item.appendChild(view);

        card.appendChild(item);

    });

    container.appendChild(card);

});

console.log("University Library : 8 modules affichés !");
