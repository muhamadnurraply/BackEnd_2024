// import Model Student
const Student = require("../models/student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {

    try {
      // Mengambil data dari request body
      const { nama, nim, id, jurusan } = req.body;
      const studentData = { nama, nim, id, jurusan };

      // Memanggil method create dari model Student
      const newStudent = await Student.create(studentData);

      const data = {
        message: "Menambahkan data student",
        data: newStudent,
      };

      res.json(data);
    } catch (err) {
      // Menangani error
      res.status(500).json({
        message: "Terjadi kesalahan saat menambahkan data student",
        error: err.message,
      });
    }
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
