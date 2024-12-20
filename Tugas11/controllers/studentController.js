// Import data students dari folder data/students.js
const students = require('../data/students');

// Membuat Class StudentController
class StudentController {
    index(req, res) {
        // Menampilkan semua data students
        res.json({
            message: 'Berikut adalah daftar mahasiswa:',
            data: students
        });
    }

    store(req, res) {
        // Menambahkan data student baru
        const { name, age, major } = req.body;
        const newStudent = { 
            id: students.length + 1, 
            name, 
            age, 
            major 
        };
        students.push(newStudent);
        res.json({
            message: 'Mahasiswa baru berhasil ditambahkan!',
            data: newStudent
        });
    }

    update(req, res) {
        // Memperbarui data student berdasarkan ID
        const { id } = req.params;
        const { name, age, major } = req.body;
        const student = students.find((s) => s.id === parseInt(id));

        if (student) {
            student.name = name || student.name;
            student.age = age || student.age;
            student.major = major || student.major;
            res.json({
                message: 'Data mahasiswa berhasil diperbarui!',
                data: student
            });
        } else {
            res.status(404).json({
                message: 'Mahasiswa dengan ID tersebut tidak ditemukan.'
            });
        }
    }

    destroy(req, res) {
        // Menghapus data student berdasarkan ID
        const { id } = req.params;
        const index = students.findIndex((s) => s.id === parseInt(id));

        if (index !== -1) {
            const deletedStudent = students.splice(index, 1);
            res.json({
                message: 'Data mahasiswa berhasil dihapus.',
                data: deletedStudent
            });
        } else {
            res.status(404).json({
                message: 'Mahasiswa dengan ID tersebut tidak ditemukan.'
            });
        }
    }
}

// Membuat object StudentController
const studentController = new StudentController();

// Export object StudentController
module.exports = studentController;
