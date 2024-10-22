<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    // We use session to mimic the storage of animals, like the array in the previous example
    public function __construct()
    {
        if (!session()->has('animals')) {
            session()->put('animals', ['macan', 'kuskus', 'biawak']);
        }
    }

    // Display all animals
    public function index()
    {
        $animals = session('animals');
        if (!empty($animals)) {
            return view('animals.index', ['animals' => $animals]);
        } else {
            return "Tidak ada data namaa hewannya....<br>";
        }
    }

    // Add a new animal
    public function store(Request $request)
    {
        $newAnimal = $request->input('name');
        $animals = session('animals');
        $animals[] = $newAnimal;
        session()->put('animals', $animals);
        
        return "$newAnimal berhasil ditambahkan...<br>";
    }

    // Update an existing animal
    public function update(Request $request, $index)
    {
        $animals = session('animals');
        if (isset($animals[$index])) {
            $newAnimal = $request->input('name');
            $oldAnimal = $animals[$index];
            $animals[$index] = $newAnimal;
            session()->put('animals', $animals);
            
            return "$oldAnimal berhasil diganti dengan $newAnimal<br>";
        } else {
            return "Data hewan tidak ditemukan...<br>";
        }
    }

    // Delete an animal
    public function delete($index)
    {
        $animals = session('animals');
        if (isset($animals[$index])) {
            $deletedAnimal = $animals[$index];
            unset($animals[$index]);
            session()->put('animals', array_values($animals));  // Reset array index
            return "$deletedAnimal sudah hilaaang....<br>";
        } else {
            return "Data hewan tidak ditemukan...<br>";
        }
    }
}
