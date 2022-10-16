document.getElementById("start_report_button").addEventListener("click", (evt) => {
    window.location.href = "ReportPage.html";
})

document.getElementById("searchButton").addEventListener("click", (evt) => {
    const email = document.getElementById("searchBox").value;
    chrome.storage.local.set({"email": email}, () => {
        window.location.href = "SearchResultPage.html";
    })
})
