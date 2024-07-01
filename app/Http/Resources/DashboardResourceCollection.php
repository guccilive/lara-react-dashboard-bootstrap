<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class DashboardResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $meta = $this->decodatedJson($request);

        return [
            'data' => $this->collection->map(function($item) use ($meta) {
                return [
                    'id2' => $item->id,
                    'dataType' => $item->dataType,
                    // Spread the meta array into the result array
                    ...$meta
                ];
            })->all()
        ];
    }
}
