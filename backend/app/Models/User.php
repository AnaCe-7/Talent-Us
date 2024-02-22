<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Service;
use App\Models\Booking;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'DNI',
        'name',
        'lastname',
        'email',
        'password',
        'phone',
        'interest',
        'expertise',
        'rol',
    ];

    protected $hidden = [
        'password',
    ];

    public function services()
    {
        return $this->hasMany(Service::class, 'id_users', 'id');
    }

    // public function bookings()
    // {
    //     return $this->hasMany(Booking::class, 'id_client', 'id');
    // }

    // public function providerBookings()
    // {
    //     return $this->hasMany(Booking::class, 'id_provider', 'id');
    // }
}
