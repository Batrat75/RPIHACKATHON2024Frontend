// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/request-pickup", (req, res) => {
  const { location } = req.body;
  console.log("Received pickup request at:", location);
  res.json({ status: "success", location });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
