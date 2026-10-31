const preprintsPage = document.querySelector("[data-preprints-revision]");

if (preprintsPage) {
    let checking = false;
    const checkPreprints = async () => {
        if (checking || document.hidden) return;
        checking = true;
        try {
            const response = await fetch("./preprints-index.json", { cache: "no-store" });
            if (!response.ok) return;
            const index = await response.json();
            if (index.revision && index.revision !== preprintsPage.dataset.preprintsRevision) {
                window.location.reload();
            }
        } catch {
            // The static page remains readable while the server is unavailable.
        } finally {
            checking = false;
        }
    };
    window.setInterval(checkPreprints, 5000);
    document.addEventListener("visibilitychange", checkPreprints);
    checkPreprints();
}
