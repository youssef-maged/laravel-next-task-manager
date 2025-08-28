<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/tasks', function () {
    return response()->json([
        [
            'id' => 1,
            'title' => 'Some Title',
            'description' => 'Some Description',
            'status' => 'pending',
        ]
    ]);
});
