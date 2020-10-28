var express = require("express");
var app = express();
var server = require("http").Server(app);
const fs = require("fs");

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"X-Requested-With, Content-type,Accept,X-Access-Token,X-Key"
	);

	res.header("Access-Control-Allow-Origin", "*");
	next();
});

const dataPath = "server/data/persons.json";
const dataPathCars = "server/data/cars.json";

const readFile = (callback, returnJson = false) => {
	fs.readFile(dataPath, "utf8", (err, data) => {
		if (err) {
			throw err;
		}

		callback(returnJson ? JSON.parse(data) : data);
	});
};

const readFileCars = (callback, returnJson = false) => {
	fs.readFile(dataPathCars, "utf8", (err, data) => {
		if (err) {
			throw err;
		}

		callback(returnJson ? JSON.parse(data) : data);
	});
};

const writeFile = (fileData, callback) => {
	fs.writeFile(dataPath, fileData, "utf8", (err) => {
		if (err) {
			throw err;
		}

		callback();
	});
};

const writeFileCars = (fileData, callback) => {
	fs.writeFile(dataPathCars, fileData, "utf8", (err) => {
		if (err) {
			throw err;
		}

		callback();
	});
};

app.get("/hello", (req, res) => {
	res.status(200).send("Hello World!");
});

app.get("/persons", (req, res) => {
	readFile((data) => {
		res.status(200).send(data);
	}, true);
});

app.post("/addperson", (req, res) => {
	readFile((data) => {
		const position = Object.keys(data).length; // 5
		data[position] = req.body;

		writeFile(JSON.stringify(data, null, 2), () => {
			res.status(200).send("a new person has been added..");
		});
	}, true);
});

// CARS

app.get("/cars", (req, res) => {
	readFileCars((data) => {
		res.status(200).send(data);
	}, true);
});

app.post("/addcar", (req, res) => {
	readFileCars((data) => {
		const position = Object.keys(data).length; // 5
		data[position] = req.body;

		writeFileCars(JSON.stringify(data, null, 2), () => {
			res.status(200).send("a new car has been added..");
		});
	}, true);
});

server.listen(8080, () => {
	console.log("Server is running in http://localhost:8080");
});
