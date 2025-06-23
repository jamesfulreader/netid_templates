document.addEventListener("DOMContentLoaded", () => {
    const netIdInput = document.getElementById("netID");
    const previewNetIdSubjectSpan =
        document.getElementById("previewNetIdSubject");
    const previewNetIdBodyPre = document.getElementById("previewNetIdBody");

    // Ensure elements exist before trying to access properties or add listeners
    if (
        !netIdInput ||
        !previewNetIdSubjectSpan ||
        !previewNetIdBodyPre
    ) {
        console.error("One or more elements for NetID Renewal not found.");
        return;
    }

    const netIdPlaceholders =
        previewNetIdBodyPre.querySelectorAll(".placeholder-netid");

    function updateNetIdPreview() {
        const netIdValue = netIdInput.value || "EXAMPLE"; // Keep placeholder if empty
        previewNetIdSubjectSpan.textContent = netIdValue;
        netIdPlaceholders.forEach((span) => (span.textContent = netIdValue));
    }

    netIdInput.addEventListener("input", updateNetIdPreview);
    updateNetIdPreview(); // Initial call

    const copySubjectBtn = document.getElementById("copyNetIdSubjectBtn");
    const copyBodyBtn = document.getElementById("copyNetIdBodyBtn");

    if (copySubjectBtn) {
        copySubjectBtn.addEventListener("click", function () {
            const netIdValue = netIdInput.value;
            if (!netIdValue) {
                alert("Please enter a NetID first to generate the subject.");
                return;
            }
            const subject = "Notice that NetID " + netIdValue + " has been renewed";
            navigator.clipboard
                .writeText(subject)
                .then(() => {
                    alert("Subject copied to clipboard!");
                })
                .catch((err) => {
                    console.error("Failed to copy subject: ", err);
                    alert(
                        "Failed to copy subject. Check console (Ctrl+Shift+J) for details."
                    );
                });
        });
    }

    if (copyBodyBtn) {
        copyBodyBtn.addEventListener("click", function () {
            const netIdValue = netIdInput.value;
            if (!netIdValue) {
                alert("Please enter a NetID first to generate the email body.");
                return;
            }
            const body =
                "Hello,\n\nNetID " +
                netIdValue +
                " has been renewed for three more years.\n\nKind regards,\nUNM IT Applications";
            navigator.clipboard
                .writeText(body)
                .then(() => {
                    alert("Email body copied to clipboard!");
                })
                .catch((err) => {
                    console.error("Failed to copy email body: ", err);
                    alert(
                        "Failed to copy email body. Check console (Ctrl+Shift+J) for details."
                    );
                });
        });
    }
});