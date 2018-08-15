class Pregunta
{
    constructor(pregunta, respuestas = [], correcta)
    {
        this.pregunta = pregunta;
        this.respuestas = respuestas;
        this.correcta = correcta;
    }
}

let q0 = new Pregunta(`¿Quién fue el padre de la geometría?`, [`Pitagoras`, `Arquímides`, `Euclides`, `Apolonio`], 'r3');
let q1 = new Pregunta(`¿En dónde se dice que nació Euclides?`, [`Paris`, `Alejandría`, `Madrid`, `Grecia`], 'r2');
let q2 = new Pregunta(`¿Quién descubrió la “Geometría Cónica”?`, [`Apolonio de Perge`, `Arquímides`, `Pitagoras`, `Rene Descartes`], 'r1');
let q3 = new Pregunta(`¿Cuál de los siguientes <strong>NO</strong> pertenece a los tipos de cónicas?`, [`Parábola`, `Elipse`, `Icosaedro`, `Hipérbola`], 'r3');
let q4 = new Pregunta(`¿Cál de los siguientes <strong>NO</strong> es una variación isometrica?`, [`Rotación`, `Traslación`, `Cartesiana`, `Simetría o Reflexion`], 'r3');
let q5 = new Pregunta(`¿Cual es el sobrenombre de Apolonio?`, [`de Perje`, `Dios Geómetra`, `el Gran Geómetra`, `El Gran Matematico`], 'r3');

let preguntas = [q0, q1, q2, q3, q4, q5];

// console.log(pregunta[4]);

let pregunta = document.querySelector('#pregunta h2');
let r1 = document.querySelector('#r1');
let r2 = document.querySelector('#r2');
let r3 = document.querySelector('#r3');
let r4 = document.querySelector('#r4');

// pregunta.innerHTML = preguntas[5].pregunta;
// r1.innerHTML = preguntas[5].respuestas[0];
// r2.innerHTML = preguntas[5].respuestas[1];
// r3.innerHTML = preguntas[5].respuestas[2];
// r4.innerHTML = preguntas[5].respuestas[3];

function aleatorio(min, max)
{
    return Math.round(Math.random() * (max - min) + min);
}

function mostrarPregunta()
{
    numero = aleatorio(0, 5);
    console.log(numero);
    pregunta.innerHTML = preguntas[numero].pregunta;
    r1.innerHTML = preguntas[numero].respuestas[0];
    r2.innerHTML = preguntas[numero].respuestas[1];
    r3.innerHTML = preguntas[numero].respuestas[2];
    r4.innerHTML = preguntas[numero].respuestas[3];
}

mostrarPregunta();

