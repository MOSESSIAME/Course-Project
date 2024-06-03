document.addEventListener('DOMContentLoaded', () => {
    // GitHub username to fetch repositories from
    const githubUsername = 'mosessiame';

    // Fetch GitHub repositories for the specified user
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`GitHub API returned status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(repos => {
            // Log fetched repositories for debugging
            console.log('Fetched repos:', repos);
            const projectsContainer = document.getElementById('projects-container');
            
            // Check if the projects container exists in the HTML
            if (projectsContainer) {
                // Iterate over each repository and create a project element
                repos.forEach(repo => {
                    const projectDiv = document.createElement('div');
                    projectDiv.classList.add('project');
                    projectDiv.innerHTML = `
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'No description available.'}</p>
                        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                    `;
                    projectsContainer.appendChild(projectDiv);
                });
            } else {
                console.error('No element with ID "projects-container" found in the HTML.');
            }
        })
        .catch(error => console.error('Error fetching repos:', error));

    // Contact form submission handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        console.log(formData); // Log form data for debugging

        // Send form data to the server
        fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Convert form data to JSON
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Display success message
            contactForm.reset(); // Reset the form
        })
        .catch(error => console.error('Error:', error));
    });
});
