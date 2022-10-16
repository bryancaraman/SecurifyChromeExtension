window.addEventListener ("load", myMain, false);
function myMain (_) {
    const listOfEmails = document.getElementsByClassName("bA4");
    const emailsArray = [];
    for (let email of listOfEmails) {
        emailsArray.push((email.firstChild).getAttribute('email'))
    }
    chrome.runtime.sendMessage({emailsArray, fetch_scores: true}, function (response) {
    });
}
