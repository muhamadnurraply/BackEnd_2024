// Import database connection
const db = require("../config/database");

class Alumni {
  // Fungsi untuk mendapatkan semua data alumni
  static getAllAlumni() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM alumni";
      db.query(query, (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  }

  // Fungsi untuk menambahkan data alumni baru
  static createAlumni(data) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO alumni (name, phone, address, graduation_year, status, company_name, position)
                     VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const { name, phone, address, graduation_year, status, company_name, position } = data;
      db.query(query, [name, phone, address, graduation_year, status, company_name, position], (error, results) => {
        if (error) return reject(error);
        resolve({ id: results.insertId, ...data });
      });
    });
  }

  // Fungsi untuk mendapatkan data alumni berdasarkan ID
  static getAlumniById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM alumni WHERE id = ?";
      db.query(query, [id], (error, results) => {
        if (error) return reject(error);
        resolve(results[0] || null);
      });
    });
  }

  // Fungsi untuk memperbarui data alumni
  static updateAlumni(id, data) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE alumni SET name = ?, phone = ?, address = ?, graduation_year = ?, status = ?, company_name = ?, position = ?
                     WHERE id = ?`;
      const { name, phone, address, graduation_year, status, company_name, position } = data;
      db.query(query, [name, phone, address, graduation_year, status, company_name, position, id], (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows > 0 ? { id, ...data } : null);
      });
    });
  }

  // Fungsi untuk menghapus data alumni
  static deleteAlumni(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM alumni WHERE id = ?";
      db.query(query, [id], (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows > 0);
      });
    });
  }

  // Fungsi untuk mencari alumni berdasarkan nama
  static searchAlumniByName(name) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM alumni WHERE name LIKE ?";
      db.query(query, [`%${name}%`], (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  }

  // Fungsi untuk mendapatkan alumni berdasarkan status
  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM alumni WHERE status = ?";
      db.query(query, [status], (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  }
}

module.exports = Alumni;
