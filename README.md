# Bloggram

A simple blog website built with Node.js, Express, and EJS.

## Features

- Home page
- About page
- Create and view blog posts
- Contact page
- Responsive design with gradient styling

## Tech Stack

- **Backend**: Node.js, Express
- **Templating**: EJS
- **Styling**: CSS
- **Development**: Nodemon

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will run on `http://localhost:3000`

## Project Structure

```
Bloggram/
├── index.js           # Main server file
├── package.json       # Project dependencies
├── public/            # Static files
│   ├── images/        # Image assets
│   └── styles/        # CSS stylesheets
└── views/             # EJS templates
    ├── partials/      # Reusable template components
    ├── home.ejs
    ├── about.ejs
    ├── blogs.ejs
    ├── create.ejs
    ├── contact.ejs
    ├── result.ejs
    └── signIn.ejs
```

## Available Routes

- `GET /` - Home page
- `POST /` - Home page (POST handler)
- `GET /about` - About page
- `GET /blogs` - View all blogs
- `POST /blogs` - Create a new blog
- `GET /contact` - Contact page
- `GET /create` - Create blog form
- `POST /submit` - Submit user information

## License

ISC
