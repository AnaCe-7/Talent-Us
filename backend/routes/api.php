<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\serviceController;
use App\Http\Controllers\ServicesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(ServicesController::class)->group(function(){
    Route::get('/services', 'index');
    Route::post('/service', 'store');
    Route::get('/service/{id}', 'show');
    Route::put('/service/{id}', 'update');
    Route::delete('/service/{id}', 'destroy');
});