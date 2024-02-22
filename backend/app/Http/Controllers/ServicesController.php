<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;


class ServicesController extends Controller
{
    public function index(){
        $services = Service::all();
        return $services;
    }

    public function store(Request $request){
        $service = new Service;
        $service -> name = $request -> name;
        $service -> precio = $request -> precio;

        $service -> save();
        return $service;
    }

    public function show($id){
        $service = Service::find($id);
        return $service;
    }

    public function update(Request $request, $id){
        $service = Service::findOrFail($request->id);
        $service -> name = $request -> name;
        $service -> precio = $request -> precio;

        $service -> save();
        return $service;
    }

    public function destroy($id){
        $service = Service::destroy($id);
        return $service;
    }

    

}