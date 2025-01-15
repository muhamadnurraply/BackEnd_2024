// Import database connection
// const db = require("../config/database");

class Alumni {
  // Fungsi untuk mendapatkan semua data alumni
  static async getAllAlumni() {
    const query = "SELECT * FROM alumni";
    const [rows] = await db.execute(query);
    return rows;
  }

  // Fungsi untuk menambahkan data alumni baru
  static async createAlumni(data) {
    const query = `INSERT INTO alumni (name, phone, address, graduation_year, status, company_name, position)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const { name, phone, address, graduation_year, status, company_name, position } = data;
    const [result] = await db.execute(query, [name, phone, address, graduation_year, status, company_name, position]);
    return { id: result.insertId, ...data };
  }

  // Fungsi untuk mendapatkan data alumni berdasarkan ID
  static async getAlumniById(id) {
    const query = "SELECT * FROM alumni WHERE id = ?";
    const [rows] = await db.execute(query, [id]);
    return rows[0] || null;
  }

  // Fungsi untuk memperbarui data alumni
  static async updateAlumni(id, data) {
    const query = `UPDATE alumni SET name = ?, phone = ?, address = ?, graduation_year = ?, status = ?, company_name = ?, position = ?
                   WHERE id = ?`;
    const { name, phone, address, graduation_year, status, company_name, position } = data;
    const [result] = await db.execute(query, [name, phone, address, graduation_year, status, company_name, position, id]);
    return result.affectedRows > 0 ? { id, ...data } : null;
  }

  // Fungsi untuk menghapus data alumni
  static async deleteAlumni(id) {
    const query = "DELETE FROM alumni WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return result.affectedRows > 0;
  }

  // Fungsi untuk mencari alumni berdasarkan nama
  static async searchAlumniByName(name) {
    const query = "SELECT * FROM alumni WHERE name LIKE ?";
    const [rows] = await db.execute(query, [`%${name}%`]);
    return rows;
  }

  // Fungsi untuk mendapatkan alumni berdasarkan status
  static async findByStatus(status) {
    const query = "SELECT * FROM alumni WHERE status = ?";
    const [rows] = await db.execute(query, [status]);
    return rows;
  }
}

module.exports = Alumni;
