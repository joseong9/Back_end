exports.index = function(title,list,content) {
    return `
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin: 35px;">
    <h1>웹 기술</h1>
    <ul>
        ${list}
    </ul>
    <hr>
    <p>
        ${content}
    </p>
</body>
</html>
    `;
}