chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        sendResponse("Hello World")
        if (request.fetch_scores) {
            console.log(request.emailsArray)
            const response = await fetch("http://localhost:3000/multiple_email_info", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emails: request.emailsArray,
                }),
            })
            const data = await response.json();
            sendResponse(data);
        }
    }
)
