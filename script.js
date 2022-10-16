window.addEventListener ("load", myMain, false);
function myMain (evt) {
    const listOfEmails = document.getElementsByClassName("bA4");
    const emailsArray = [];
    for (let email of listOfEmails) {
        emailsArray.push((email.firstChild).getAttribute('email'))
    }
    for (let i = 0; i < emailsArray.length; ++i) {
        console.log(emailsArray[i])
    }
}
