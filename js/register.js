function submitForm() {
            
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let error_email = document.getElementById("error_email");
    let error_password = document.getElementById("error_password");


    
    function ValidateEmail() {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            // alert("Valid email address!");
            // email.focus();
            return true;

        } else {
            alert("Invalid email address!");
            // email.focus();
            return false;
        }

    }


    if(email == '') {
        error_email.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_email.style.display = 'none';
        }
    } 
    if(password == '') {
        error_password.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_password.style.display = 'none';
        }
    }
    
    if(password != '' && email != '' && !ValidateEmail(email))  {
        location.replace(login.html)
    }
    




    
}
