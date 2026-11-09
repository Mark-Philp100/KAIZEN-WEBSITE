<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function respond(int $status, bool $success, string $message)
{
    http_response_code($status);
    echo json_encode(
        ['success' => $success, 'message' => $message],
        JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
    );
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Method not allowed.');
}

// Bots commonly complete hidden fields that people never see.
if (trim((string) ($_POST['_honey'] ?? '')) !== '') {
    respond(200, true, 'Your enquiry has been received.');
}

$name = trim((string) ($_POST['name'] ?? ''));
$business = trim((string) ($_POST['business'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$interest = trim((string) ($_POST['interest'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$consent = trim((string) ($_POST['consent'] ?? ''));

if (
    $name === '' || $email === '' || $phone === '' || $interest === '' ||
    $message === '' || $consent === ''
) {
    respond(422, false, 'Please complete all required fields.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, false, 'Please enter a valid email address.');
}

if (
    strlen($name) > 240 || strlen($business) > 320 ||
    strlen($email) > 254 || strlen($phone) > 80 ||
    strlen($interest) > 240 || strlen($message) > 10000
) {
    respond(422, false, 'One or more fields are too long.');
}

$allowedInterests = ['Book a Demo', 'Contact Sales', 'Custom Development'];
if (!in_array($interest, $allowedInterests, true)) {
    respond(422, false, 'Please select a valid assistance option.');
}

// Prevent user input from creating extra mail headers.
$safeName = preg_replace('/[\r\n]+/', ' ', $name) ?? $name;
$safeEmail = preg_replace('/[\r\n]+/', '', $email) ?? $email;

$recipient = 'sales@kaizensuppliesltd.com';
$subject = 'New Kaizen Chat website enquiry';
$body = implode("\n", [
    'A new enquiry was submitted on the Kaizen Chat website.',
    '',
    'Name: ' . $safeName,
    'Business: ' . ($business !== '' ? $business : 'Not provided'),
    'Email: ' . $safeEmail,
    'Phone: ' . $phone,
    'Assistance: ' . $interest,
    'Consent: ' . $consent,
    '',
    'Message:',
    $message,
]);

$headers = implode("\r\n", [
    'From: Kaizen Chat Website <sales@kaizensuppliesltd.com>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

if (!mail($recipient, $subject, $body, $headers)) {
    error_log('Kaizen Chat contact form: mail() returned false.');
    respond(500, false, 'Your enquiry could not be sent right now. Please try again.');
}

respond(200, true, 'Your enquiry has been received.');
