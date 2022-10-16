const results = []

let reportId = 0;

chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        console.log("RECEIVED REQUEST")
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
            results[i] = {
                data,
                completed: true,
            };
            console.log(data);
        } else if (request.get_fetch_results) {
            sendResponse(results[request.index].data)
        } else if (request.store_report_id) {
            reportId = request.reportId;
            sendResponse("Completed");
            console.log("DOne");
        } else if (request.get_report_id) {
            sendResponse(reportId);
            console.log(reportId);
        }
    }
)
