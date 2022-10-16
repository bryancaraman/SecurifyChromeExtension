const results = []

chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        if (request.fetch_scores) {
            let i = results.length
            results.push({
                completed: false,
            })
            sendResponse(i)
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
            console.log(data)
            results[i] = {
                data,
                completed: true,
            };
        } else if (request.get_fetch_results) {
            sendResponse(results[request.index].data)
        }
        return true;
    }
)
