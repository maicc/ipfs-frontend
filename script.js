const inputArchivo = document.getElementById('miarchivo');
const botonSubir = document.getElementById('btnSubir');
const divResultado = document.getElementById('resultado');

botonSubir.addEventListener('click', function () {
    subirArchivo();
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

    fetch('http://localhost:3000/api/ipfs/uploadCrustDirect', {
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