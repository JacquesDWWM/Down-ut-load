const dropContainer = document.querySelector("#dropcontainer");
const fileInput = document.querySelector("#files");

// dropContainer.addEventListener("dragover", (e) => {
//     e.preventDefault();
// }, false);

dropContainer.addEventListener("dragenter", () => {
    dropContainer.classList.add("drag-active");
});

dropContainer.addEventListener("dragleave", () => {
    dropContainer.classList.remove("drag-active");
});

dropContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    dropContainer.classList.remove("drag-active");
    fileInput.files = e.dataTransfer.files;
});

const converText = document.querySelector('#converText');
const baseUrl = "https://jacquesdwwm.github.io/Down-ut-load/index.html/";
// const baseUrl = "http://127.0.0.1:5500/index.html/";
const filesInput = document.querySelector('#files');
const fichier = filesInput.value;
converText.innerHTML = 
        "Clique sur le bouton pour convertir : " + fichier
const generate = document.querySelector('#generate')
const newUrl = document.querySelector('#newUrl')
let absolute = function(rel) { 
    let link = document.createElement("a"); 
        link.href = rel; 
        return (link.protocol + "//" + link.host + link.pathname); 
    } 
    function generateUrl() { 
        const fichier = fileInput.value;
    const absoluteUrl = baseUrl + fichier + '.html'; // Génération de l'URL absolue
    const link = document.createElement("a"); // Création d'un élément <a> pour le lien de téléchargement
    link.href = absoluteUrl; // Définition de l'URL absolue comme lien de téléchargement
    link.setAttribute("download", fichier + '.html'); // Attribution du nom de fichier pour le téléchargement
    link.innerHTML = "Télécharger le fichier"; // Texte du lien de téléchargement
    newUrl.innerHTML = ''; // Suppression du contenu précédent
    newUrl.appendChild(link); // Ajout du lien de téléchargement à l'élément newUrl
    } 

    generate.addEventListener('click', generateUrl)