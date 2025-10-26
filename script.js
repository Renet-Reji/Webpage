/**
 * Function to initiate an email connection
 * It uses the 'mailto' protocol to open the user's default email client
 * with pre-filled subject and body based on the email entered.
 */
function email() {
    // Get the email address entered by the user
    var recipientEmail = document.getElementById("mail").value;
    
    // Check if the input is empty or if it looks like an email address
    if (!recipientEmail || !recipientEmail.includes('@')) {
        alert("Please enter a valid email address to connect!");
        return; // Stop the function if the email is invalid/empty
    }

    // Pre-filled subject and body
    var sub = "Request For Connecting (Via Portfolio)";
    var body = "Hello Renet,\n\nI saw your portfolio and would like to connect with you regarding...";

    // Construct the mailto link using encodeURIComponent for safe URL construction
    var mailtoLink = "mailto:" + encodeURIComponent(recipientEmail) + 
                     "?subject=" + encodeURIComponent(sub) + 
                     "&body=" + encodeURIComponent(body);

    // Open the default email client
    window.location.href = mailtoLink;
}

// You can add more JavaScript here for features like:
// 1. Scroll-reveal animations for sections (using a library like AOS)
// 2. A simple modal pop-up for project details
// 3. Form validation for the contact section (more robust than the alert above)
