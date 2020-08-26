function clearErrors() {
    for (var loopCounter = 0; 
        loopCounter < document.forms["submitRequest"].elements.length;
        loopCounter++) {

        if (document.forms["submitRequest"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1) {

                document.forms["submitRequest"].elements[loopCounter]
                    .parentElement.className = "form-group";
            }
    }
}

function validateItems() {
    clearErrors();
    var name = document.forms["submitRequest"]["name"].value;
    var email = document.forms["submitRequest"]["email"].value;
    var phone = document.forms["submitRequest"]["phone"].value;

    if (name == "") {
        alert("Please enter your name.");
        document.forms["submitRequest"]["name"].parentElement.className = "form-group has-error";
        document.forms["submitRequest"]["name"].focus();
        return false;
    }
    if (email == "") {
        alert("Please enter your email.");
        document.forms["submitRequest"]["email"].parentElement.className = "form-group has-error";
        document.forms["submitRequest"]["email"].focus();
        return false;
    }
    if (phone == "") {
        alert("Please enter your phone number.");
        document.forms["submitRequest"]["phone"].parentElement.className = "form-group has-error";
        document.forms["submitRequest"]["phone"].focus();
        return false;
    }

    alert("Information submitted successfully.")
    return true;
}