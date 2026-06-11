<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$user = \App\Models\User::where('email', 'admin@reedbreed.com')->first();
if (!$user) {
    echo "User not found\n";
    exit;
}

echo "Hash: " . $user->password . "\n";
echo "Check plain 'admin123': " . (\Illuminate\Support\Facades\Hash::check('admin123', $user->password) ? "YES" : "NO") . "\n";
