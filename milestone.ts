document.addEventListener('DOMContentLoaded', function() {
    // Select the button and the skills section
    const toggleSkillsBtn = document.getElementById("toggle-skills-btn") as HTMLButtonElement;
    const skillsSection = document.getElementById("skills-section") as HTMLDivElement;

    // Check if the elements exist to avoid null errors
    if (toggleSkillsBtn && skillsSection) {
        // Add an event listener for the button click
        toggleSkillsBtn.addEventListener("click", function() {
            // Toggle the "hidden" class to show/hide the skills section
            skillsSection.classList.toggle("hidden");

            // Change the button text based on whether the skills section is shown
            if (skillsSection.classList.contains("hidden")) {
                toggleSkillsBtn.textContent = "Show Skills";
            } else {
                toggleSkillsBtn.textContent = "Hide Skills";
            }
        });
    }

    // Handle form submission
    const form = document.getElementById("resumeform") as HTMLFormElement;
    form?.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload on form submission
        
        // Access form values with proper casting
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("Education") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("description") as HTMLTextAreaElement).value;

        // Create the resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
        `;
        
        // Display the resume in the output div
        const resumeOutputDiv = document.getElementById("resume-output") as HTMLDivElement;
        resumeOutputDiv.innerHTML = resumeOutput;
    });
});