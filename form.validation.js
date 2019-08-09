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

function ReCalculateForAllFields() {
  try {
    var e = document.getElementById("levels");
    var levelValue = e.options[e.selectedIndex].value;

    e = document.getElementById("gymFitnessExpense");
    var gymFitnessExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("cabExpense");
    var cabExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("billExpense");
    var billExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("fuelExpense");
    var fuelExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("shoppingExpense");
    var shoppingExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("airTimes");
    var airTimes = e.options[e.selectedIndex].value;

    e = document.getElementById("busTimes");
    var busTimes = e.options[e.selectedIndex].value;

    e = document.getElementById("onlineExpense");
    var onlineExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("movieTimes");
    var movieTimes = e.options[e.selectedIndex].value;

    e = document.getElementById("hotelTimes");
    var hotelTimes = e.options[e.selectedIndex].value;

    e = document.getElementById("electronicExpense");
    var electronicExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("groceryExpense");
    var groceryExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("equipmentExpense");
    var equipmentExpense = e.options[e.selectedIndex].value;

    e = document.getElementById("insuranceExpense");
    var insuranceExpense = e.options[e.selectedIndex].value;

    if (levelValue == "level1") {
      document.getElementById("gymBenefit").innerHTML = gymFitnessExpense * .08;
      document.getElementById("cabBenefit").innerHTML = cabExpense * .08;
      document.getElementById("billBenefit").innerHTML = billExpense * .06;
      document.getElementById("fuelBenefit").innerHTML = fuelExpense * .08;
      document.getElementById("shoppingBenefit").innerHTML = shoppingExpense * .17;
      document.getElementById("airBenefit").innerHTML = airTimes*.08;
      document.getElementById("busBenefit").innerHTML = busTimes*.08;
      document.getElementById("onlineBenefit").innerHTML = onlineExpense*.08;
      document.getElementById("movieBenefit").innerHTML = movieTimes*.08;
      document.getElementById("hotelBenefit").innerHTML = hotelTimes*.08;
      document.getElementById("electronicBenefit").innerHTML = (((electronicExpense*.1)<1000)?(electronicExpense*.1):1000);
      document.getElementById("groceryBenefit").innerHTML =   groceryExpense*.08;
      document.getElementById("equipmentBenefit").innerHTML = (((equipmentExpense*.1)<300)?(equipmentExpense*.1):300);
      document.getElementById("insuranceBenefit").innerHTML = insuranceExpense*.06;
    }
  }
  catch (err) {
    document.getElementById("errorMessage").innerHTML = err.message;
    document.getElementById("errorMessage").style.display = "inline";
  }
}