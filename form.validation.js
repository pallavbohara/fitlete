function FormValidationCheck() {
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
function show_hide_password_1(evt) {


    var is_show_password = evt.currentTarget.className == "fa fa-eye icon";
    if (is_show_password) {
      document.getElementById("password").setAttribute('type', 'text');
      evt.currentTarget.className = "fa fa-eye-slash icon";
    }
    else {
      document.getElementById("password").setAttribute('type', 'password');
      evt.currentTarget.className = "fa fa-eye icon";
    }

  }
  function show_hide_password_2(evt) {

    // document.getElementById("password").rep
    var is_show_password = evt.currentTarget.className == "fa fa-eye icon";
    if (is_show_password) {
      document.getElementById("cpassword").setAttribute('type', 'text');
      evt.currentTarget.className = "fa fa-eye-slash icon";
    }
    else {
      document.getElementById("cpassword").setAttribute('type', 'password');
      evt.currentTarget.className = "fa fa-eye icon";
    }

  }
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("Active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "Active";
  }