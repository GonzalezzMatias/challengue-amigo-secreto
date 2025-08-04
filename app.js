let lista = [];

function agregarAlaLista(){
    let nombre = document.getElementById('friend-name').value.trim();
    if (nombre == ''){
        const errorCartel = document.getElementById('errorCartel');
        errorCartel.hidden = false;       
    }else{
        lista.push(nombre);
        console.log(lista);
        document.getElementById('friend-name').value=('')
    }

}



function sortearNombre(){
    let numeroRandomSorteado = Math.floor(Math.random() * lista.length) + 1;
    numeroRandomSorteado --;
    let amigoSecreto = lista[numeroRandomSorteado];
    console.log(amigoSecreto);
    console.log(lista);
    document.getElementById('container-resultados').removeAttribute('hidden');
    document.getElementById('resultado-nombre').textContent = amigoSecreto;
}


function intentarNuevamente(){
    const errorCartel = document.getElementById('errorCartel');
    errorCartel.hidden = true;
}

function jugarNuevamente(){
    lista = [];
    console.log(lista);
    document.getElementById('container-resultados').setAttribute('hidden', '');
}