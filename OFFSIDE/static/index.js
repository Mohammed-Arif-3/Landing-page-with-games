//Check if the browser supports Web Notifications
if ("Notification" in window) {
  //Request permission to show notifications
  Notification.requestPermission().then(function (permission) {
	if (permission === "granted") {
	
	  window.addEventListener("beforeunload", function (e) {
		e.preventDefault();
		new Notification("Tab Closed", {
		  body: "Thank you for using Offside Cricket App. Come back soon!",
		});
	  });
	}
  });
}