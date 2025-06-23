document.addEventListener("DOMContentLoaded", () => {
    const oldNetIdInput = document.getElementById("oldNetID");
    const newNetIdInput = document.getElementById("newNetID");
    const previewSubjectSpan = document.getElementById("previewSubject");
    const previewBodyPre = document.getElementById("previewBody");

    if (
        !oldNetIdInput ||
        !newNetIdInput ||
        !previewSubjectSpan ||
        !previewBodyPre
    ) {
        console.error(
            "One or more elements for NetID Rename Confirmation not found."
        );
        return;
    }

    const initialPreviewBodyHTML = previewBodyPre.innerHTML;

    function updatePreview() {
        const oldNetId = oldNetIdInput.value || "OLDexample";
        const newNetId = newNetIdInput.value || "NEWexample";

        previewSubjectSpan.innerHTML = `Confirmation of NetID rename from <span class="placeholder-oldnetid">${oldNetId}</span> to <span class="placeholder-newnetid">${newNetId}</span>`;

        let updatedBodyHTML = initialPreviewBodyHTML;
        updatedBodyHTML = updatedBodyHTML.replace(
            /<span class="placeholder-oldnetid">OLDexample<\/span>/g,
            `<span class="placeholder-oldnetid">${oldNetId}</span>`
        );
        updatedBodyHTML = updatedBodyHTML.replace(
            /<span class="placeholder-newnetid">NEWexample<\/span>/g,
            `<span class="placeholder-newnetid">${newNetId}</span>`
        );
        previewBodyPre.innerHTML = updatedBodyHTML;
    }

    oldNetIdInput.addEventListener("input", updatePreview);
    newNetIdInput.addEventListener("input", updatePreview);
    updatePreview();

    const copySubjectBtn = document.getElementById("copySubjectBtn");
    const copyBodyBtn = document.getElementById("copyBodyBtn");

    if (copySubjectBtn) {
        copySubjectBtn.addEventListener("click", function () {
            const oldNetId = oldNetIdInput.value;
            const newNetId = newNetIdInput.value;
            if (!oldNetId || !newNetId) {
                alert(
                    "Please enter both Old and New NetIDs to generate the subject."
                );
                return;
            }
            const subject =
                `Confirmation of NetID rename from ${oldNetId} to ${newNetId}`;
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
            const oldNetId = oldNetIdInput.value;
            const newNetId = newNetIdInput.value;
            if (!oldNetId || !newNetId) {
                alert(
                    "Please enter both Old and New NetIDs to generate the email body."
                );
                return;
            }
            const rawBodyText = `Hello,

Your official UNM NetID was changed from '${oldNetId}' to '${newNetId}'.
Please note: It will take 24-48 hours to receive emails via your new email address.

As per the Statement of Understanding, you acknowledged the consequences of this change. You may still need to complete one or more actions. Please review the list below.
(You may also need to request your local system administrator to make other access changes, such as changing your login name on your personal machine).

Key Actions for All Users:

  * Change Temporary Password:
    - A temporary password for your new NetID can be obtained by contacting the Service Desk at (505) 277-5757.
    - Change this password at https://netid.unm.edu using the "I know my old password" link.
    - (How to reset/change NetID Password - https://unm.service-now.com/esc?id=kb_article&table=kb_knowledge&sys_id=63f336e42b19e6506fcbfcddfe91bff1&recordUrl=%2Fkb_view.do%3Fsys_kb_id%3D63f336e42b19e6506fcbfcddfe91bff1)

  * Old NetID (${oldNetId}) Expiration:
    - Your old NetID has expired.
    - If you want to keep mail or documents from your old account's UNIX space, you must move them.

  * Set Up New Preferred Email:
    - Visit http://dss.unm.edu and remove your old preferred email.
    - DO NOT enter a new email address; it will be automatically populated.

FOR FACULTY AND STAFF:

  * Banner Users:
    - Action: Resubmit your Banner Authorization Request (BAR) under your new NetID (${newNetId}) once you receive notice your roles have been removed from the old NetID.
    - Our current system does not allow us to simply replace the old NetID with the new one for Banner access.
    - You should receive notice from a Business Security Administrator when your Banner access has been removed from the old NetID.
    - (How to complete a BAR - https://unm.service-now.com/esc?id=kb_article&table=kb_knowledge&sysparm_article=KB0015549&searchTerm=How%20to%20submit%20a%20bar)

  * PCard Holders:
    - Action: Submit a "Modification of Cardholder Information Form" to update your NetID.
    - More information: http://www.unm.edu/~purch/pcard.html

  * Proxies in Banner:
    - You will need to update proxies once the BAR for your new NetID has been approved.

  * System Access & Update Timelines:
    - Learning Central: Access with new NetID should be immediate.
    - MyUNM: Access with new NetID will be available the following day.
    - LoboWeb: Access with new NetID should be immediate. (Use links on the MyUNM login page before logging in).
    - Listservs: IT will change ownership if your old UNM NetID was the primary email address.
    - Help.UNM:
      - Allow 24+ hours before logging in with your new NetID.
      - Old and current tickets will remain under your old NetID (${oldNetId}).
      - Accounts cannot be merged due to system limitations.
    - Learn:
      - Allow up to two business days for the new NetID to work.
      - Access may still work under the old NetID during part of this period.
    - LoboMail: Will take about 4 hours to become active.
    - IT VPN and other UNIX group membership: Will be changed once you receive this email.
    - LoboTime: Will be accessible immediately.

We will proceed with escalating this request so that your email address can be properly updated.

Please contact the Service Desk at (505) 277-5757 if you have any questions.

Best regards,
UNM IT Applications`;
            navigator.clipboard
                .writeText(rawBodyText)
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