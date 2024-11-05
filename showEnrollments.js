document.addEventListener("DOMContentLoaded", () => {
    const enrollmentTableBody = document.getElementById("enrollmentTableBody");
    const errorMessage = document.getElementById("errorMessage");

    // Function to fetch enrollments
    async function fetchEnrollments() {
        try {
            const response = await fetch("http://localhost:8080/enrollments");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            // Populate table with data
            data.forEach((enrollment) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${enrollment.id}</td>
                    <td>${enrollment.student.username}</td>
                    <td>${enrollment.course.courseCode}</td>
                    <td>${enrollment.course.courseName}</td>
                    <td>${enrollment.course.department}</td>
                    <td>${enrollment.course.semester}</td>
                    <td>${enrollment.course.credits}</td>
                    <td>${enrollment.grade}</td>
                `;

                enrollmentTableBody.appendChild(row);
            });
        } catch (error) {
            console.error("Error fetching enrollments:", error);
            errorMessage.style.display = "block";
        }
    }

    // Call the function to fetch enrollments
    fetchEnrollments();
});
