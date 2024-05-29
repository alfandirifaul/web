window.onload = function() {
    var form = document.querySelector('form');
    var formStatus = document.getElementById("form-status-error");

    // name
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    // email
    var emailInput = document.getElementById("email");
    var emailChar = "@";
    var emailDot = ".";
    // telephone
    var telephone = document.getElementById("telephone");
    
    // message
    var message = document.getElementById("message");
    // checkbox
    var checkbox = document.querySelector("#checkbox");

    form.addEventListener("submit", function(event) {
        var errorMessage = "";
        var phoneLength = telephone.value.toString().length;

        if(firstName.value == "" || lastName.value == ""){
            errorMessage = "First name and Last name must be filled.";
        }
        else if(emailInput.value.indexOf(emailChar) === -1 || emailInput.value.indexOf(emailDot) === -1){
            errorMessage = "Email is not valid.";
        }
        else if(phoneLength < 10){
            errorMessage = "Phone number is not valid. Please insert the number at least 10 number"
        }
        else if(message.value == ""){
            errorMessage = "Message cannot be empty.";
        }
        else if(!checkbox.checked){
            errorMessage = "Please accept the privacy policy.";
        }

        if(errorMessage != ""){
            formStatus.innerHTML = errorMessage; 
            formStatus.style.display = "block"; 
            event.preventDefault(); 
        } 
        else{
            formStatus.innerHTML = ""; 
            formStatus.style.display = "none"; 
        }
    });
}



// alert page
var alertBox = document.getElementById("desc-alert");
alertBox.innerHTML = "";
var fromContact = document.getElementById("submit-contact");

fromContact.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '../page/alert.html';
})

function alertMessage(){
   if(window.location.pathname === '/contact.html'){
    alertBox.innerHTML = "Thank you for your message and feedback. "
   }
}