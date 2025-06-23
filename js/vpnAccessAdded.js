document.addEventListener("DOMContentLoaded", function () {
    const vpnNetIdInput = document.getElementById("vpnNetIdInput");
    const generateEmailBtnVpnAdded = document.getElementById(
        "generateEmailBtnVpnAdded",
    );
    const emailPreviewVpnAddedDiv = document.getElementById(
        "emailPreviewVpnAdded",
    );

    // Email template placeholders in preview
    const subjectVpnAddedNetIDSpan = document.getElementById(
        "subjectVpnAddedNetID",
    );
    const bodyVpnAddedNetIDSpan = document.getElementById("bodyVpnAddedNetID");

    let currentVpnAddedNetID = "";

    generateEmailBtnVpnAdded.addEventListener("click", function () {
        const inputVpnNetID = vpnNetIdInput.value.trim();

        if (!inputVpnNetID) {
            alert("The NetID added to VPN is required.");
            vpnNetIdInput.focus();
            return;
        }

        currentVpnAddedNetID = inputVpnNetID; // Use as entered

        // Populate email template preview
        subjectVpnAddedNetIDSpan.textContent = currentVpnAddedNetID;
        bodyVpnAddedNetIDSpan.textContent = currentVpnAddedNetID;

        emailPreviewVpnAddedDiv.style.display = "block";
        emailPreviewVpnAddedDiv.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });

    const copySubjectBtnVpnAdded = document.getElementById(
        "copySubjectBtnVpnAdded",
    );
    const copyBodyBtnVpnAdded = document.getElementById("copyBodyBtnVpnAdded");

    copySubjectBtnVpnAdded.addEventListener("click", function () {
        if (!currentVpnAddedNetID) {
            alert("Please generate the email first.");
            return;
        }
        const subjectText = `NetID "${currentVpnAddedNetID}" Added to VPN Access Group`;
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

    copyBodyBtnVpnAdded.addEventListener("click", function () {
        if (!currentVpnAddedNetID) {
            alert("Please generate the email first.");
            return;
        }
        const bodyText = `Hello,

The NetID "${currentVpnAddedNetID}" has been added to the VPN access group.  Please wait overnight for processing to finalize before logging in.

To use the VPN, please visit https://unmvpn.unm.edu/global-protect/login.esp and click on the correct operating system environment to download Global Protect VPN and use unmvpn.unm.edu in the connection information.  Additionally, you may need to send a request to have the installation performed on your workstation, which is completed by another team if you do not have administrative rights to your machine to do so. (Reference FI 7819 https://unm.custhelp.com/app/answers/detail/a_id/7819)

If you have any questions or concerns, please call the help desk at 505-277-5757, or submit a new ticket at help.unm.edu.

Kind regards,
IT Applications Support`;

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