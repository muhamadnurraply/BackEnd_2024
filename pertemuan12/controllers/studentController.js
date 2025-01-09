// Import Student model
const Student = require("../models/student");

class StudentController {
    // GET /students
    static async index(req, res) {
        try {
            const students = await Student.all();
            if (students.length > 0) {
                res.status(200).json({
                    message: "Menampilkan semua students",
                    data: students
                });
            } else {
                res.status(200).json({
                    message: "Student is empty"
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Terjadi kesalahan saat mengambil data students",
                error: err.message
            });
        }
    }

    // POST /students
    static async store(req, res) {
        const { nama, nim, umur, jurusan } = req.body;
        
        if (!nama || !nim || !umur || !jurusan) {
            return res.status(400).json({
                message: "Semua data harus dikirim"
            });
        }

        try {
            const newStudent = await Student.create({
                nama,
                nim,
                umur,
                jurusan,
                created_at: new Date(),
                updated_at: new Date()
            });

            res.status(201).json({
                message: "Menambahkan data student",
                data: newStudent
            });
        } catch (err) {
            res.status(500).json({
                message: "Terjadi kesalahan saat menambahkan data student",
                error: err.message
            });
        }
    }

    // GET /students/:id
    static async show(req, res) {
        const { id } = req.params;
        
        try {
            const student = await Student.find(id);
            if (student) {
                res.status(200).json({
                    message: "Menampilkan data student",
                    data: student
                });
            } else {
                res.status(404).json({
                    message: "Student not found"
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Terjadi kesalahan saat mengambil data student",
                error: err.message
            });
        }
    }

    // PUT /students/:id
    static async update(req, res) {
        const { id } = req.params;

        try {
            const student = await Student.find(id);
            if (student) {
                const updatedStudent = await Student.update(id, req.body);
                res.status(200).json({
                    message: "Mengedit data student",
                    data: updatedStudent
                });
            } else {
                res.status(404).json({
                    message: "Student not found"
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Terjadi kesalahan saat mengupdate data student",
                error: err.message
            });
        }
    }

    // DELETE /students/:id
    static async delete(req, res) {
        const { id } = req.params;

        try {
            const student = await Student.find(id);
            if (student) {
                await Student.delete(id);
                res.status(200).json({
                    message: `Menghapus data student ${student.nama}`
                });
            } else {
                res.status(404).json({
                    message: "Student not found"
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Terjadi kesalahan saat menghapus data student",
                error: err.message
            });
        }
    }
}

// Export StudentController
module.exports = StudentController;
