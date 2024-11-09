

# Pinterest Clone

A Pinterest-style web application built with Node.js, Express, and EJS.

## Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB (Local installation or MongoDB Atlas account)
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/AyanB-dev/pinterest_clone.git
cd pinterest_clone
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory and add the following environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
```

## Project Setup

1. Make sure MongoDB is running on your system or you have a valid MongoDB Atlas connection string

2. Initialize the database:
```bash
# Start MongoDB locally if you're using local installation
mongod
```

3. Start the development server:
```bash
# Using normal node
npm start

```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Features

- User authentication (using Passport.js)
- Image upload functionality
- Pinterest-style grid layout
- User profiles
- Save and organize pins

## Tech Stack

- Frontend: EJS (49%), CSS (23.4%)
- Backend: JavaScript/Node.js (27.6%)
- Database: MongoDB
- Authentication: Passport.js
- File Upload: Multer

## Dependencies

- express: Web application framework
- ejs: Template engine
- mongoose: MongoDB object modeling
- passport: Authentication middleware
- multer: File upload handling
- express-session: Session middleware
- connect-flash: Flash messages
- And more (see package.json for complete list)

## Development Dependencies

- nodemon: Development server with auto-reload
- eslint: Code linting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
