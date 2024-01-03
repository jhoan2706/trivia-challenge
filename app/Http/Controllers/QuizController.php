<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class QuizController extends Controller
{
    public function getQuestions()
    {
        $response = Http::get('https://opentdb.com/api.php', [
            'amount' => 10,
            'difficulty' => 'hard',
            'type' => 'boolean'
        ]);

        return $response->json();
    }
}
