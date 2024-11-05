document.getElementById("createUserForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    // Prepare payload
    const payload = { username, password, email, role };

    try {
        // Send POST request
        const response = await fetch("http://localhost:8080/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        // Handle response
        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("errorMessage").style.display = "none";
            document.getElementById("createUserForm").reset();
        } else {
            throw new Error("Failed to create user.");
        }
    } catch (error) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
    }
});
