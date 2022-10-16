let phoneNumber = ""
let reportId = ""

document.getElementById("back_button").addEventListener("click", (evt) => {
    window.location.href = "ReportPage.html"
})

document.getElementById("reportButton").addEventListener("click", async (evt) => {
    let code = "";
    for (let i = 1; i <= 4; i++) {
        code += document.getElementById(`Code${i}`).value;
    }
    const response = await fetch("http://localhost:3000/enter_code", {
        body: JSON.stringify({
            phoneNumber,
            reportId,
            code,
        }),
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
    })
    const data = await response.json();
    console.log(data);

    if (data.success) {
        window.location.href = "index.html";
    }
})

chrome.storage.local.get(['reportId'], async (input) => {
    const response = await fetch("http://localhost:3000/generate_code", {
        body: JSON.stringify({
            reportId: input.reportId,
        }),
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    phoneNumber = data.phoneNumber;
    reportId = input.reportId;
})
