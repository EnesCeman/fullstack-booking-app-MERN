# Airbnb Clone

A full-stack Airbnb clone project that replicates the Airbnb website's core functionality. This project is built using the MERN stack (MongoDB, Express.js, React, Node.js) and incorporates various technologies for styling, image storage, authentication, and more.

## Features

- Full-stack implementation using the MERN (MongoDB, Express.js, React, Node.js) framework.
- Utilizes Amazon AWS S3 for storing images and media files.
- Styling powered by Tailwind CSS for a sleek and modern design.
- MongoDB as the database for storing user data, listings, bookings, and more.
- Creation of data models in the code using Mongoose for populating MongoDB.
- Secure password hashing with bcryptjs for user authentication.
- Token-based user authentication using JSON Web Tokens (JWT) and cookie-parser.
- Users can add new places to the platform.
- Tracking and management of created bookings for each user.
- State management using UserContextProvider.
- Pagination implemented using Routes and Route for an enhanced user experience.

## Technologies Used

- MERN Stack: MongoDB, Express.js, React, Node.js for building a full-stack web application.
- Amazon AWS S3: Storage solution for hosting and serving images and media files.
- Tailwind CSS: A utility-first CSS framework for creating a responsive and modern UI.
- MongoDB: A NoSQL database for data storage and retrieval.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB.
- bcryptjs: A library for securely hashing user passwords.
- JSON Web Tokens (JWT): Tokens used for user authentication and authorization.
- cookie-parser: Middleware for parsing cookies sent in HTTP requests.
- React Context API: For managing and sharing state across components.
- React Router: A library for handling client-side routing in React applications.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and configure your connection in the code.
4. Configure Amazon AWS S3 for image storage (if not already done).
5. Run the development server using `npm start`.
6. Visit `http://localhost:3000` in your browser to explore the Airbnb clone.

## Demo

Check out the [demo](https://fullstack-booking-app-mern.vercel.app/) of the Airbnb clone project, deployed on Vercel.
