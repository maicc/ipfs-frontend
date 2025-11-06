const inputArchivo = document.getElementById('miarchivo');
const inputArchivo2 = document.getElementById('miarchivo2');
const botonSubir = document.getElementById('btnSubir');
const botonSubir2 = document.getElementById('btnSubir2');
const divResultado = document.getElementById('resultado');

botonSubir.addEventListener('click', function () {
    subirArchivo();
})

botonSubir2.addEventListener('click', function () {
    subirArchivoKubo();
})

function subirArchivo() {
    const archivo = inputArchivo.files[0];

    if (!archivo) {
        divResultado.innerHTML = 'Por favor selecciona un archivo';
        return;
    }

    divResultado.innerHTML = 'Subiendo archivo...';

    const formData = new FormData();
    formData.append('file', archivo);

    fetch('https://api.hachikuji.com/api/ipfs/uploadCrustDirect', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(data => {
            divResultado.innerHTML = `
    Archivo subido exitosamente! <br>
    CID: ${data.data.cid} <br>
    URL: <a href="${data.data.url}">${data.data.url}<a>
    `;
            console.log('Respuesta de la api:', data);
        })
        .catch(error => {
            divResultado.innerHTML = 'Error al subir el archivo';
            console.error('Error:', error);
        });
}

function subirArchivoKubo() {
    const archivo = inputArchivo2.files[0];

    if (!archivo) {
        divResultado.innerHTML = 'Por favor selecciona un archivo';
        return;
    }

    divResultado.innerHTML = 'Subiendo archivo...';

    const formData = new FormData();
    formData.append('file', archivo);

    fetch('https://api.hachikuji.com/api/ipfs/uploadKubo', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(data => {
            divResultado.innerHTML = `
    Archivo subido exitosamente! <br>
    CID: ${data.data.cid} <br>
    URL: <a href="${data.data.url}">${data.data.url}<a>
    `;
            console.log('Respuesta de la api:', data);
        })
        .catch(error => {
            divResultado.innerHTML = 'Error al subir el archivo';
            console.error('Error:', error);
        });
}