exports.index = function(title, list, content, control) {
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>     <!-- 23.app조회.js 에서 변경됨 -->
</head>
<body style="margin: 50px;">
    <h1><a href="/">웹 기술</a></h1>
    <ul>
        ${list}                 <!-- 22.app리스트.js 에서 변경됨 -->
    </ul>
    <hr>
    <p>
        ${content}              <!-- 23.app조회.js 에서 변경됨 -->
    </p>
    <hr>
    ${control}
</body>
</html>
    `;
}