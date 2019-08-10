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

    e = document.getElementById("cabTimes");
    var cabTimes = e.options[e.selectedIndex].value;

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
    var gymBenefit,cabBenefit,billBenefit,fuelBenefit,
    shoppingBenefit,airBenefit,
    busBenefit,onlineBenefit,
    movieBenefit,hotelBenefit,
    electronicBenefit,groceryBenefit,equipmentBenefit,insuranceBenefit;
    if (levelValue == "level1") {
      
      document.getElementById("gymBenefit").innerHTML=gymBenefit = gymFitnessExpense * .08;
      document.getElementById("cabBenefit").innerHTML=cabBenefit =((cabTimes<5)?(cabTimes*.15*300):4*.15*300);
      document.getElementById("billBenefit").innerHTML=billBenefit = Math.floor(billExpense * .06);
      document.getElementById("fuelBenefit").innerHTML=fuelBenefit = Math.floor(((fuelExpense<6001)?(fuelExpense*.02):.02*6000));
      document.getElementById("shoppingBenefit").innerHTML=shoppingBenefit = Math.floor(shoppingExpense * .17);
      document.getElementById("airBenefit").innerHTML=airBenefit =Math.floor(((airTimes<4)?(airTimes*.1*6000):3*.1*6000));
      document.getElementById("busBenefit").innerHTML=busBenefit = Math.floor(((busTimes<5)?(busTimes*.1*1500):4*.1*1500));
      document.getElementById("onlineBenefit").innerHTML=onlineBenefit = Math.floor(onlineExpense*.08);
      document.getElementById("movieBenefit").innerHTML=movieBenefit = Math.floor(((movieTimes<7)?(movieTimes*.2*250):6*.2*250));
      document.getElementById("hotelBenefit").innerHTML=hotelBenefit = Math.floor(((hotelTimes<8)?(hotelTimes*.1*3500):7*.1*3500));
      document.getElementById("electronicBenefit").innerHTML=electronicBenefit = Math.floor((((electronicExpense*.1)<1000)?(electronicExpense*.1):1000));
      document.getElementById("groceryBenefit").innerHTML=groceryBenefit =   Math.floor(groceryExpense*.08);
      document.getElementById("equipmentBenefit").innerHTML=equipmentBenefit = Math.floor((((equipmentExpense*.1)<300)?(equipmentExpense*.1):300));
      document.getElementById("insuranceBenefit").innerHTML=insuranceBenefit = Math.floor(insuranceExpense*.06);
    }
    if (levelValue == "level2") {
      
      document.getElementById("gymBenefit").innerHTML=gymBenefit = gymFitnessExpense * .08;
      document.getElementById("cabBenefit").innerHTML=cabBenefit =((cabTimes<5)?(cabTimes*.15*300):4*.15*300);
      document.getElementById("billBenefit").innerHTML=billBenefit = Math.floor(billExpense * .06);
      document.getElementById("fuelBenefit").innerHTML=fuelBenefit = Math.floor(((fuelExpense<6001)?(fuelExpense*.02):.02*6000));
      document.getElementById("shoppingBenefit").innerHTML=shoppingBenefit = Math.floor(shoppingExpense * .17);
      document.getElementById("airBenefit").innerHTML=airBenefit =Math.floor(((airTimes<4)?(airTimes*.1*6000):3*.1*6000));
      document.getElementById("busBenefit").innerHTML=busBenefit = Math.floor(((busTimes<5)?(busTimes*.1*1500):4*.1*1500));
      document.getElementById("onlineBenefit").innerHTML=onlineBenefit = Math.floor(onlineExpense*.08);
      document.getElementById("movieBenefit").innerHTML=movieBenefit = Math.floor(((movieTimes<7)?(movieTimes*.2*250):6*.2*250));
      document.getElementById("hotelBenefit").innerHTML=hotelBenefit = Math.floor(((hotelTimes<8)?(hotelTimes*.1*3500):7*.1*3500));
      document.getElementById("electronicBenefit").innerHTML=electronicBenefit = Math.floor((((electronicExpense*.1)<1000)?(electronicExpense*.1):1000));
      document.getElementById("groceryBenefit").innerHTML=groceryBenefit =   Math.floor(groceryExpense*.08);
      document.getElementById("equipmentBenefit").innerHTML=equipmentBenefit = Math.floor((((equipmentExpense*.1)<300)?(equipmentExpense*.1):300));
      document.getElementById("insuranceBenefit").innerHTML=insuranceBenefit = Math.floor(insuranceExpense*.06);
    }
    document.getElementById("sumBenefit").innerHTML = "<b>"+(gymBenefit+cabBenefit+billBenefit+fuelBenefit+shoppingBenefit
      +airBenefit+busBenefit+onlineBenefit+movieBenefit+hotelBenefit+electronicBenefit
      +groceryBenefit+equipmentBenefit+insuranceBenefit)+"</b>";
    
  }
  catch (err) {
    document.getElementById("errorMessage").innerHTML = err.message;
    document.getElementById("errorMessage").style.display = "inline";
  }
}