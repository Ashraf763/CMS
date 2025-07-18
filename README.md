# CMS Project

Objective: To develop a responsive website for Company ABC with a dynamic heading controlled via a CMS. The assignment aims to demonstrate skills in front-end development (pixel-perfect design from Figma), back-end development (API creation and database interaction), and full-stack integration (CMS-driven content update). The expected learning outcomes include proficiency in responsive design, database management, API development, and content management system integration.

## Overview

This project is a Content Management System (CMS) designed to simplify the creation, management, and publishing of digital content. It provides a user-friendly interface to manage various content types (i.e.., Heading), without requiring specialized technical knowledge.

## deployed Links
  FrontEnd: cmsah.netlify.app
  BackEnd: cms-seven-sand.vercel.app

## Features

*FrontEnd
  -  Hard-code all static text and elements as specified in the Project requirement.
  -  Create a placeholder for the dynamic heading that will be fetched from the API.
  -  Implement a GET request to fetch the heading text from the back-end API. Update the heading placeholder with the retrieved data.
  -  Implement a POST request to fetch and update the heading text.
  -   Break down the landing page into reusable components for better organization and maintainability.

* Backend
  - API Endpoints: Create two API endpoints:
      POST Endpoint ("/api/heading"): This endpoint will receive the heading text from the CMS page and save it to the database.
      GET Endpoint ("/api/heading"): This endpoint will retrieve the heading text from the database and return it as a JSON response.
  - Save Button: Add a button to trigger the saving of the text to the database.

*   **Content Creation & Editing:**  Intuitive tools for creating, editing, and formatting text, images, and other media.
*   **User-Friendly Interface:** A dashboard and editors that make content management accessible to both technical and non-technical users.
*   **Template Management:** Use of templates/themes to maintain consistent design and branding across the website.

## Installation

To set up and run this CMS project locally, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Ashraf763/CMS.git
    cd CMS
    ```
.  **Install Dependencies:** 
    npm install

    backend libraries
    mongoose, expess, cors, dotenv

    frontend libraries:
    react, react-router-dom, axios, react-icons
    
    ```

5.  **Start the Server:**
    ```bash
    # frontEnd:
    cd client
    npm start

    #backend:
    cd server
    npm start
    ```

