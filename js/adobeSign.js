document.addEventListener("DOMContentLoaded", () => {
    const userEmailInput = document.getElementById("userEmail");
    const previewUserEmailSubjectSpan = document.getElementById(
        "previewUserEmailSubject"
    );
    const previewAdobeBodyPre = document.getElementById("previewAdobeBody");

    if (!userEmailInput || !previewUserEmailSubjectSpan || !previewAdobeBodyPre) {
        console.error("One or more elements for Adobe Sign not found.");
        return;
    }

    const userEmailPlaceholders = previewAdobeBodyPre.querySelectorAll(
        ".placeholder-useremail"
    );

    function updateUserEmailPreview() {
        const emailValue = userEmailInput.value || "EXAMPLENETID@unm.edu"; // Keep placeholder
        previewUserEmailSubjectSpan.textContent = emailValue;
        userEmailPlaceholders.forEach((span) => (span.textContent = emailValue));
    }

    userEmailInput.addEventListener("input", updateUserEmailPreview);
    updateUserEmailPreview(); // Initial call

    const copySubjectBtn = document.getElementById("copyAdobeSubjectBtn");
    const copyBodyBtn = document.getElementById("copyAdobeBodyBtn");

    if (copySubjectBtn) {
        copySubjectBtn.addEventListener("click", function () {
            const userEmailValue = userEmailInput.value;
            if (!userEmailValue) {
                alert("Please enter an email address first to generate the subject.");
                return;
            }
            const subject =
                'Adobe Acrobat Sign Account Update for "' + userEmailValue + '"';
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
            const userEmailValue = userEmailInput.value;
            if (!userEmailValue) {
                alert(
                    "Please enter an email address first to generate the email body."
                );
                return;
            }
            const body = `Hello,

We have updated and licensed the Adobe Acrobat Sign account associated with "${userEmailValue}". Adobe Sign may be accessed from adobesign.unm.edu.

UNM Adobe services are now utilizing SSO authentication. This means if you are a user of a shared/departmental Adobe account, accessing will require the use of an incognito or private browser window. Please follow the steps in FastInfo article 7801 if you have any issues accessing a departmental Adobe Sign account: https://unm.custhelp.com/app/answers/detail/a_id/7801/kw/Adobe%20Sign

Here is a tutorial video that covers some of the basic functionality in the new Sign portal: https://experienceleague.adobe.com/en/docs/document-cloud-learn/sign-learning-hub/getting-started/getting-started-sending/new-sender

The full Adobe Acrobat Sign User's Guide may be accessed here: https://helpx.adobe.com/sign/using/user-guide-landing.html

Kind regards,
UNM IT Applications Teams`;
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