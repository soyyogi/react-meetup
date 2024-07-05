# React Meetup Application

This project is a React-based web application for managing meetups. Users can view all meetups, add new meetups, and manage their favorite meetups.

## Features

- **View All Meetups:** See a list of all meetups available.
- **Add New Meetup:** Add a new meetup with title, image, address, and description.
- **Manage Favorites:** Mark meetups as favorites and view them separately.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **React Router:** For declarative routing within the application.
- **React Context API:** For managing global state like favorites.
- **Enzyme:** For unit testing React components.
- **Jest:** Testing framework used with Enzyme for unit and integration tests.
- **CSS Modules:** Local scope CSS by default to avoid style conflicts.

## Project Structure

The project structure is organized into components, services, and pages:

- **components:** Reusable UI components.
- **services:** Routing service and state management.
- **pages:** Main application views/routes.

## Getting Started

### Prerequisites

- Node.js installed on your local development machine.

### Instructions:

1. **Installation Steps:**

   - Clone the repository:
     ```bash
     git clone <repository_url>
     cd react-meetup
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

2. **Running the Application:**

   - To start the development server:
     ```bash
     npm start
     ```
   - The application will be available at `http://localhost:3000`.

3. **Running Tests:**

   - To run tests using Jest and Enzyme:
     ```bash
     npm test
     ```

4. **Building the Application:**
   - To build the application for production:
     ```bash
     npm run build
     ```
   - The production build will be located in the `build` directory.
