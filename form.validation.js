function GEEKFORGEEKS() {
    var fname = document.forms["RegForm"]["FirstName"];
    var lname = document.forms["RegForm"]["LastName"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];
    var password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["CPassword"];


    if (fname.value == "") {
        window.alert("Please enter your first name.");
        fname.focus();
        return false;
    }
    if (lname.value == "") {
        window.alert("Please enter your last name.");
        lname.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }

    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }

    if (cpassword.value == "") {
        window.alert("Please re-enter your password");
        cpassword.focus();
        return false;
    }
    if (cpassword.value != password.value) {
        window.alert("Passwords do-not match.");
        password.focus();
        return false;
    }
    return true;
}