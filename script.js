window.addEventListener ("load", myMain, false);
function myMain (_) {
    const listOfEmails = document.getElementsByClassName("bA4");
    const emailsArray = [];
    for (let email of listOfEmails) {
        emailsArray.push((email.firstChild).getAttribute('email'))
    }
    chrome.runtime.sendMessage({emailsArray, fetch_scores: true}, function (response) {
        const listOfPictureEdges = document.getElementsByClassName("yX xY");
        const listOfRows = document.getElementsByClassName("zA")
        for (let i = 0; i < listOfPictureEdges.length; ++i) {
            var td = document.createElement('td')
            let src = chrome.runtime.getURL('Green_Logo.png')
            var img = document.createElement("img")
            img.src = src
            img.style.marginRight = "15px";
            td.appendChild(img)
            document.body.appendChild(td)
            listOfRows[i].insertBefore(td, listOfPictureEdges[i])
        }
    });
}
