let lista = [];

function agregarAlaLista(){
    let nombre = document.getElementById('friend-name').value.trim();
    lista.push(nombre);
    console.log(lista);
    document.getElementById('friend-name').value=('')
}



function sortearNombre(){
    let numeroRandomSorteado = Math.floor(Math.random() * lista.length) + 1;
    numeroRandomSorteado --;
    let amigoSecreto = lista[numeroRandomSorteado];
    console.log(amigoSecreto);
    console.log(lista);
    document.getElementById('container-resultados').removeAttribute('hidden');
}