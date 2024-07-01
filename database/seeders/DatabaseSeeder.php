<?php

namespace Database\Seeders;

use App\Models\Dashboard;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->cardData();
        $this->reportChart();
        
    }

    private function cardData(){
        $filePath = resource_path('js/api/info.json');

        $data = $this->importJsonData($filePath);
    }

    private function reportChart(){
        $filePath = resource_path('js/api/data.json');

        $data = $this->importJsonData($filePath);
    }

    public function importJsonData($filePath)
    {
        
        if (!File::exists($filePath)) {
            return response()->json(['error' => 'File does not exist.'], 404);
        }

        $json = File::get($filePath);
        $data = json_decode($json, true);

        if (is_null($data)) {
            return response()->json(['error' => 'Invalid JSON data.'], 400);
        }

        foreach ($data as $type => $meta) {
            $this->createDashboardData($meta, $type);
        }

        return $data;
    }

    private function createDashboardData($meta, $type)
    {
        foreach ($meta as $key => $item) {
            $data = $type == 'options' ? [$key => $item] : $item;
            Dashboard::create([
                'type' => $type,
                'metadata' =>json_encode($data),
            ]);
        }
    }
}
