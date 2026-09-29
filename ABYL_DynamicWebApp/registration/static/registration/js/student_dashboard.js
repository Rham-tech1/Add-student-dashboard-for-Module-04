
async function loadStudents() {

  
    const loadingMessage = document.getElementById("loading-message");
    const errorMessage = document.getElementById("error-message");
    const studentCount = document.getElementById("student-count");
    const tableBody = document.getElementById("student-table-body");

    try {

     
        loadingMessage.textContent = "Loading students...";
        errorMessage.textContent = "";

      
        const response = await fetch("/api/students/");

     
        if (!response.ok) {

            if (response.status === 401) {
                throw new Error(
                    "Authentication required. Please log in."
                );
            }

            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Student API Response:", data);


        studentCount.textContent = data.count;

  
        tableBody.innerHTML = "";

        if (data.students.length === 0) {

            const row = document.createElement("tr");
            const cell = document.createElement("td");

            cell.colSpan = 5;
            cell.textContent = "No Student records found.";

            row.appendChild(cell);
            tableBody.appendChild(row);

        } else {

            data.students.forEach(student => {

                const row = document.createElement("tr");

                const studentValues = [
                    student.id,
                    student.student_name,
                    student.program,
                    student.year_level,
                    student.email
                ];

                studentValues.forEach(value => {

                    const cell = document.createElement("td");

                    cell.textContent = value ?? "";

                    row.appendChild(cell);

                });

                tableBody.appendChild(row);

            });

        }


        loadingMessage.textContent = "";

    } catch (error) {


        loadingMessage.textContent = "";
        errorMessage.textContent = error.message;

        console.error("Failed to load students:", error);

    }

}


loadStudents();