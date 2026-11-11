<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

// Contact submissions now use FormSubmit from the website. Keep this former
// endpoint closed so direct requests cannot trigger unauthenticated local mail.
http_response_code(410);
echo json_encode(
    ['success' => false, 'message' => 'This contact endpoint is no longer available.'],
    JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
);
