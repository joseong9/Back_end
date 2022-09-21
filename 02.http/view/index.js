exports.index = function(list) {
    return `
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹 기술</title>
</head>
<body style="margin: 35px;">
    <h1>웹 기술</h1>
    <ul>
        ${list}
    </ul>
    <hr>
    <p>
        월드 와이드 웹이란
        인터넷에 연결된 사용자들이 서로의 정보를 공유할 수 있는 공간을 의미합니다.
        간단히 줄여서 WWW나 W3라고 부릅니다.
    </p>
</body>
</html>
    `;
}