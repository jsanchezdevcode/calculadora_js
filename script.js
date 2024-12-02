function agregar(valor){
    document.getElementById('pantalla').value += valor;
}


function borra(){
    document.getElementById('pantalla').value = '';
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}