<?php

namespace App\Http\Controllers;

use App\Http\Resources\DashboardResource;
use App\Http\Resources\DashboardResourceCollection;
use App\Models\Dashboard;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    public function index()
    {
        // Fetch all records from the Dashboard model
        $data = Dashboard::all();

        // Transform the data into the desired format
        $data = $data->map(function ($dt) {
            // Decode the JSON metadata field
            $metadata = json_decode($dt->metadata, true); // Decode as associative array
            // Return an array with 'type' and the decoded metadata
            return [
                'id' => $dt->id,
                'dataType' => $dt->type,
                ...(array)$metadata,
            ];
        });

        // Group the transformed data by 'type'
        $groupedData = $data->groupBy('dataType');

        // Return the grouped data as JSON response
        return response()->json(['data' => $groupedData], 200);
    }
}
