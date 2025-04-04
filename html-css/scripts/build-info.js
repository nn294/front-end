// Fetch and display build-info.json
async function loadBuildInfo() {
    document.getElementById('build-info').innerText = `
    Repository: "&&!!repository!!&&"
    Branch: "&&!!branch!!&&"
    Pipeline: "&&!!pipeline!!&&"
    Build Number: "&&!!buildnumber!!&&"
    Build Date: "&&!!builddate!!&&"
    `;
}
// Load build-info.json when the page loads
window.onload = loadBuildInfo;
