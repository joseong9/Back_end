module.exports = {
    home: function(trs) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>기아 타이거즈</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>기아 타이거즈 선수단</h1>
            <hr>
            <table>
                <tr>
                    <th>ID</th>
                    <th>선수명</th>
                    <th>백넘버</th>
                    <th>포지션</th>
                </tr>
                ${trs}
            </table>
        </body>
        </html>
        `;
    },

    trsGen: function(rows) {
        let trs = '';
        for (let row of rows) {
            trs += '<tr>';
            trs += `<td>${row.id}</td><td>${row.player}</td>`;
            trs += `<td>${row.backNo}</td><td>${row.position}</td>`;
            trs += '</tr>';
        }
        return trs;
    }
}