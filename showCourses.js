document.addEventListener("DOMContentLoaded", function () {
    const coursesTable = document.getElementById("coursesTable").getElementsByTagName("tbody")[0];
    const errorMessage = document.getElementById("errorMessage");

    fetch("http://localhost:8080/courses")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(course => {
                const row = coursesTable.insertRow();
                row.innerHTML = `
                    <td>${course.courseCode}</td>
                    <td>${course.courseName}</td>
                    <td>${course.department}</td>
                    <td>${course.semester}</td>
                    <td>${course.credits}</td>
                `;
            });
        })
        .catch(error => {
            console.error("Error fetching courses:", error);
            errorMessage.style.display = "block";
        });
});
