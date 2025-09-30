<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

// Define winner thresholds
$winnerThresholds = [500, 1000, 1500, 2000, 2500];
$dataFile = 'play_counter.json';

// Initialize counter data if file doesn't exist
if (!file_exists($dataFile)) {
    $data = [
        'play_count' => 0,
        'last_winner' => 0
    ];
    file_put_contents($dataFile, json_encode($data));
}

// Read current data
$data = json_decode(file_get_contents($dataFile), true);
$currentCount = $data['play_count'];

// Increment play counter
$newCount = $currentCount + 1;

// Check if this play should be a winner
$isWinner = false;
foreach ($winnerThresholds as $threshold) {
    if ($newCount === $threshold && $data['last_winner'] < $threshold) {
        $isWinner = true;
        $data['last_winner'] = $threshold;
        break;
    }
}

// Update data
$data['play_count'] = $newCount;

// Save updated data
file_put_contents($dataFile, json_encode($data));

// Return response
$response = [
    'play_count' => $newCount,
    'is_winner' => $isWinner,
    'debug_info' => [
        'previous_count' => $currentCount,
        'thresholds' => $winnerThresholds
    ]
];

echo json_encode($response);
?>
