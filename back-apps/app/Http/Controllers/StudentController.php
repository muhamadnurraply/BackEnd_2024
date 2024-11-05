<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student; // Tambahkan baris ini
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
   
    public function index()
    {

        // cara melihat data 
        $students = Student::all(); //pake eloquent

        if ($students->isEmpty()) {
            return response()->json(['message' => 'Tidak ada data mahasiswa ditemukan!'], 404);
        }
        
        $response = [
            'message' => 'Berhasil Menampilkan Semua Data Mahasiswa',
            'data' => $students
        ];

        return response()->json($response, 200);
    }

    public function show($id) {
        $student = Student::find($id);

        if($student) {
            if ($student) {
            return response()->json($student, 200);
            }
    
        return response()->json(['message' => 'Data Mahasiswa tidak ditemukan!!!'], 404);
        
        }
     }

    public function create(){
        //
    }
   
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'nim' => 'required|string|max:10',
            'email' => 'required|email',
            'jurusan' => 'required|string|max:100'
        ], [
            'nama.required' => 'Input gagal nama harus diisi dahulu.',
            'nim.required' => 'Input gagal NIM harus diisi dahulu.',
            'email.required' => 'Input gagal Email harus diisi dahulu.',
            'email.email' => 'Format email tidak valid',
            'jurusan.required' => 'Input gagal Jurusan harus diisi dahulu.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validasi gagal!!!',
                'errors' => $validator->errors()
            ], 422);
        }

        $input = $validator->validated();
   
       $student = Student::create($input);

       $response = [
            'message' => 'Berhasil menambahkan data!',
            'response' => $student
       ];

       return response()->json($response,201);
    }

  
    public function update(Request $request, string $id)
    {
        // mencari student id
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Data Mahasiswa tidak di temukan'], 404);
        }

        $input = [
            'nama' => $request->nama ?? $student->nama,
            'nim' => $request->nim ?? $student->nim,
            'email' => $request->email ?? $student->email,
            'jurusan' => $request->jurusan ?? $student->jurusan,
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
