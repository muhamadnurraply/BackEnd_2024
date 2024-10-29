<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student; // Tambahkan baris ini

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
        
        $response = [
            'message' => 'Success Showing All Students Data',
            'data' => $students
        ];

        return response()->json($response, 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $input = [
        'name' => $request->name,
        'nim' => $request->nim,
        'email' => $request->email,
        'majority' => $request->majority
       ];

       $input = $request->only(['name', 'nim', 'email', 'majority']);
       $student = Student::create($input);

       return response()->json([
        'message' => 'Successfully created new student',
        'data' => $student
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Student::find($id);

        if ($student) {
            return response()->json($student, 200);
        }

        return response()->json(['message' => 'Student not found'], 404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->name = $request->input('name', $student->name);
        $student->nim = $request->input('nim', $student->nim);
        $student->email = $request->input('email', $student->email);
        $student->majority = $request->input('majority', $student->majority);
        $student->save();

        return response()->json(['message' => 'Student updated successfully', 'data' => $student], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->delete();

        return response()->json(['message' => 'Student deleted successfully'], 200);
    }
}
