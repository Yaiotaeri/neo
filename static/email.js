const myEmail = 'jvmendesbcard5566@gmail.com';
const serviceID = 'service_i9g2f8p';
const templateID = 'template_39gby6d';
const keyEmailJs = 'inaaNxb_9NJ5qaSoe';
const popUp = document.querySelector('.popUp');


const inputTelefone = document.getElementById('telForm');

inputTelefone.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value.length >= 2) {
        value = `(${value.slice(0, 2)})${value.slice(2)}`;
    }
    if (value.length > 9) {
        value = `${value.slice(0, 9)}-${value.slice(9, 13)}`;
    }

    e.target.value = value;
});

function emailSend(serviceID, templateID, templateParams) {
    emailjs.init({
        publicKey: keyEmailJs,
    });

    emailjs.send(serviceID, templateID, templateParams).then(
        (response) => {
            console.log('sucess', response.status, response.text);
            popUp.style.display = 'flex'; 
            popUp.style.background = 'rgb(88, 235, 112)';
            popUp.style.color = 'white';
            popUp.innerHTML = `<h1>E-mail Enviado! </h1>`;
        },
        (error) => {
            console.log('falhou', error);
            popUp.innerHTML = `<h1>erro ao enviar E-mail!</h1>`;
        },

    );

};

const sendEmail = document.getElementById('sendEmail');

sendEmail.addEventListener('submit', (e) => {
    e.preventDefault();

    const mensagemForm = document.getElementById('mensagemForm').value;
    const nameForm = document.getElementById('nameForm').value;
    const emailForm = document.getElementById('emailForm').value;
    const telForm = document.getElementById('telForm').value;


    let templateParams = {
        name: nameForm,
        message: mensagemForm,
        email: emailForm,
        tel: telForm,
    };

    emailSend(serviceID, templateID, templateParams);
    sendEmail.reset();

    setInterval(()=>{
        popUp.classList.add('offPopUp');
    }, 3000);

    setTimeout(()=>{
        popUp.classList.remove('offPopUp');

    },3500);
});