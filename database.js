const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./laundry.db", (err) => {
  if (err) console.error("Gagal mengkoneksikan ke database:", err);
  else console.log("✅ Terkoneksi ke database");
});

// Tabel
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nama TEXT NOT NULL,
      pelanggan TEXT NOT NULL,
      status TEXT NOT NULL
    )
  `);
});

module.exports = db;
