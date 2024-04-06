document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Me</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
        `;
    }

    const colors = ['green', 'yellow', 'light-blue'];
    const projects = document.querySelectorAll('.project h3');
    console.log(projects)
    
    projects.forEach((project, index) => {
        project.classList.add(colors[index % colors.length]);
        let binaryNumber = (index + 1).toString(2);
        project.textContent = binaryNumber + ": " + project.textContent;
    });
});