class StudentControllers{
    index(req, res) {
        const data = {
        'message': "Menampilkan semua students",
        'data' :[],
        }
        res.json(data);
    }
    store(req, res) {
        const{nama} = req.body;
        res.send(`Menambahkan Students: ${nama}`)
    }
    update(req, res) {
        const{id} = req.params;
        const{nama} = req.body
        res.send(`Mengedit Students id ${id}, nama ${nama}`)
    }
}
const object = new StudentControllers;

module.exports = object;