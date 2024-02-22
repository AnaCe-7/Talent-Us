<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'title',
        'description',
        'image',
        'requirements',
        'participants',
        'id_user',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }

    // public function bookings()
    // {
    //     return $this->hasMany(Booking::class, 'id_service', 'id');
    // }
}
