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
    if (file_put_contents($dataFile, json_encode($data)) === false) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create data file']);
        exit;
    }
}

// Read current data
$jsonData = file_get_contents($dataFile);
if ($jsonData === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to read data file']);
    exit;
}

$data = json_decode($jsonData, true);
if ($data === null) {
    http_response_code(500);
    echo json_encode(['error' => 'Invalid JSON in data file']);
    exit;
}

$currentCount = $data['play_count'];

// Increment play counter
$newCount = $currentCount + 1;

// Check if this play should be a winner
$isWinner = false;
foreach ($winnerThresholds as $threshold) {
    if ($newCount == $threshold && $data['last_winner'] < $threshold) {
        $isWinner = true;
        $data['last_winner'] = $threshold;
        break;
    }
}

// Update data
$data['play_count'] = $newCount;

// Save updated data
if (file_put_contents($dataFile, json_encode($data)) === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save data file']);
    exit;
}

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
