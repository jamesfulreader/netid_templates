document.addEventListener("DOMContentLoaded", function () {
    const netIdInput = document.getElementById("netIdInput");
    const websiteUrlInput = document.getElementById("websiteUrlInput");
    const generateEmailBtn = document.getElementById("generateEmailBtn");
    const emailPreviewDiv = document.getElementById("emailPreview");

    // Email template placeholders in preview
    const previewNetIdSubjectSpan =
        document.getElementById("previewNetIdSubject");
    const emailBodyNetIDSpan = document.getElementById("emailBodyNetID");
    const emailBodyNetIDEmailSpan =
        document.getElementById("emailBodyNetIDEmail");
    const emailBodyCpanelUserSpan =
        document.getElementById("emailBodyCpanelUser");
    const emailBodyDomainSpan = document.getElementById("emailBodyDomain");
    const emailBodyDomain2Span = document.getElementById("emailBodyDomain2");

    let currentNetID = "";
    let currentDomainNoProtocol = "";

    // Update footer year
    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    generateEmailBtn.addEventListener("click", function () {
        const inputNetID = netIdInput.value.trim();
        const inputWebsiteUrl = websiteUrlInput.value.trim();

        if (!inputNetID) {
            alert("NetID is required.");
            netIdInput.focus();
            return;
        }
        if (!inputWebsiteUrl) {
            alert("Website URL is required.");
            websiteUrlInput.focus();
            return;
        }
        // Basic validation for domain format (doesn't have to be super strict)
        if (inputWebsiteUrl.includes("https://") || inputWebsiteUrl.includes("http://")) {
            alert("Please enter the Website URL without http:// or https:// (e.g., mydept.unm.edu)");
            websiteUrlInput.focus();
            return;
        }
        if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputWebsiteUrl)) {
            alert("Please enter a valid domain format (e.g., mydept.unm.edu).");
            websiteUrlInput.focus();
            return;
        }


        currentNetID = inputNetID.toUpperCase(); // Standardize to uppercase for display
        currentDomainNoProtocol = inputWebsiteUrl.toLowerCase(); // Standardize to lowercase

        // Populate email template preview
        previewNetIdSubjectSpan.textContent = currentNetID;
        emailBodyNetIDSpan.textContent = currentNetID;
        emailBodyNetIDEmailSpan.textContent = currentNetID;
        emailBodyCpanelUserSpan.textContent = currentNetID;
        emailBodyDomainSpan.textContent = currentDomainNoProtocol;
        emailBodyDomain2Span.textContent = currentDomainNoProtocol;

        emailPreviewDiv.style.display = "block";
        emailPreviewDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const copySubjectBtn = document.getElementById("copySubjectBtn");
    const copyBodyBtn = document.getElementById("copyBodyBtn");

    copySubjectBtn.addEventListener("click", function () {
        if (!currentNetID) {
            alert("Please generate the email first.");
            return;
        }
        const subjectText = `New Departmental Email & cPanel Account Instructions for "${currentNetID}"`;
        navigator.clipboard
            .writeText(subjectText)
            .then(function () {
                alert("Subject copied to clipboard!");
            })
            .catch(function (err) {
                try {
                    const textArea = document.createElement("textarea");
                    textArea.value = subjectText;
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

    copyBodyBtn.addEventListener("click", function () {
        if (!currentNetID || !currentDomainNoProtocol) {
            alert("Please generate the email first.");
            return;
        }
        const bodyText = `Hello,

Your requested Department NetID, "${currentNetID}", has been created with the owner(s) as requested. The expiration date for the account has been set to 3 years from today. You should receive notification when it is time to renew your account.

The email account, "${currentNetID}@unm.edu", has been created as a shared mailbox. You may already have access in your regular Outlook (desktop or web), or you may need to allow 1-2 days processing time to be able to access the account. Because this is a shared mailbox, there is no need for a password to access the mail account. If you need to access the account on Outlook for the Web (Lobomail) please follow this guide:

https://support.microsoft.com/en-us/office/open-and-use-a-shared-mailbox-in-outlook-on-the-web-98b5a90d-4e38-415d-a030-f09a4cd28207

Additionally, the shared mailbox owner/existing delegates can add or remove access for other users with this Flow: https://make.powerautomate.com/environments/Default-25aa9830-e0f9-482b-897e-1a3b3c855e5c/flows/b671e3bc-153f-400c-a87d-f1e1c9908f29/run

cPanel Account Details:

Username: ${currentNetID}
cPanel management URL:  https://cpanel03.unm.edu:2083/
Your new Website URL: ${currentDomainNoProtocol}

It may take up to 2 business days for your URL ${currentDomainNoProtocol} to be accessible in a browser - when it is, you will see a blank "Index of /" page, the site is ready for you to start making content updates.

Login to cPanel and change your cPanel hosting account password:

Refer to this Fast Info: https://unm.custhelp.com/app/answers/detail/a_id/7762/

A shared mailbox/email account has been created with your Department NetID.  You should already have access to that in your regular Outlook (desktop or web).  The password reset code will be sent to this shared mailbox which will be needed in order to reset the cPanel password.

Develop your website content:

Cascade Server, UNM's Web Content Management system (WCMS), is highly recommended.  Each individual who wishes to use the WCMS will need to complete training. You can request Cascade access from the UNM Webmaster.  Cascade Server and cPanel work hand in hand to deliver your website to your audience. Use Cascade to build your website (develop content). Use cPanel to serve (host) the website you built in Cascade. Once your site is built in Cascade, configure it to publish to your cPanel account using FastInfo 7497.

Thank you,
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