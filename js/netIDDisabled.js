// document.addEventListener("DOMContentLoaded", function () {
//     const disabledNetIdInput = document.getElementById("disabledNetIdInput");
//     const generateEmailBtnDisabled = document.getElementById(
//         "generateEmailBtnDisabled",
//     );
//     const emailPreviewDisabledDiv = document.getElementById(
//         "emailPreviewDisabled",
//     );

//     // Email template placeholders in preview
//     const subjectDisabledNetIDSpan =
//         document.getElementById("subjectDisabledNetID");
//     const bodyDisabledNetIDSpan = document.getElementById("bodyDisabledNetID");

//     let currentDisabledNetID = "";

//     generateEmailBtnDisabled.addEventListener("click", function () {
//         const inputDisabledNetID = disabledNetIdInput.value.trim();

//         if (!inputDisabledNetID) {
//             alert("The disabled NetID is required.");
//             disabledNetIdInput.focus();
//             return;
//         }

//         currentDisabledNetID = inputDisabledNetID; // Use as entered

//         // Populate email template preview
//         subjectDisabledNetIDSpan.textContent = currentDisabledNetID;
//         bodyDisabledNetIDSpan.textContent = currentDisabledNetID;

//         emailPreviewDisabledDiv.style.display = "block";
//         emailPreviewDisabledDiv.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//         });
//     });

//     const copySubjectBtnDisabled = document.getElementById(
//         "copySubjectBtnDisabled",
//     );
//     const copyBodyBtnDisabled = document.getElementById("copyBodyBtnDisabled");

//     copySubjectBtnDisabled.addEventListener("click", function () {
//         if (!currentDisabledNetID) {
//             alert("Please generate the email first.");
//             return;
//         }
//         const subjectText = `Notice that NetID "${currentDisabledNetID}" has been DISABLED`;
//         navigator.clipboard
//             .writeText(subjectText)
//             .then(function () {
//                 alert("Subject copied to clipboard!");
//             })
//             .catch(function (err) {
//                 try {
//                     const textArea = document.createElement("textarea");
//                     textArea.value = subjectText;
//                     document.body.appendChild(textArea);
//                     textArea.select();
//                     document.execCommand("copy");
//                     document.body.removeChild(textArea);
//                     alert("Subject copied to clipboard!");
//                 } catch (e) {
//                     alert("Failed to copy subject. Please copy manually.");
//                     console.error("Copy subject error:", err, e);
//                 }
//             });
//     });

//     copyBodyBtnDisabled.addEventListener("click", function () {
//         if (!currentDisabledNetID) {
//             alert("Please generate the email first.");
//             return;
//         }
//         const bodyText = `Hello,

// NetID "${currentDisabledNetID}" has been disabled per your request, effective immediately.

// Kind regards,
// UNM IT Applications`;

//         navigator.clipboard
//             .writeText(bodyText)
//             .then(function () {
//                 alert("Body copied to clipboard!");
//             })
//             .catch(function (err) {
//                 try {
//                     const textArea = document.createElement("textarea");
//                     textArea.value = bodyText;
//                     textArea.style.position = "fixed";
//                     textArea.style.opacity = "0";
//                     document.body.appendChild(textArea);
//                     textArea.focus();
//                     textArea.select();
//                     document.execCommand("copy");
//                     document.body.removeChild(textArea);
//                     alert("Body copied to clipboard!");
//                 } catch (e) {
//                     alert("Failed to copy body. Please copy manually.");
//                     console.error("Copy body error:", err, e);
//                 }
//             });
//     });
// });

const input = document.getElementById("disabledNetIdInput");
const subjectSpan = document.getElementById("subjectDisabledNetID");
const bodySpan = document.getElementById("bodyDisabledNetID");

function updateDisabledPreview() {
    const value = input.value.trim() || "NETID_PLACEHOLDER";
    subjectSpan.textContent = value;
    bodySpan.textContent = value;
}

input.addEventListener("input", updateDisabledPreview);
updateDisabledPreview();