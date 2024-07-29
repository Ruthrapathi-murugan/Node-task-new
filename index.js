import express from "express";
import isEqual from "lodash/isEqual.js";
import { createFile, readFolder } from "./fs-utils.js";

const app = express();

// Endpoint to create a new file in the system
app.get("/create-file", (req, res) => {
  createFile();
  res.send({ msg: "File created successfully" });
});

// Endpoint to read all files from the filesystem
app.get("/read-files", (req, res) => {
  const files = readFolder("files");
  res.send(files);
});

app.listen(5000, () => {
  console.log("APIs listening on port 5000");
});
