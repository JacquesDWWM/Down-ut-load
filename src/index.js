import { storageRef } from './firebase-config';
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import './style.css'
import imageUrl from './image/downut.png'


const image = new Image()
const logo = document.getElementById('logo')
image.src = imageUrl
image.alt = '#logo'

logo.append(image)



const uploadButton = document.getElementById('generate');
const uploadStatus = document.getElementById('uploadStatus');

uploadButton.addEventListener('click', () => {
    const file = fileInput.files[0]; // Obtenez le fichier de l'input
    if (file) {
        const fileRef = ref(storageRef, `uploads/${file.name}`); // Créer une référence pour le fichier dans Firebase Storage

        uploadBytes(fileRef, file).then((snapshot) => {
            console.log('File uploaded successfully');
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log(`File available at ${downloadURL}`);
                // uploadStatus.innerHTML = `<a href="${downloadURL}" download="${file.name} target="_blank">Télécharger "${file.name}"</a>`;
                forceDownload(downloadURL, file.name)
            });
            fileInput.value = ''
        }).catch((error) => {
            console.error('Error uploading file:', error);
            uploadStatus.textContent = 'Error uploading file: ' + error.message;
        });
    } else {
        uploadStatus.textContent = 'Veuillez choisir un fichier.';
    }
});

function forceDownload(url, fileName) {
    fetch(url).then(resp => resp.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }).catch(() => uploadStatus.textContent = 'Failed to download file.');
}

console.log(forceDownload)




const dropContainer = document.querySelector("#dropcontainer");
const fileInput = document.querySelector("#files");

dropContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
}, false);

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

const toggleMenu = document.querySelector('#togglemenu')
const toggle = document.querySelector('.burger-checkbox')
toggle.addEventListener('click', () => {
    if(toggle.checked){
        toggleMenu.style.display = 'flex';
    } else {
        toggleMenu.style.display = '';
    }
})

console.log(toggle)
