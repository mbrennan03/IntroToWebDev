function validateItems() {
    var name = document.forms["submitRequest"]["name"].value;
    var email = document.forms["submitRequest"]["email"].value;
    var phone = document.forms["submitRequest"]["phone"].value;

    if (name == "") {
        alert("Please enter your name.");
        document.forms["submitRequest"]["name"].focus();
        return false;
    }
    if (email == "") {
        alert("Please enter your email.");
        document.forms["submitRequest"]["email"].focus();
        return false;
    }
    if (phone.length != 10 || isNaN(phone)) {
        alert("Please enter your 10-digit phone number with no other characters.");
        document.forms["submitRequest"]["phone"].focus();
        return false;
    }
    if (!document.getElementById("choice1").checked && !document.getElementById("choice2").checked) {
        alert("Please select if you have visited the restaurant before.")
        return false;
    }
    if (!document.getElementById("monday").checked && !document.getElementById("tuesday").checked &&
        !document.getElementById("wednesday").checked && !document.getElementById("thursday").checked &&
        !document.getElementById("friday").checked) {
        alert("Please select at least one day we can contact you.")
        return false;
    }
    // No need to validate the reason for inquiry since it has a default option

    alert("Information submitted successfully.")
    return true;
}