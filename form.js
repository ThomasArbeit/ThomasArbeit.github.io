// Récupère les id des entrées

const nameId = document.getElementById("name");
const emailId = document.getElementById("email");
const titleId = document.getElementById("title");
const messageId = document.getElementById("message");

const submit = document.getElementById("submit");

// Regex

const regexNoEmpty = /./;
const regexEmail = /.+@.+\..+/;

// Ecoute d'évenement du bouton Submit

submit.addEventListener('click', function(e){
    e.preventDefault();
    const nameValue = nameId.value;
    const emailValue = emailId.value;
    const titleValue = titleId.value;
    const messageValue = messageId.value;

    verfiy(nameId, nameValue, regexNoEmpty, "Votre nom n'est pas valide", "name");
    verfiy(emailId, emailValue, regexEmail, "Votre email n'est pas valide", "email");
    verfiy(titleId, titleValue, regexNoEmpty, "Votre titre n'est pas valide", "title");
    verfiy(messageId, messageValue, regexNoEmpty, "Votre message n'est pas valide", "message");

    
    if(
        !regexEmail.test(emailValue)
        || !regexNoEmpty.test(nameValue)
        || !regexNoEmpty.test(titleValue)
        || !regexNoEmpty.test(messageValue)
    ){
        console.log("Un problème est survenu");
        
    } else {
        let form = {
            email : emailValue,
            message :nameValue + ": " + titleValue + ":  " + messageValue
        }
        console.log(form);

        fetch("https://formspree.io/f/mqkgwvbn",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => {
            console.log(response);
            nameId.value = "";
            emailId.value = "";
            titleId.value = "";
            messageId.value = "";

            window.alert(`Merci ${nameId.value} pour votre message ! J'y répondrais au plus vite.`);
            let inputs = document.querySelectorAll(".contact__input");
            inputs.forEach(input => {
                input.classList.remove("contact__input--success");
            })
        })
    }
})

// Fonction verification des entrées

function verfiy(inputId, value, regex, errorMessage){
    if(value === "" || !regex.test(value)){
        console.log(errorMessage);
        inputId.classList.add("contact__input--error");
        inputId.nextElementSibling.textContent = errorMessage;
    } else {
        console.log("Votre entrée est valide !");
        if(inputId.classList.contains("contact__input--error")){
            inputId.classList.remove("contact__input--error");
            inputId.nextElementSibling.textContent = "";
        }
        inputId.classList.add("contact__input--success");
    }
}