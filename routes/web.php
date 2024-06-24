<?php

use Illuminate\Support\Facades\Route;

Route::get('/api/dashboard', [App\Http\Controllers\DashboardController::class, 'index']);

Route::view('/{any?}', 'app')->where('any', '.*');