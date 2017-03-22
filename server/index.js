const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const multer = require("multer");
const appName = "Trifecta";
const port = "3000";

const multerOptions = {};
multerOptions.storage = multer.diskStorage({
  destination: (req, file, withUploadDir) => {
    withUploadDir(null, 'uploads/')
  },
  filename: (req, file, withFilename) => {
    const filenameArray = file.originalname.split(".");
    const fileExtension = filenameArray.pop();
    const filename = filenameArray.join();

    withFilename(null, `${filename}-${Date.now()}.${fileExtension}`);
  }
})

const upload = multer(multerOptions);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client")));
app.use(express.static(path.join(__dirname, "../server")));

app.get("/", (req, res, next) => res.sendFile(path.join(__dirname, "../client/") + "index.html"));

app.post("/api/upload", upload.single("pic"), (req, res, next) => {
  console.log(req.file);
  res.sendStatus(200);
});

app.use((req, res, next) => {
	res.sendStatus(404);
});

app.use((err, req, res, next) => {
	console.error(err);
	res.sendStatus(500);
});

app.listen(port, (err) => {
	if (err) console.log(`Error: ${err}`);
	console.log(`${appName} listening on port ${port}!`);
});
