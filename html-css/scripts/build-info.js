<script>
            // Fetch and display build-info.json
    async function loadBuildInfo() {
                try {
                    const response = await fetch('./build-info.json');
    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
    const buildInfo = await response.json();
    document.getElementById('build-info').innerText = `
    Repository: ${buildInfo.repository}
    Branch: ${buildInfo.branch}
    Pipeline: ${buildInfo.pipeline}
    Build Number: ${buildInfo.buildNumber}
    Build Date: ${buildInfo.buildDate}
    `;
                } catch (error) {
        console.error('Error loading build-info.json:', error);
                }
            }

    // Load build-info.json when the page loads
    window.onload = loadBuildInfo;
</script>
