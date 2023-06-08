// Wait for the DOM to load before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    var experienceTitle = document.querySelector('.experience-title');
    var educationTitle = document.querySelector('.education-title');
    var experiencePanel = document.getElementById('experience-panel');
    var educationPanel = document.getElementById('education-panel');

    // Show the IT EXPERIENCE panel by default
    experienceTitle.classList.add('selected');
    experiencePanel.style.display = 'block';

    // Add event listeners to the title elements
    experienceTitle.addEventListener('click', function() {
        // Switch to IT EXPERIENCE
        experienceTitle.classList.add('selected');
        educationTitle.classList.remove('selected');
        experiencePanel.style.display = 'block';
        educationPanel.style.display = 'none';
    });

    educationTitle.addEventListener('click', function() {
        // Switch to EDUCATION
        experienceTitle.classList.remove('selected');
        educationTitle.classList.add('selected');
        experiencePanel.style.display = 'none';
        educationPanel.style.display = 'block';
    });
});