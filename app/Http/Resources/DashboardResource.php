<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DashboardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $meta = $this->decodatedJson($request);

        return [
            'data' => $this->collection->transform(function($item, $meta) {
                return [
                    'id' => $item->id,
                    'dataType' => $item->dataType,
                    ...$meta
                ];
            }),
        ];
    }

    private function decodatedJson($data)
    {
        return json_decode($data->metdadata, true);

    }
}
