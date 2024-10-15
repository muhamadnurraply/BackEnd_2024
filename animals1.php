<?php

class Animal
{
    private $animals = [];

    public function __construct($hewan)
    {
        $this->animals = $hewan;
    }

    public function index()
    {
        if ($this->animals) {
            foreach ($this->animals as $index => $animal) {
                echo ($index + 1) . ". " . $animal . "<br>";
            }
        } else {
            echo "Tidak ada data namaa hewannya....<br>";
        }
    }

    public function store($hewan)
    {
        $this->animals[] = $hewan;
        echo "$hewan berhasil ditambahkan...<br>";
    }

    public function update($index, $hewan)
    {
        if (isset($this->animals[$index])) {
            echo "{$this->animals[$index]} berhasil diganti dengan $hewan<br>";
            $this->animals[$index] = $hewan;
        } else {
            echo "Data hewan tidak ditemukan...<br>";
        }
    }

    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            echo "{$this->animals[$index]} sudah hilaaang....<br>";
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);  # Reset array index
        } else {
            echo "Data hewan tidak ditemukan...<br>";
        }
    }
}

$animal = new Animal(["macan", "kuskus", "biawak"]);

echo "Hewan yang saya punya: <br>";
$animal->index();
echo "<br>";

echo "Mendapat hewan baru: <br>";
$animal->store('Toke');
$animal->index();
echo "<br>";

echo "Mengupdate hewan: <br>";
$animal->update(0, 'macan kumbang');
$animal->index();
echo "<br>";

echo "Menghapus hewan: <br>";
$animal->destroy(3);
$animal->index();
echo "<br>";

?>
