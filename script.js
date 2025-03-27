<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M3U8 Player</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
</head>
<body>
    <div class="container">
        <h2>Online M3U8 Player</h2>
        <input type="text" id="m3u8-url" placeholder="Enter M3U8 URL">
        <button onclick="loadStream()">Play</button>
        <video id="video" controls></video>
    </div>
    <script src="script.js"></script>
</body>
</html>