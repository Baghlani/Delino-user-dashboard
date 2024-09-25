# User Management Dashboard

This project is a User Management Dashboard built using Kendo UI and TypeScript. It fetches user data from an API and displays it in a Kendo Grid with features like pagination, sorting, filtering, and more.

## Features

- Fetches user data from an external API.
- Displays data in a Kendo Grid.
- Supports pagination, sorting, filtering, and scrolling.
- Detailed view for each user, including a map based on their location.
- Optimized and minified assets.
- Code splitting and chunking for better performance.
- Scripts are lazy-loaded to be downloaded only when needed, reducing initial load size.
- Fully responsive.

## Installation

To install the dependencies, run the following command:

```bash
npm install
```

## Running the Development Server

To start the development server, use the following command:

```bash
npm run dev
```

This will create a `dist` directory with the compiled files.

## Starting the Production Server

To start the production server, use:

```bash
npm start
```

This will serve the files from the `dist` directory at `http://localhost:9000`.

## Project Structure

- `src/scripts`: Contains the TypeScript files for the project.
- `src/styles`: Contains the SCSS files for styling.
- `src/index.html`: The main HTML file.
- `webpack.config.js`: Webpack configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Project dependencies and scripts.
