# ChatterBox 💬

ChatterBox is a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. It allows users to sign up, log in, and instantly connect with other registered users for private, real-time conversations.

![ChatterBox Screenshot](./path/to/your/screenshot.png)
*(Replace this with a screenshot of your application!)*

## ✨ Live Demo

Check out the live version of the project here: **[Live Demo Link](https://your-vercel-link-goes-here.com)**
*(Replace this with your Vercel deployment link!)*

## 🚀 Features

- **User Authentication:** Secure user registration and login system using JWT (JSON Web Tokens) and hashed passwords.
- **Real-Time Messaging:** Instant message delivery and reception using WebSockets via Socket.io.
- **User Discovery:** View a list of all signed-up users on the sidebar to easily start a conversation.
- **Clean, Responsive UI:** A modern and intuitive user interface built with React and styled with Tailwind CSS.
- **Efficient State Management:** Uses Zustand for lightweight and effective global state management on the frontend.

## 🛠️ Tech Stack

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Zustand](https://zustand-demo.pmnd.rs/) (for State Management)
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
- **Database:**
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)
- **Real-Time Communication:**
  - [Socket.IO](https://socket.io/) (Client & Server)
- **Authentication:**
  - [JSON Web Tokens (JWT)](https://jwt.io/)
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs)

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or a local MongoDB server.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Sourabhbajaj11-01/ChatterBox.git](https://github.com/Sourabhbajaj11-01/ChatterBox.git)
    cd ChatterBox
    ```

2.  **Install backend dependencies:**
    ```sh
    npm install
    ```

3.  **Install frontend dependencies:**
    ```sh
    cd frontend
    npm install
    cd ..
    ```

4.  **Create a `.env` file** in the root directory of the project and add the following environment variables.
    ```env
    PORT=5000
    MONGO_DB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

### Running the Application

1.  **Start the backend server** (from the root directory):
    ```sh
    npm run server
    ```
    Your server will be running on `http://localhost:5000`.

2.  **Start the frontend development server** (from the `frontend` directory):
    ```sh
    cd frontend
    npm run dev
    ```
    Your application will be available at `http://localhost:3000`.
