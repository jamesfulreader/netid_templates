document.addEventListener("DOMContentLoaded", () => {
    // const relevantNetIdInput = document.getElementById("relevantNetID"); // For future use if needed

    const emailSubject =
        "Reply Required: Please accept or decline the consequences of renaming your UNM NetID";
    const emailBody = `Hello,

Changing your UNM NetID can cause access and authentication issues while systems sync. It is a good idea not to make these changes in the middle of a semester or ahead of a critical deadline. In order to change a NetID we require that the consequences are accepted. Users are required to respond with an acknowledgement statement listed at the bottom of this email. Please review this summary and reply with the acknowledgment statement.

UNM NetIDs are used by numerous systems on campus. When NetIDs are changed, many of these systems must be manually updated. Staff and faculty users will lose any Banner roles their previous account held and need to submit a new Banner Access Request.

A reply to this email must be received before IT can continue with your NetID rename request. Please confirm the following:

I understand that if the request to change my UNM NetID is approved, I will be responsible for doing the following, if necessary:

*   If I have Banner and/or other administrative system access, I will lose that access when the NetID is changed and will need to submit a new Banner Authorization Request under the new NetID. I will not be able to use the various services until the new BAR is approved.
*   If I have email stored in LoboMail or files stored in my UNIX space, I will be responsible for moving the data if I want to keep the information.
*   If I want mail forwarded from my old email account to my new email account, I will be responsible for setting up those forwarding rules. I can do this by checking Help in LoboMail.

Additionally, if I have access to any of the following services, I understand what will happen when the NetID is changed:

RESEARCH

*   Streamlyne Research Administration Portal (Please let us know if you have a Streamlyne account so we can update your NetID in that system to avoid loss of use)

ENROLLMENT MANAGEMENT

*   STARRS (Access lost until update)
*   RightNow (Access lost until update)
*   Hobsons (Access lost until update)
*   local file/print servers (Access lost until update)

FINANCE

*   Approval queue maintenance is required if the person is an approver.
*   Banner ID for financial managers must be changed.
*   Users who reallocate p-card transactions have to work separately with the Purchasing Department to get their information updated.
*   Incomplete transactions cannot be completed with the old Netid.

Help.UNM

*   Will have submissions under old NetID and new NetID. Due to system limitations will not be able to combine the two records.

TIMEKEEPERS

*   Change can only be done after time has been extracted and payroll closes.
*   Proxies will need to be updated for new NetID

To show you have reviewed this information and understand the consequences of changing your NetID, you MUST reply to this email with the following exact statement:

"I understand the consequences of changing my NetID".

We appreciate your assistance. To ensure timely processing of your ticket, please respond within five days. Please note, if we do not hear from you within five days (i.e., you decline by not responding or explicitly state your decline), your request will be marked cancelled.

Kind regards,
UNM IT Applications`;

    const copySubjectBtn = document.getElementById("copySubjectBtn");
    const copyBodyBtn = document.getElementById("copyBodyBtn");

    if (copySubjectBtn) {
        copySubjectBtn.addEventListener("click", function () {
            navigator.clipboard
                .writeText(emailSubject)
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
            navigator.clipboard
                .writeText(emailBody)
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