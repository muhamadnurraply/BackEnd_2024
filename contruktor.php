<?php
class Person{
    public $nama;
    public $alamat;
    public $jurusan;
    
    public function __construct($nama, $alamat, $jurusan)
    {
        $this->nama = $nama;
        $this->jurusan = $jurusan;
        $this->alamat = $alamat;
    }

    public function cetak(){
        echo 'nama' .$this->nama;
        echo 'alamat' .$this->alamat;
        echo 'jurusan' .$this->jurusan;
    }
}

$api = new Person('raply', 'bogor', 'ti');
$edo = new Person('desti', 'depok', 'si');

?>