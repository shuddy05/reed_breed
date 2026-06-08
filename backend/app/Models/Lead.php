<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'company',
        'contact',
        'email',
        'phone',
        'website',
        'details',
        'status',
        'industry'
    ];
}
