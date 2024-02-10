
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let divComment = document.getElementById("div-comment");
let identity = document.getElementById("identity");
let comment = document.getElementById("comment");
let errorMessage = document.getElementById("error-message");
let form = document.querySelector("form");


function deleteForm(){
firstName.value = "";
lastName.value = "";
message.value = "";
}

function validateForm() {  
let userIdentity1 = document.createTextNode(firstName.value);
let userIdentity2 = document.createTextNode(lastName.value);
let newMessage = document.createTextNode(message.value);
let space = document.createTextNode(" ");
identity.appendChild(userIdentity1);
identity.appendChild(space);
identity.appendChild(userIdentity2);
comment.appendChild(newMessage);
divComment.style.display="block";
deleteForm();
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(firstName.value == "" || lastName.value == "" || message.value == "")
    {
        errorMessage.style.display="block"; 
    }
    else if(!firstName.value.match(/^[a-z A-Z]+$/) || !lastName.value.match(/^[a-z A-Z]+$/)){
            alert("Le nom et prénom ne peuvent contenir que des lettres !");
            deleteForm();
    }
    else{
     validateForm();
     errorMessage.style.display="none";   
   }   
});
  