import express  from "express";
import fs from "fs"

const app = express();

app.get("/",function (request, response) {
    response.send("Welcome to Create File and Folder");
  });

app.post("/create", (request, response) => {
    const folder = "backup";
    const fileName = `currentDate.txt`;
    const fileContent = new Date().toString();
  
    fs.writeFile(`${folder}/${fileName}`, fileContent, (err) => {
      if (err) {
        console.error(err);
        response.status(500).send("Error creating file.");
      } else {
        response.send(`File ${fileName} created successfully.`);
      }
    });
  });

  app.get("/read", (request, response) => {
    const folder = "backup";
    const fileName = "currentDate.txt";
  
    fs.readFile(`${folder}/${fileName}`, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        response.status(500).send("Error reading file.");
      } else {
        response.send(data);
      }
    });
  });
  
  app.listen(8800, () => {
    console.log("Server has been connected");
  });