<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Trivia Challenge')</title>

    <!-- Include Bulma CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

    <!-- Additional head content if needed -->
</head>
<body>
    <div id="app">
        <!-- The main content of your application -->
        @yield('content')
    </div>

    <!-- Include compiled JS -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Additional scripts or foot content if needed -->
</body>
</html>
