document.addEventListener('DOMContentLoaded', () => {
    const preguntas = [
    {
        texto: "¿Dónde se originó la religión yoruba?",
        imagen: "../imagenes/pregunta1.png",
        opciones: [
        { texto: "Egipto", correcta: false },
        { texto: "Nigeria", correcta: true },
        { texto: "Sudáfrica", correcta: false },
        { texto: "Etiopia", correcta: false }
    ]
    },
    {
        texto: "¿Cómo se llama el Dios supremo de la religión yoruba?",
        imagen: "../imagenes/pregunta2.png",
        opciones: [
        { texto: "Shangó", correcta: false },
        { texto: "Olódùmarè", correcta: true },
        { texto: "Eleguá", correcta: false },
        { texto: "Obatalá", correcta: false }
    ]
    },
    {
        texto: "¿Qué son los orishas?",
        imagen: "../imagenes/pregunta3.png",
        opciones: [
        { texto: "Deidades o intermediarios entre los humanos y Dios", correcta: true },
        { texto: "Espíritus malignos", correcta: false },
        { texto: "Animales sagrados", correcta: false },
        { texto: "Guerreros humanos", correcta: false }
    ]
    },
    {
        texto: "¿Qué elemento de la naturaleza representa Yemayá?",
        imagen: "../imagenes/pregunta4.png",
        opciones: [
        { texto: "El fuego", correcta: false },
        { texto: "El viento", correcta: false },
        { texto: "El mar", correcta: true },
        { texto: "La montaña ", correcta: false }
    ]    
    },
    {
    texto: "¿Qué orisha está relacionado con el amor y los ríos?",
    imagen: "../Imagenes/pregunta5.png",
    opciones: [
    { texto: "Oshún", correcta: true },
    { texto: "Obatalá", correcta: false },
    { texto: "Shangó", correcta: false },
    { texto: "Orunmila", correcta: false }
]
},
{
    texto: "¿Qué significa el término “Ifá”?",
    imagen: "../Imagenes/pregunta6.png",
    opciones: [
    { texto: "Un tambor africano", correcta: false },
    { texto: "Un tipo de danza ritual", correcta: false },
    { texto: "Sistema de adivinación sagrado", correcta: true },
    { texto: "Un templo yoruba", correcta: false }
]
},
{
    texto: "¿Cuál es el símbolo de Obatalá y qué representa?",
    imagen: "../Imagenes/pregunta7.png",
    opciones: [
    { texto: "El rojo; poder", correcta: false },
    { texto: "El blanco; pureza y sabiduría", correcta: true },
    { texto: "El azul; justicia", correcta: false },
    { texto: "El verde; esperanza", correcta: false }
]
},
{
    texto: "¿Qué instrumento se usa comúnmente en los rituales yorubas?",
    imagen: "../Imagenes/pregunta8.png",
    opciones: [
    { texto: "Flauta", correcta: false },
    { texto: "Tambores batá", correcta: true },
    { texto: "Maracas", correcta: false },
    { texto: "Campanas", correcta: false }
]
},
{
    texto: "¿Qué orisha es conocido por abrir y cerrar caminos?",
    imagen: "../Imagenes/pregunta9.png",
    opciones: [
    { texto: "Yemayá", correcta: false },
    { texto: "Obatalá", correcta: false },
    { texto: "Shangó", correcta: false },
    { texto: "Eleguá ", correcta: true }
]
},
{
    texto: "¿Cómo se llaman los sacerdotes que interpretan los mensajes de los orishas?",
    imagen: "../Imagenes/pregunta10.png",
    opciones: [
    { texto: "Santeros", correcta: false },
    { texto: "Guerreros", correcta: false },
    { texto: "Babalawos", correcta: true },
    { texto: "Yorubaos", correcta: false }
]
},
{
    texto: "¿Qué valores promueve la religión yoruba?",
    imagen: "../Imagenes/pregunta11.png",
    opciones: [
    { texto: "Individualismo y competencia", correcta: false },
    { texto: "Respeto, armonía y equilibrio", correcta: true },
    { texto: "Poder y conquista", correcta: false },
    { texto: "Aislamiento espiritual", correcta: false }
]
},
{
    texto: "¿Qué relación existe entre los orishas y los elementos naturales?",
    imagen: "../Imagenes/pregunta12.png",
    opciones: [
    { texto: "Cada orisha representa una fuerza de la naturaleza", correcta: true },
    { texto: "Son dioses de los cielos únicamente", correcta: false },
    { texto: "No tienen relación con la naturaleza", correcta: false },
    { texto: "Representan animales mitológicos", correcta: false }
]
},
{
    texto: "¿Qué influencia tuvo la religión yoruba en América?",
    imagen: "../Imagenes/pregunta13.png",
    opciones: [
    { texto: "Ninguna", correcta: false },
    { texto: "Dio origen a religiones como la Santería y el Candomblé", correcta: true },
    { texto: "Fue reemplazada por el cristianismo", correcta: false },
    { texto: "Se perdió totalmente", correcta: false }
]
},
{
    texto: "¿Qué orisha representa la justicia y el trueno?",
    imagen: "../Imagenes/pregunta14.png",
    opciones: [
    { texto: "Obatalá", correcta: false },
    { texto: "Orunmila", correcta: false },
    { texto: "Shangó", correcta: true },
    { texto: "Yemayá", correcta: false }
]
},
{
    texto: "¿Qué tipo de ofrendas se suelen hacer a los orishas?",
    imagen: "../Imagenes/pregunta15.png",
    opciones: [
    { texto: "Solo flores", correcta: false },
    { texto: "Comidas, frutas, velas y sacrificios simbólicos", correcta: true },
    { texto: "Dinero únicamente", correcta: false },
    { texto: "Piedras y joyas", correcta: false }
]
},
{
    texto: "¿Cómo se transmite principalmente el conocimiento en la religión yoruba?",
    imagen: "../Imagenes/pregunta16.png",
    opciones: [
    { texto: "A través de libros sagrados", correcta: false },
    { texto: "A través de internet", correcta: false },
    { texto: "Por medio de escuelas religiosas", correcta: false },
    { texto: "De forma oral, mediante historias y cantos", correcta: true }
]
},
{
    texto: "¿Qué representa el “Ori” para los yorubas?",
    imagen: "../Imagenes/pregunta17.png",
    opciones: [
    { texto: "El cuerpo físico", correcta: false },
    { texto: "El dios del fuego", correcta: false },
    { texto: "El destino o la conciencia interior de cada persona", correcta: true },
    { texto: "El espíritu de los ancestros", correcta: false }
]
},
{
    texto: "¿Qué papel tienen los ancestros en la religión yoruba?",
    imagen: "../Imagenes/pregunta18.png",
    opciones: [
    { texto: "Son ignorados porque pertenecen al pasado", correcta: false },
    { texto: "Son honrados y considerados guías espirituales", correcta: true },
    { texto: "Son castigados por los orishas", correcta: false },
    { texto: "Solo se mencionan en los rituales de nacimiento", correcta: false }
]
},
{
    texto: "¿Qué color se asocia comúnmente con Oshún?",
    imagen: "../Imagenes/pregunta19.png",
    opciones: [
    { texto: "Amarillo o dorado", correcta: true },
    { texto: "Azul", correcta: false },
    { texto: "Blanco", correcta: false },
    { texto: "Verde", correcta: false }
]
},
{
    texto: "¿Qué enseña la religión yoruba sobre el comportamiento humano?",
    imagen: "../Imagenes/pregunta20.png",
    opciones: [
    { texto: "Que el destino no puede cambiarse", correcta: false },
    { texto: "Que las buenas acciones mantienen el equilibrio espiritual", correcta: true },
    { texto: "Que los orishas controlan totalmente la vida", correcta: false },
    { texto: "Que no hay consecuencias por las malas acciones", correcta: false }
]
}
];

let preguntaActual = 0;
let puntaje = 0;

const questionBox = document.getElementById('question-box');
const mensaje = document.getElementById('mensaje-respuesta');

function mostrarPregunta(index) {
    const pregunta = preguntas[index];
    mensaje.textContent = "";
    questionBox.innerHTML = `
    <h2>Pregunta ${index + 1 + ' de 20 '}</h2>
    <p class="question">${pregunta.texto}</p>
    <div class="image-container">
        <img src="${pregunta.imagen}" alt="Imagen pregunta" />
        </div>
        <div class="answers">
        ${pregunta.opciones.map((op, i) => `
            <button class="btn" data-correcta="${op.correcta}">${op.texto}</button>
        `).join('')}
    </div>
    `;

    // Agregar eventos
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
        const correcta = btn.getAttribute('data-correcta') === 'true';

        if (correcta) {
            mensaje.textContent = "¡Respuesta correcta!";
        mensaje.style.color = "#2ecc71";
        puntaje++;
        } else {
        mensaje.textContent = "Respuesta incorrecta.";
        mensaje.style.color = "#e74c3c";
        }

        // Desactivar botones
        document.querySelectorAll('.btn').forEach(b => {
        b.disabled = true;
        b.style.cursor = 'not-allowed';
        if (b.getAttribute('data-correcta') === 'true') {
            b.style.backgroundColor = '#2ecc71';
        } else {
            b.style.backgroundColor = '#e74c3c';
        }
        });

        // Ir a la siguiente pregunta
        setTimeout(() => {
        preguntaActual++;
        if (preguntaActual < preguntas.length) {
            mostrarPregunta(preguntaActual);
        } else {
            mostrarResultadoFinal();
        }
        }, 2000);
    });
    });
}

function mostrarResultadoFinal() {
    const mensajeFinal = obtenerMensajeFinal(puntaje);

    questionBox.innerHTML = `
    <h2>¡Test finalizado!</h2>
    <p>Obtuviste <strong>${puntaje}</strong> de <strong>${preguntas.length}</strong> respuestas correctas.</p>
    <p class="mensaje">${mensajeFinal}</p>
    <button id="reiniciar" class="btn reiniciar">Reiniciar Test</button>
    `;
    mensaje.textContent = "";

    document.getElementById('reiniciar').addEventListener('click', () => {
    preguntaActual = 0;
    puntaje = 0;
    mostrarPregunta(preguntaActual);
});
}


function obtenerMensajeFinal(puntaje) {
    if (puntaje === 20) {
    return "¡Excelente! Has respondido todo correctamente. ¡Entendiste todo sobre la religion yoruba! 🧠🎉";
    } else if (puntaje >= 15) {
    return "¡Muy bien hecho! Tienes un gran conocimiento. 💪";
} else if (puntaje >= 10) {
    return "Buen intento, vas por buen camino. Sigue aprendiendo. 📘";
} else if (puntaje >= 5) {
    return "Has acertado algunas, pero aún puedes mejorar. ¡No te rindas! 🚀";
} else {
    return "Parece que necesitas repasar un poco más. ¡Ánimo! 🌱";
}
}
  // Mostrar la primera pregunta
    mostrarPregunta(preguntaActual);
});