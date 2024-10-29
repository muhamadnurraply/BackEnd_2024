<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student; // Tambahkan baris ini

class StudentController extends Controller
{
   
    public function index()
    {

        // cara melihat data 
        $students = Student::all(); //pake eloquent
        
        $response = [
            'message' => 'Berhasil Menampilkan Semua Data Mahasiswa',
            'data' => $students
        ];

        return response()->json($response, 200);
    }

    public function create(){
        //
    }
   
    public function store(Request $request)
    {
       $input = [
        'nama' => $request->nama,
        'nim' => $request->nim,
        'email' => $request->email,
        'jurusan' => $request->jurusan
       ];

   
       $student = Student::create($input);

       $response = [
            'message' => 'Berhasil menambahkan data!',
            'response' => $student
       ];

       return response()->json($response,201);
    }

  
    public function update(Request $request, string $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Data Mahasiswa tidak di temukan'], 404);
        }

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ]; 

        $student->update($input);

        $response = [
            'message' => 'Berhasil mengubah data',
            'response' => $student,
        ];

        return response()->json($response, 200);
    }

    
     public function destroy(string $id)
     {
         $student = Student::find($id);

         if (!$student) {
             return response()->json(['message' => 'Data Mahasiswa tidak di temukan'], 404);
         }

         $student->delete();

         return response()->json(['message' => 'Data Mahasiswa berhasil dihapuus'], 200);
     }
}
