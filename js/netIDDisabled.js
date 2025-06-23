// Get references to DOM elements
const input = document.getElementById("disabledNetIdInput");
const subjectSpan = document.getElementById("subjectDisabledNetID");
const bodySpan = document.getElementById("bodyDisabledNetID");
const subjectPreview = document.getElementById("emailSubjectPreviewTextDisabled");
const bodyPreview = document.getElementById("emailBodyPreviewDisabled");
const copySubjectBtn = document.getElementById("copySubjectBtnDisabled");
const copyBodyBtn = document.getElementById("copyBodyBtnDisabled");

// Helper to escape HTML for <pre> (for security, but not strictly needed here)
function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
        return ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[m];
    });
}

// Update the preview in real time
function updateDisabledPreview() {
    const netid = input.value.trim() || "NETID_PLACEHOLDER";
    subjectSpan.textContent = netid;
    bodySpan.textContent = netid;
}

// Copy subject to clipboard
copySubjectBtn.addEventListener("click", () => {
    const netid = input.value.trim() || "NETID_PLACEHOLDER";
    const subject = `Notice that NetID "${netid}" has been DISABLED`;
    navigator.clipboard.writeText(subject);
    copySubjectBtn.textContent = "Copied!";
    setTimeout(() => (copySubjectBtn.textContent = "Copy Subject"), 1200);
});

// Copy body to clipboard
copyBodyBtn.addEventListener("click", () => {
    const netid = input.value.trim() || "NETID_PLACEHOLDER";
    const body = `Hello,

NetID "${netid}" has been disabled per your request, effective immediately.

Kind regards,
UNM IT Applications`;
    navigator.clipboard.writeText(body);
    copyBodyBtn.textContent = "Copied!";
    setTimeout(() => (copyBodyBtn.textContent = "Copy Body"), 1200);
});

// Listen for input changes
input.addEventListener("input", updateDisabledPreview);

// Initialize preview on page load
updateDisabledPreview();