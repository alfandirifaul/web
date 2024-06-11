const form = document.getElementById('inquiry-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    let approved = true

    if (!validateFirstName(document.getElementById('first-name').value)) {
        document.getElementById('first-name-alert').innerText = "Please enter a valid first name (letters only).";
        approved = false
    } else {
        document.getElementById('first-name-alert').innerText = "";
    }

    if (!validateLastName(document.getElementById('last-name').value)) {
        document.getElementById('last-name-alert').innerText = "Please enter a valid last name (letters only).";
        approved = false
    } else {
        document.getElementById('last-name-alert').innerText = "";
    }

    if (!validateEmail(document.getElementById('email').value)) {
        document.getElementById('email-alert').innerText = "Please enter a valid email address.";
        approved = false
    } else {
        document.getElementById('email-alert').innerText = "";
    }

    if (!validatePhone(document.getElementById('phone').value)) {
        document.getElementById('phone-alert').innerText = "Please enter a valid phone number (numbers and spaces only).";
        approved = false
    } else {
        document.getElementById('phone-alert').innerText = "";
    }

    if (document.getElementById('inquiry').value === "") {
        document.getElementById('inquiry-alert').innerText = "Please select the nature of your inquiry.";
        approved = false
    } else {
        document.getElementById('inquiry-alert').innerText = "";
    }

    if (approved) {
        alert('Form submitted successfully!')
    }
});

function validateFirstName(name) {
    for (let i = 0; i < name.length; i++) {
        const charCode = name.charCodeAt(i);
        if (charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122) {
            return false;
        }
    }
    return true;
}

function validateLastName(name) {
    return validateFirstName(name);
}

function validateEmail(email) {
    let atIndex = email.indexOf('@');
    let dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 2 && dotIndex < email.length - 1;
}

function validatePhone(phone) {
    for (let i = 0; i < phone.length; i++) {
        const char = phone.charAt(i);
        if (!/\d|\s/.test(char)) {
            return false;
        }
    }
    return true;
}