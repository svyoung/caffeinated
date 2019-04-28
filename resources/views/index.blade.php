<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Caffeinated</title>

    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/main.css')}}" rel="stylesheet" type="text/css">

    <link href="{{asset('css/jquery-ui.min.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
<h2 style="text-align: center"> Welcome to Caffeinated! </h2>
<div id="root"></div>
<script src="{{mix('js/app.js')}}" ></script>
<script src="{{asset('js/jquery-ui.min.js')}}" ></script>
<script>
        $( "#chart" ).draggable({
            handle: 'h1'
        });
</script>
</body>
</html>