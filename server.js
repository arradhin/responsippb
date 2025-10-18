const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Tambah sepatu
app.post("/items", (req, res) => {
  const { nama, pelanggan, status } = req.body;
  if (!nama || !pelanggan || !status) {
    return res.status(400).json({ message: "Data belum lengkap" });
  }

  const query = `INSERT INTO items (nama, pelanggan, status) VALUES (?, ?, ?)`;
  db.run(query, [nama, pelanggan, status], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, nama, pelanggan, status });
  });
});

// read - Semua item +  status
app.get("/items", (req, res) => {
  const { status } = req.query;
  let query = "SELECT * FROM items";
  const params = [];

  if (status) {
    query += " WHERE LOWER(status) = LOWER(?)";
    params.push(status);
  }

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// read - ID
app.get("/items/:id", (req, res) => {
  const query = "SELECT * FROM items WHERE id = ?";
  db.get(query, [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Item tidak ditemukan" });
    res.json(row);
  });
});

// update
app.put("/items/:id", (req, res) => {
  const { nama, pelanggan, status } = req.body;
  const query = "UPDATE items SET nama = ?, pelanggan = ?, status = ? WHERE id = ?";
  db.run(query, [nama, pelanggan, status, req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: "Item tidak ditemukan" });
    res.json({ id: req.params.id, nama, pelanggan, status });
  });
});

// delete
app.delete("/items/:id", (req, res) => {
  const query = "DELETE FROM items WHERE id = ?";
  db.run(query, [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: "Item tidak ditemukan" });
    res.json({ message: "Item dihapus" });
  });
});

// server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
