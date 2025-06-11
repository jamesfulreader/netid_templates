document.addEventListener("DOMContentLoaded", function () {
    const privNetIdInput = document.getElementById("privNetIdInput");
    const fullNameInput = document.getElementById("fullNameInput");
    const generateEmailBtnPriv = document.getElementById(
        "generateEmailBtnPriv",
    );
    const emailPreviewPrivDiv = document.getElementById("emailPreviewPriv");

    // Email template placeholders in preview
    const emailBodyPrivNetIDSpan = document.getElementById("emailBodyPrivNetID");
    const emailBodyFullNameSpan = document.getElementById("emailBodyFullName");
    // Subject is static in the preview text, but we'll define it for the copy function
    const staticSubjectText =
        "Confirmation of new personal privilege account creation";

    let currentPrivNetID = "";
    let currentFullName = "";

    generateEmailBtnPriv.addEventListener("click", function () {
        const inputPrivNetID = privNetIdInput.value.trim();
        const inputFullName = fullNameInput.value.trim();

        if (!inputPrivNetID) {
            alert("Privilege Account NetID is required.");
            privNetIdInput.focus();
            return;
        }
        if (!inputFullName) {
            alert("Account Holder's Full Name is required.");
            fullNameInput.focus();
            return;
        }

        currentPrivNetID = inputPrivNetID; // No case change, use as entered
        currentFullName = inputFullName;   // Use as entered

        // Populate email template preview
        emailBodyPrivNetIDSpan.textContent = currentPrivNetID;
        emailBodyFullNameSpan.textContent = currentFullName;

        emailPreviewPrivDiv.style.display = "block";
        emailPreviewPrivDiv.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });

    const copySubjectBtnPriv = document.getElementById("copySubjectBtnPriv");
    const copyBodyBtnPriv = document.getElementById("copyBodyBtnPriv");

    copySubjectBtnPriv.addEventListener("click", function () {
        navigator.clipboard
            .writeText(staticSubjectText)
            .then(function () {
                alert("Subject copied to clipboard!");
            })
            .catch(function (err) {
                try {
                    const textArea = document.createElement("textarea");
                    textArea.value = staticSubjectText;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textArea);
                    alert("Subject copied to clipboard!");
                } catch (e) {
                    alert("Failed to copy subject. Please copy manually.");
                    console.error("Copy subject error:", err, e);
                }
            });
    });

    copyBodyBtnPriv.addEventListener("click", function () {
        if (!currentPrivNetID || !currentFullName) {
            alert("Please generate the email first.");
            return;
        }
        const bodyText = `Hello,

We have created new personal privilege account "${currentPrivNetID}" (Privileged for ${currentFullName}).

The expiration date for the account is set to 3 years from today, and a renewal will be required every 3 years to keep the account active.

If the user will need DUO Multifactor Authentication for any of their duties Duo MFA signup can be initiated by the priv account holder per the instructions in https://unm.custhelp.com/app/answers/detail/a_id/7842/kw/DUO%20enrollment.

To finalize the account setup, please have the user/owner of the account call the Service Desk at 505-277-5757 to request a password reset. Privileged NetIDs are always solely owned and used by the individual they are named after.

Kind regards,
UNM IT Applications - Support`;

        navigator.clipboard
            .writeText(bodyText)
            .then(function () {
                alert("Body copied to clipboard!");
            })
            .catch(function (err) {
                try {
                    const textArea = document.createElement("textarea");
                    textArea.value = bodyText;
                    textArea.style.position = "fixed";
                    textArea.style.opacity = "0";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textArea);
                    alert("Body copied to clipboard!");
                } catch (e) {
                    alert("Failed to copy body. Please copy manually.");
                    console.error("Copy body error:", err, e);
                }
            });
    });
});