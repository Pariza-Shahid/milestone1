var toggleSkillsButton = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills-section');
// Add an event listener to the button to toggle the visibility of the skills section
toggleSkillsButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    console.log("Toggle button clicked"); // Debugging statement
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.classList.add('hidden');
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
