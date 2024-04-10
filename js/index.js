function eventoClick(){
    //alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    alert('Evento de click duplo');
}

function viraVermelho(){
    let div = document.getElementById('teste');
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById('teste');
    div.style.backgroundColor = "blue";
}

function mudou(){
    console.log("mudou");
}

function teclaPressionada(){
    console.log('Tecla pressionada');
}
