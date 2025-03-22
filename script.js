document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");

    // Handle Login Form Submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            console.log("Logging in with:", email, password);
            
            // Firebase authentication login
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Login Successful!");
                    window.location.href = "dashboard.html"; // Redirect after login
                })
                .catch(error => {
                    console.error("Login Error:", error.message);
                    alert("Error: " + error.message);
                });
        });
    }

    // Handle Sign Up Form Submission
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;
            console.log("Signing up with:", email, password);

            // Firebase authentication sign up
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Signup Successful!");
                    window.location.href = "login.html"; // Redirect to login page
                })
                .catch(error => {
                    console.error("Signup Error:", error.message);
                    alert("Error: " + error.message);
                });
        });
    }

    // Logout Function
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            firebase.auth().signOut().then(() => {
                alert("Logged out successfully!");
                window.location.href = "login.html"; // Redirect after logout
            }).catch(error => {
                console.error("Logout Error:", error.message);
                alert("Error: " + error.message);
            });
        });
    }
});