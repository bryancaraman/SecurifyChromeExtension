document.getElementById("reportText").addEventListener("click", (evt) => {
    window.location.href = "ReportPage.html";
})

chrome.storage.local.get(['email'], async (input) => {
    document.getElementById("PTS").innerText = `Showing report for "${input.email}"`;
})
