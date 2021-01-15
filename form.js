// Récupère les id des entrées

const nameId = document.getElementById("name");
const emailId = document.getElementById("email");
const titleId = document.getElementById("title");
const messageId = document.getElementById("message");

const submit = document.getElementById("submit");

// Regex

const regexNoEmpty = /./;
const regexEmail = /.+@.+\..+/;

let isOk = {
    
}

// Ecoute d'évenement du bouton Submit

submit.addEventListener('click', function(e){
    e.preventDefault();
    const nameValue = nameId.value;
    const emailValue = emailId.value;
    const titleValue = titleId.value;
    const messageValue = messageId.value;

    verfiy(nameValue, regexNoEmpty, "Votre nom n'est pas valide", "name");
    verfiy(emailValue, regexEmail, "Votre email n'est pas valide", "email");
    verfiy(titleValue, regexNoEmpty, "Votre titre n'est pas valide", "title");
    verfiy(messageValue, regexNoEmpty, "Votre message n'est pas valide", "message");

    
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
            message :nameValue + ": " + titleValue + "  " + messageValue
        }
        console.log(form);

        fetch("https://formspree.io/f/mqkgwvbn",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => console.log(response))
    }
})

// Fonction verification des entrées

function verfiy(value, regex, errorMessage){
    if(value === "" || !regex.test(value)){
        console.log(errorMessage);
    } else {
        console.log("Votre entrée est valide !");
    }
}