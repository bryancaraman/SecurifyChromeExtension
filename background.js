chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        if (request.fetch_scores) {
            console.log(request.emailsArray)
            sendResponse(() => fetch("http://localhost:3000/multiple_email_info", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emails: request.emailsArray,
                }),
            }))
        }
        return true;
    }
)
