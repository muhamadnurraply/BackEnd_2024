<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Echo_;

class AnimalsController extends Controller
{
    private $animals =[];

    public function __construct()
    {
        $this->animals = ['kuskus', 'biawak', 'kadal gunung'];
    }


    public function index() {
        echo "List my animals:\n";
        foreach ($this->animals as $index => $animal) {
            echo ">> " . $animal . "\n";
        }
    }

    public function store(Request $request)
    {
        $newAnimal = $request->input('name');
        $this->animals[] = $newAnimal;
        echo " New animal has added '$newAnimal'\n\n";
        $this->index();
    }

    public function update(Request $request, $index)
    {
        $newAnimal = $request->input('name');

        if (isset($this->animals[$index])) {
            $oldAnimal = $this->animals[$index];
            $this->animals[$index] = $newAnimal;

            echo " animal '$oldAnimal' has been modified '$newAnimal'. \n\n" ;
        }

        else {
            echo "This animal $index not define. \n\n";
        }

        $this->index();

    }

    public function destroy($index) {
        if (isset($this->animals[$index])) {
            $deletedAnimal = $this->animals[$index];
            
            unset($this->animals[$index]);
            
            echo "animal '$deletedAnimal' has deleted.\n\n";
        } else {
            echo "this animal $index not define.\n\n";
        }
        
        $this->index();
    }
    
}


