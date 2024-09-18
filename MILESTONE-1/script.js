var toggleButton = document.getElementById('toggle-skill');
var skill = document.getElementById('skill');
toggleButton.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
        toggleButton.textContent = 'Hide skill';
    }
    else {
        skill.style.display = 'none';
        toggleButton.textContent = 'Show skill';
    }
});
