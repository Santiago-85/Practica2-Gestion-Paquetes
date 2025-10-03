[Read this in Spanish](README.es.md)

---

# Practice #2 - Angular Package Management App

This project was developed as part of Practice No. 2 for the Web Programming course at Universidad Mesoamericana. The application allows users to register and track shipping packages, meeting all the specified requirements.

##  Key Features

* **Order Creation**: A form to register new packages with custom validations (name, email, description, etc.).
* **Order Update**: Allows searching for an order by its package number and updating its status following a logical transition sequence.
* **Package Tracking**: A view for the end-user to track their package using a unique tracking ID and view the update history.
* **In-Memory State Management**: Uses an Angular Service to manage the application's state and share data between components without a database.
* **Responsive Design**: The interface is fully responsive and adapts to different screen sizes, from mobile to desktop, using Bootstrap.

##  Tech Stack

* **Framework**: Angular
* **Language**: TypeScript
* **Styling**: Bootstrap 5
* **Version Control**: Git & GitHub

##  How to Run The Project Locally

To run this project on your own machine, follow these steps:

1.  Clone or download the repository.
2.  Open a terminal in the project's root folder.
3.  Install the necessary dependencies with the command:
    ```bash
    npm install
    ```
4.  Start the Angular development server with the command:
    ```bash
    ng serve -o
    ```
5.  The application will automatically open in your browser at `http://localhost:4200/`.