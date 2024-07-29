import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a file with the current timestamp
const createFile = () => {
  console.log('Creating file');
  try {
    const dir = path.join(__dirname, 'files');
    console.log(`Directory path: ${dir}`);
    if (!fs.existsSync(dir)) {
      console.log('Directory does not exist. Creating...');
      fs.mkdirSync(dir, { recursive: true });
      console.log('Directory created');
    } else {
      console.log('Directory already exists');
    }
    
    // Double-check if the directory exists
    if (fs.existsSync(dir)) {
      const fileName = path.join(dir, `${new Date().toISOString()}.txt`);
      console.log(`File path: ${fileName}`);
      fs.writeFileSync(fileName, `${Date.now()}`);
      console.log(`File created: ${fileName}`);
    } else {
      console.log('Failed to create directory.');
    }
  } catch (e) {
    console.log(`Error writing file: ${e.message}`);
  }
};

// Function to read the files in a folder
const readFolder = (folderName) => {
  try {
    const dir = path.join(__dirname, folderName);
    if (!fs.existsSync(dir)) {
      console.log(`Folder does not exist: ${folderName}`);
      return [];
    }
    const files = fs.readdirSync(dir);
    return files;
  } catch (e) {
    console.log(`Error reading folder: ${e.message}`);
    return [];
  }
};

export { createFile, readFolder };
