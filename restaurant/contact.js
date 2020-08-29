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

    alert("Information submitted successfully.")
    return true;
}