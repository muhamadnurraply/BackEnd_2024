const express = require('express')
// Import express
// const express = require("express");
// Import router
const router = require("./routes/api.js");
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.listen(3000);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get("/students", (req, res) => {
//   res.send("Menampilkan semua students");
// });

// app.post("/students", (req, res) => {
//   res.send("Menambahkan data student");
// });

// app.put("/students", (req, res) => {
//   res.send("Mengedit student");
// });

// app.delete("/students", (req, res) => {
//   res.send("Menghapus student");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})