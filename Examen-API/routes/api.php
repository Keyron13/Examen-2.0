<?php

use App\Http\Controllers\PeliculaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/pelicula',[PeliculaController::class,'index']);
Route::get('/pelicula/{id}',[PeliculaController::class,'show']);
Route::post('/pelicula',[PeliculaController::class,'store']);
Route::post('/pelicula/{id}',[PeliculaController::class,'update']);
Route::delete('/pelicula/{id}',[PeliculaController::class,'destroy']);
