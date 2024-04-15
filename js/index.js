// Exemplos de datas e horários em JavaScript:

// Data com todos os dados:

let data = new Date();
console.log(data);

// Ano:

let ano = data.getFullYear();
console.log(ano);

// Mês por escrito:

let mes = data.getMonth();

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

// Dia do mês:

let diaMes = data.getDate();
console.log(diaMes)

// Dia da semana por escrito:

let diaSemana = data.getDay();

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito)

// Hora:

let hora = data.getHours();
console.log(hora);

// Minutos:

let minutos = data.getMinutes();
console.log(minutos);

// Segundos:

let segundos = data.getSeconds();
console.log(segundos);

// Milisegundos:

let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// Data no padrão brasileiro:

let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR);

// Comparar datas:

var hoje = new Date();
var vencimento = new Date(2022, 0, 8);

if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("Ainda não venceu, tudo certo!");
}

// Diferença entre datas:

var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");