import express from 'express';
import { createFile, readFolder } from './fs-utils.js';

const app = express();

// For creating a new file in the system
app.get('/create-file', (req, res) => {
  createFile();
  res.send({ msg: 'File created successfully' });
});

// For reading the files from the filesystem
app.get('/read-files', (req, res) => {
  const files = readFolder('files');
  res.send(files);
});

app.listen(5000, () => {
  console.log('APIs Listening on 5000');
});
