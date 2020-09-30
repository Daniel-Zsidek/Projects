console.log('Im in');

var dateYear = document.getElementById("dateYear");
dateYear.innerHTML = "date loaded " + (new Date().getFullYear());

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbarLinks')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});