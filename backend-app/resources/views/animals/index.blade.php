<!-- resources/views/animals/index.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Daftar Animals</title>
</head>
<body>
    <h1>Hewan yang saya punya:</h1>
    <ul>
        @foreach($animals as $index => $animal)
            <li>{{ $index + 1 }}. {{ $animal }}</li>
        @endforeach
    </ul>
</body>
</html>
