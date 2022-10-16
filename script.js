window.addEventListener ("load", myMain, false);
function myMain (_) {
    const listOfEmails = document.getElementsByClassName("bA4");
    const emailsArray = [];
    for (let email of listOfEmails) {
        emailsArray.push((email.firstChild).getAttribute('email'))
    }
    chrome.runtime.sendMessage({emailsArray, fetch_scores: true}, async function (response_raw) {
        console.log(response_raw)
        response_raw = response_raw();
        console.log(response_raw)
        const response = await response_raw.json();
        const listOfPictureEdges = document.getElementsByClassName("yX xY");
        const listOfRows = document.getElementsByClassName("zA")
        console.log(response);
        for (let i = 0; i < listOfPictureEdges.length; ++i) {
            var td = document.createElement('td')
            let src = chrome.runtime.getURL('Logo_Suspicious.png')
            if (response[i].whiteListed) {
                src = chrome.runtime.getURL('Green_Logo.png')
            } else if (response[i].numReports < 2) {
                src = chrome.runtime.getURL('Green_Logo.png')
            } else if (response[i].numReposts < 10) {
                src = chrome.runtime.getURL('Logo_Neutral.png');
            } else if (response[i].numReports < 50) {
                src = chrome.runtime.getURL('Logo_Slight.png');
            }
            var img = document.createElement("img")
            img.src = src
            img.style.marginRight = "15px";
            td.appendChild(img)
            document.body.appendChild(td)
            listOfRows[i].insertBefore(td, listOfPictureEdges[i])
        }
    });
}
