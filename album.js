function openModal(persona) {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modalText");

    const mensajes = {
        papa: "Flaquita: quiero que sepas que veo cada sacrificio que haces y cada pequeño gesto de amor que entregas a diario. Eres el corazon de nuestra familia y la mujer de mis sueños. Si pudiera darte un regalo en esta vida, seria la posibilidad de mirarte a través de mis ojos, solo entonces descubririas cuanto te amo y lo verdaderamente irremplazable que eres. Siempre y para toda la vida, sere tuyo. Que Dios te permita cumplir mas años a mi lado, FELIZ CUMPLEAÑOS FLAQUITA con amor tu esposo.",
        hermana: "Mami te quiero decir que eres una persona súper importante y especial en mi vida, eres ese rayito de sol que me hace sentir bien con alguna palabra o acción, eres una mujer muy linda y fuerte que cada día me enseña muchas cosas nuevas y sobretodo me demuestra lo capaz que eres de lograr lo que te propones…por eso y muchas cosas más te admiro como no tienes una idea, discúlpame si aveces tenemos malentendidos pero lo importante de todo eso es que ambas sabemos cómo arreglarlo…espero tenerte mucho tiempo más en mi vida, que me veas cumplir las metas de las que algún día te conté y sobretodo que sepas que en mis planes a futuro tú y mi papi siempre están incluidos, te amo demasiado, nunca lo olvides. Gracias por todo lo que me has brindado y espero algún día recompensarte todo lo que has echo por mi… FELIZ CUMPLE MAMI 💫💘",
        tu: "Muchisimas felicidades mami!!💖 De verdad espero poder compartir muchos años más contigo, sabes que siempre voy a estar a tu lado sin importar lo que pase. Yo siempre voy a quererte de una forma única y vas a tener mi apoyo incondicional para siempre. No olvides que te amo bastante y espero este detallito te guste, todo lo hago con mucho amor para ti...FELIZ CUMPLEAÑOS MAMITA🎈🥳",
        novia: "FELIZ CUMPLEAÑOS 🎂🎈🤍🥳 le deseo mucha salud, paz y bienestar en este nuevo añito que cumple 🌼, deseo que este nuevo año esté lleno de  tranquilidad y momentos felices junto a las personas que la quieren mucho 🫶🏻. Gracias por su cariño y por su trato tan bonito la aprecio mucho y le agradezco de corazón todo lo que hace. Quiero que sepa que cuenta conmigo siempre para lo que necesite 🙇🏻‍♀️💖.  La quiero mucho 🫢 Abachoo!!! 🫂"
    };

    text.textContent = mensajes[persona];
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


function goFinal() {
    window.location.href = "final.html";
}
