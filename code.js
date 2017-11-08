function TheLogin() {

    var password = 'genericpasscode';

    if (this.document.login.pass.value == password) {
        top.location.href="sites.html";
    }
    else {
        window.alert("Incorrect password, please try again.");
    }
}