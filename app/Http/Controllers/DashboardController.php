<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    
    public function index()
    {
        $data = Dashboard::query()->get()->groupBy('type');

        return response()->json(['data' => $data], 200);
    }

    
}
