// 62
window.addEventListener ("load", myMain, false);
async function myMain (_) {
    const listOfEmails = document.getElementsByClassName("bA4");
    const tempEmailsArray = [];
    for (let email of listOfEmails) {
        tempEmailsArray.push((email.firstChild).getAttribute('email'))
    }
    const emailsArray = [];
    for (let i = 0; i < tempEmailsArray.length; i += 2) {
        emailsArray.push(tempEmailsArray[i]);
    }
    
    
    let index = 0;
    chrome.runtime.sendMessage({emailsArray, fetch_scores: true}, function (response) {
        index = response;
    })

    while (true) {
        chrome.runtime.sendMessage({index, get_fetch_results: true}, async function (response) {
            const listOfPictureEdges = document.getElementsByClassName("yX xY");
            const listOfRows = document.getElementsByClassName("zA")
            for (let i = 0; i < listOfPictureEdges.length; ++i) {
                if (listOfRows[i].getElementsByClassName(`securify`).length > 0) {
                    continue;
                }
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
                var div = document.createElement("div")
                var img = document.createElement("img")
                img.src = src
                img.style.marginRight = "15px";
                img.style.marginTop = "3px";
                div.appendChild(img)
                td.appendChild(div)
                td.setAttribute('class', `securify`)
                listOfRows[i].insertBefore(td, listOfPictureEdges[i])
            }
        });
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
}


