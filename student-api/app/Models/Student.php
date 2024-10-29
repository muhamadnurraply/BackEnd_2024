<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    // mass assigntment field, tanpa id, created_at, dan updated_at
    protected $fillable = ['name', 'nim', 'email', 'majority'];
}
