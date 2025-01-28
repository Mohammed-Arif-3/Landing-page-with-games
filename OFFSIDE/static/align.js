<script>
    // Check if the browser supports Web Notifications
    if ("Notification" in window) {
        // Request permission to show notifications
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                // Create a notification when the tab is about to close
                window.addEventListener("beforeunload", function (e) {
                    e.preventDefault();
                    new Notification("Tab Closed", {
                        body: "This tab is about to close.",
                    });
                });
            }
        })
    }
</script>
