# Moses Siame's Personal Portfolio

Welcome to my personal portfolio website. This project showcases my skills, projects, and experience as a Software Engineer. The website is built with HTML5, CSS, JavaScript, Node.js, and SQLite, demonstrating my proficiency in full-stack web development.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Introduction

This portfolio website highlights my professional skills and projects. It includes an About Me section, a list of skills, a dynamic project gallery, and a contact form that stores messages in a SQLite database.

## Features

- **About Me**: Learn more about my background and interests.
- **Skills**: A list of my technical skills.
- **Projects**: A dynamically loaded gallery of my GitHub repositories.
- **Contact Form**: A form to send messages, with submissions stored in a SQLite database.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite
- **APIs**: GitHub API

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    ```

2. Navigate to the project directory:
    ```sh
    cd your-repo
    ```

3. Install the necessary dependencies:
    ```sh
    npm install
    ```

4. Create the SQLite database and tables:
    ```sh
    node initializeDatabase.js
    ```

5. Start the server:
    ```sh
    node server.js
    ```

6. Open your browser and go to:
    ```sh
    http://localhost:3000
    ```

## Usage

- **View Projects**: The projects section dynamically loads my GitHub repositories using the GitHub API.
- **Contact Me**: Fill out the contact form to send me a message. The messages are stored in a SQLite database.

## Project Structure


- **public/**: Contains static files like images, CSS, and JavaScript.
- **views/**: Contains HTML files for the frontend.
- **database/**: Contains the SQLite database file.
- **initializeDatabase.js**: Script to initialize the SQLite database.
- **server.js**: Node.js server script.
- **package.json**: Node.js project metadata and dependencies.
- **README.md**: Project documentation.

## Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: moses@example.com
- **LinkedIn**: [Moses Siame](https://www.linkedin.com/in/mosessiame/)
- **GitHub**: [mosessiame](https://github.com/mosessiame)

---

Thank you for visiting my portfolio! I hope you enjoy exploring my work as much as I enjoyed creating it.
