## Handicrafts Backend Server

This is the backend server for the Bangladeshi Handicrafts website, which provides APIs to manage businesses, products, reviews, blogs, and contact form submissions. The server is built using Node.js, Express, and MongoDB.

✨ Features

- Business Data Management:
  - Fetch all businesses.
  - Retrieve details of a specific business by its ID.
  - Fetch popular businesses based on the number of participants.
- Product Reviews:
  - Fetch all product reviews.
- Blogs:
  - Fetch all blogs available on the platform.
- Contact Form Handling:
  - Submit contact forms and store them in the database.

🚀 Technologies Used

- Backend Framework: Express.js
- Database: MongoDB (MongoDB Atlas)
- Middleware: CORS, dotenv, Express JSON
- Cloud Database: MongoDB Atlas

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER=yourMongoDBUsername`

`DB_PASS=yourMongoDBPassword`

`PORT=4000`

### How to run

```bash
npm install
nodemon index.js


```
