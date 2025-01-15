// Import Model Alumni
const Alumni = require("../models/Alumni");

class AlumniController {
  // Fungsi untuk mendapatkan semua data alumni
  async index(req, res) {
    try {
      const alumniList = await Alumni.getAllAlumni();
      res.status(200).json({ message: "Data alumni berhasil diambil", data: alumniList });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data alumni", error });
    }
  }

  // Fungsi untuk menambahkan data alumni baru
  async store(req, res) {
    try {
      const newAlumni = await Alumni.createAlumni(req.body);
      res.status(201).json({ message: "Alumni berhasil ditambahkan", data: newAlumni });
    } catch (error) {
      res.status(422).json({ message: "Terjadi kesalahan saat menambahkan alumni", error });
    }
  }

  // Fungsi untuk mendapatkan data alumni berdasarkan ID
  async show(req, res) {
    try {
      const id = req.params.id;
      const alumni = await Alumni.getAlumniById(id);
      if (alumni) {
        res.status(200).json({ message: "Data alumni berhasil diambil", data: alumni });
      } else {
        res.status(404).json({ message: "Alumni tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data alumni", error });
    }
  }

  // Fungsi untuk memperbarui data alumni
  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedAlumni = await Alumni.updateAlumni(id, req.body);
      if (updatedAlumni) {
        res.status(200).json({ message: "Data alumni berhasil diperbarui", data: updatedAlumni });
      } else {
        res.status(404).json({ message: "Alumni tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat memperbarui data alumni", error });
    }
  }

  // Fungsi untuk menghapus data alumni
  async destroy(req, res) {
    try {
      const id = req.params.id;
      const result = await Alumni.deleteAlumni(id);
      if (result) {
        res.status(200).json({ message: "Alumni berhasil dihapus" });
      } else {
        res.status(404).json({ message: "Alumni tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat menghapus data alumni", error });
    }
  }

  // Fungsi untuk mencari alumni berdasarkan nama
  async search(req, res) {
    try {
      const name = req.params.name;
      const alumni = await Alumni.searchAlumniByName(name);
      if (alumni.length > 0) {
        res.status(200).json({ message: "Data alumni berhasil ditemukan", data: alumni });
      } else {
        res.status(404).json({ message: "Alumni tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat mencari alumni", error });
    }
  }

  // Fungsi untuk mendapatkan alumni dengan status fresh graduate
  async freshGraduate(req, res) {
    try {
      const alumni = await Alumni.findByStatus("fresh-graduate");
      res.status(200).json({ message: "Data alumni fresh graduate berhasil diambil", data: alumni });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data alumni fresh graduate", error });
    }
  }

  // Fungsi untuk mendapatkan alumni yang bekerja
  async employed(req, res) {
    try {
      const alumni = await Alumni.findByStatus("employed");
      res.status(200).json({ message: "Data alumni yang bekerja berhasil diambil", data: alumni });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data alumni yang bekerja", error });
    }
  }

  // Fungsi untuk mendapatkan alumni yang belum bekerja
  async unemployed(req, res) {
    try {
      const alumni = await Alumni.findByStatus("unemployed");
      res.status(200).json({ message: "Data alumni yang belum bekerja berhasil diambil", data: alumni });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data alumni yang belum bekerja", error });
    }
  }
}

// Membuat object AlumniController
const object = new AlumniController();

// Export object AlumniController
module.exports = object;
