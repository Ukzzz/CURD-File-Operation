# File Management System

A simple and intuitive web-based file management system built with Node.js, Express, and EJS. This application allows users to create, read, edit, and delete text files through a clean and responsive web interface.

## Features

- **Create Files**: Create new text files with a title and content
- **View Files**: Read the contents of any file
- **Edit Files**: Update the content of existing files
- **Delete Files**: Remove files you no longer need
- **Responsive Design**: Works on both desktop and mobile devices
- **Simple UI**: Clean and intuitive user interface built with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
.
├── app.js              # Main application file
├── package.json        # Project dependencies and scripts
├── views/              # EJS templates
│   ├── delete.ejs      # Delete confirmation page
│   ├── edit.ejs        # File editing interface
│   ├── index.ejs       # Main page with file list and creation form
│   └── show.ejs        # File viewing page
└── files/              # Directory where files are stored
```

## Usage

1. **Create a new file**:
   - Enter a title and content in the form
   - Click "Create File"
   - The file will be saved with the title as the filename (spaces removed) and .txt extension

2. **View a file**:
   - Click on the file name in the list
   - The file content will be displayed

3. **Edit a file**:
   - Click the "Edit" link next to the file
   - Modify the content
   - Click "Save Changes" to update the file

4. **Delete a file**:
   - Click the "Delete" link next to the file
   - Confirm deletion on the confirmation page

## Dependencies

- Express.js - Web framework for Node.js
- EJS - Templating engine for generating HTML
- Tailwind CSS - Utility-first CSS framework
- Nodemon - Development dependency for automatic server restarts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [ISC License](LICENSE).
