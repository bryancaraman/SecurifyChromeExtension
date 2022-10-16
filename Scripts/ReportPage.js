document.getElementById("back_button").addEventListener("click", (evt) => {
    window.location.href = "index.html";
})

document.getElementById("ContinueButton").addEventListener("click", async (evt) => {
    // const email = 
    const email = document.getElementById("email").value
    const description = document.getElementById("description").value
    const phone = "+1" + document.getElementById("phone_number_value").value

    const response = await fetch("http://localhost:3000/start_report_process", {
        body: JSON.stringify({
            email,
            description,
            phoneNumber: phone,
        }),
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    const reportId = data.reportId;
    console.log("Report ID:", reportId);
    chrome.storage.local.set({"reportId": reportId}, () => {
        if (!data.verifiedPhone) {
            window.location.href = "Verification.html";
        } else {
            window.location.href = "index.html";
        }
    })
})
