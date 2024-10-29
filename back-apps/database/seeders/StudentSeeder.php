<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('student')->insert([
            [
                "nama" => "rahma",
                "nim" => "01123098",
                "email" => "rahma@gmail.com",
                "jurusan" => "SI",
            ],
            [
                "nama" => "Sinta",
                "nim" => "0110223088",
                "email" => "sinta@gmail.com",
                "jurusan" => "BD",
            ],
        ]);
    }
}
