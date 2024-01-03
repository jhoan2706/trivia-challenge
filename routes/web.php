<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuizController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Ruta de ejemplo para la página de inicio
Route::get('/', function () {
    return view('welcome');
});

// Ruta específica para manejar las preguntas de la API
Route::get('api/questions', [QuizController::class, 'getQuestions']);

// Ruta para manejar las rutas de Vue.js
Route::get('/{any}', function () {
    return view('welcome'); // Reemplaza 'vue_app' con el nombre de tu vista principal
})->where('any', '.*');
