const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.set('view engine', 'ejs');

// Home route: List all files in the 'files' directory
app.get('/', (req, res) => {
  fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading files');
    }
    res.render('index', { files: files });
  });
});

// Show route: Display the contents of a specific file
app.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'files', filename);

  fs.readFile(filePath, 'utf-8', (err, filedata) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(404).send('File not found');
    }
    res.render('show', { filename, filedata });
  });
});

// Create file: Handle form submission to create a new file
app.post('/file', (req, res) => {
  const filename = req.body.title.split(' ').join('') + '.txt';
  const filePath = path.join(__dirname, 'files', filename);

  fs.writeFile(filePath, req.body.details, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).send('Failed to create file');
    }
    res.redirect('/');
  });
});

// GET: Edit file page
app.get("/edit/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'files', filename);

  fs.readFile(filePath, 'utf-8', (err, filedata) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(404).send("File not found");
    }
    res.render("edit", { filename, filedata });
  });
});

// POST: Save edited file
app.post('/edit/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'files', filename);
  const updatedContent = req.body.details;

  fs.writeFile(filePath, updatedContent, (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).send('Failed to save file');
    }
    res.redirect('/file/' + filename);
  });
});

// GET: Confirm delete file page
app.get('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  res.render('delete', { filename });
});

// POST: Actually delete the file
app.post('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'files', filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return res.status(500).send('Failed to delete file');
    }
    res.redirect('/');
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});