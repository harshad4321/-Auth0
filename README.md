# OAuth

## Description
OAuth is a simple Node.js application that demonstrates how to implement authentication and authorization using the OAuth 2.0 protocol. This project uses the Express.js framework and the express-openid-connect middleware to handle user authentication and authorization.

## Getting Started
To get started with this project, you'll need to have Node.js and NPM (Node Package Manager) installed on your computer. Then, clone the repository and install the project dependencies:

git clone https://github.com/<your-username>/oauth.git
cd oauth
npm install

After that, you can start the application by running the following command:

npm start


This will start the server and you can access the application at `http://localhost:3000`.

## Usage
The application provides a simple login page that allows users to sign in with their Google account using OAuth 2.0. Once logged in, users can view their profile information and log out.

## Dependencies
This project relies on the following third-party packages:

- `dotenv` for managing environment variables
- `express` for building web applications
- `express-openid-connect` for handling authentication and authorization
- `nodemon` for automatically restarting the server when changes are made

## License
This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
