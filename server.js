const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started and running at ${PORT}`);
});

//To render static content
app.use(express.static("public"));

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//To use router and All rooms routes
app.use("/api/rooms", require("./routes/api/rooms"));

//Home Route
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
