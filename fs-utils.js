import fs from "fs";

// Function to create a new file in the "files" directory
const createFile = () => {
  try {
    if (!fs.existsSync("files")) {
      fs.mkdirSync("files");
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Create a timestamp
    fs.writeFileSync(`./files/${timestamp}.txt`, `${Date.now()}`);
  } catch (e) {
    console.log(`Error writing file: ${e.message}`);
  }
};

// Function to read all files in a folder
const readFolder = (folderName) => {
  try {
    const files = fs.readdirSync(folderName);
    return files;
  } catch (e) {
    console.log(`Error reading folder: ${e.message}`);
    return [];
  }
};

export { createFile, readFolder };
